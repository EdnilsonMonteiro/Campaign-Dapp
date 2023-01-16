import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Campaign from '../ethereum/campaign';
import Layout from "../components/Layout";
import { Link } from "../routes";
import Header from "../components/header";
import Search, { results } from "../components/search";

class CampaignIndex extends Component {

  state = {
    titles: null
  }

  componentDidMount() {
    this.fetchTitle().then(titles => this.setState({ titles }))
  }

  fetchTitle = async () => {
    const campaigns = this.props.campaigns;

    const campaignLength = campaigns.length;
    let titles = [];

    for(let i = campaignLength - 1; i >= 0; i--) {
      const campaign = Campaign(campaigns[i]);
      titles[i] = await campaign.methods.campaignTitle().call();
    }

    return titles;
  }

  static async getInitialProps(props) {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns};
  }

  renderCampaigns() {
    const { titles } = this.state;

    if(!titles) {
      return;
    }

    console.log(this.props.campaigns)
    const items = this.props.campaigns.map((address, index) => {
      return {
        header: titles[index] + " / " + address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    
    return (
      <Layout>
        <div>

          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()} 

        </div>

      </Layout>
    );
  }

}

export default CampaignIndex;