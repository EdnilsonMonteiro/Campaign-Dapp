import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
 
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xfdA38E2971e90ebC35F39958BCa5603dC27ab795"
);
 
export default instance;