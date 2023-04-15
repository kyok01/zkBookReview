import { ethers } from "hardhat";

async function sendEth(recipient) {
  const [deployer] = await ethers.getSigners();
  const value = ethers.utils.parseEther('1'); // 送信するETHの量

  const tx = await deployer.sendTransaction({
    to: recipient,
    value: value
  });

  console.log(`Transaction hash: ${tx.hash}`);
}

async function main() {
  const wallet = ethers.Wallet.createRandom();
  sendEth(wallet.address)
  const deployer = wallet.connect(await ethers.provider);
  const MintNFT = await ethers.getContractFactory('MintNFT');
  const mintNFT = await MintNFT.connect(deployer).deploy();
  console.log('const contractAddr = ', `"${mintNFT.address}"`);
  console.log('const walletMnemonic =', `"${wallet.mnemonic.phrase}"`);
  console.log('const walletPrivateKey = ', `"${wallet.privateKey}"`);
  console.log('const walletPublicKey = ', `"${wallet.address}"`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
