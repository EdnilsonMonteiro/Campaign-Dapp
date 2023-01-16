import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
	state = {
		minimumContribution: '',
		campaignTitle: '',
		campaignDescription: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		event.preventDefault();

		this.setState({ loading:true, errorMessage:'' })

		try {
			const accounts = await web3.eth.getAccounts();

			await factory.methods
				.createCampaign(this.state.minimumContribution, this.state.campaignTitle, this.state.campaignDescription)
				.send({
					from: accounts[0]
				})

			Router.pushRoute('/');
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false })
	};


	render() {
		return(
			<Layout>
				<h3> Create a campaign!  </h3>

				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Minimum Contribution</label>
						<Input 
							label="wei" 
							labelPosition="right"
							value={this.state.minimumContribution}
							onChange={event => 
								this.setState({ minimumContribution: event.target.value})}
						 />

						<label>Title</label>
						<Input 
							value={this.state.campaignTitle} //need to change
							onChange={event => 
								this.setState({ campaignTitle: event.target.value})}
						 />

						<label>Description</label>
						<Input 
							value={this.state.campaignDescription} //need to change
							onChange={event => 
								this.setState({ campaignDescription: event.target.value})}
						 />
					</Form.Field>

					<Message error header="Oops!" content={this.state.errorMessage} />

					<Button loading={this.state.loading} primary>Create!</Button>
				</Form>
			</Layout>
		);
	}
}

export default CampaignNew;