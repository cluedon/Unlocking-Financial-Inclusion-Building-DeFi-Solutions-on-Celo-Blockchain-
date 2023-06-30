const Web3 = require("web3");

const web3 = new Web3("<Celo-provider-URL>");

const myTokenAddress = "<myToken-address>";
const myTokenABI = <myToken-ABI>;

const myTokenContract = new web3.eth.Contract(myTokenABI, myTokenAddress);

// Example interaction: Get the balance of an address
async function getBalance(address) {
    const balance = await myTokenContract.methods.balanceOf(address).call


    console.log("Balance:", balance);
}

getBalance("<address-to-check>");
