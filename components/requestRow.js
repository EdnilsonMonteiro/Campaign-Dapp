import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
  state = {
    manager: '',
    account: '',
    loading: false
  }

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  async componentDidMount() {
    this.setState({
      manager: await this.managerAddress(),
      account: await this.getAccounts()
    });
  }

  onApprove = async () => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState({ loading:true });

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });

    Router.pushRoute(`/campaigns/${this.props.address}/requests`);

    this.setState({ loading:false });
  };

  onFinalize = async () => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState({ loading:true });

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });

    Router.pushRoute(`/campaigns/${this.props.address}/requests`);

    this.setState({ loading:false });
  }

  managerAddress = async () => {
    const campaign = Campaign(this.props.address);
    const manager = await campaign.methods.manager().call();
    return manager;
  }

  getAccounts = async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  }



	render() {
		const { Row, Cell } = Table;
		const { id, request, approversCount } = this.props;
		const { manager, account } = this.state;
		const readyToFinalize = request.approvalCount > approversCount / 2;

		return (
			<Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
				<Cell> {id} </Cell>
				<Cell> {request.description} </Cell>
				<Cell> {web3.utils.fromWei(request.value, 'ether')} </Cell>
				<Cell> {request.recipient} </Cell>
				<Cell> {request.approvalCount}/{approversCount} </Cell>
				<Cell>
				{request.complete ? null : (
					<Button loading={this.state.loading} color="green" basic onClick={this.onApprove}>Approve</Button>
				)}
				</Cell>
				<Cell>
				{request.complete || account != manager ? null : (
					<Button loading={this.state.loading} color="teal" basic onClick={this.onFinalize}>Finalize</Button>
				)}
				</Cell>
			</Row>

		);
	}
}

export default RequestRow;