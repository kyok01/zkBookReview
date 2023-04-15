
import { ethers } from "hardhat";


const metamaskAddress = "0x312b03BF5648494d8319eCe405B2525beF0BCefD"

async function sendEth(recipient) {
  const provider = new ethers.providers.JsonRpcProvider("localhost:8545");
  const [deployer] = await ethers.getSigners();
  deployer.connect(deployer);
  const value = ethers.utils.parseEther('1'); // 送信するETHの量

  const tx = await deployer.sendTransaction({
    to: recipient,
    value: value
  });

  console.log(`Transaction hash: ${tx.hash}`);
}

async function main() {
  sendEth(metamaskAddress)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
