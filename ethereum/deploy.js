const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
 
const provider = new HDWalletProvider(
  'popular fresh visit match wise mask act bus drum matter artwork finger',
  // remember to change this to your own phrase!
  'https://goerli.infura.io/v3/256f04d2e7db48b599c0c018c6f9ab98'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log("Attempting to deploy from account", accounts[0]);
 
  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "2200000", from: accounts[0] });
 
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();