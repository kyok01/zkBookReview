import { ethers } from 'ethers';

import mintJSON from '../contract/MintNFT/MintNFT.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
// const provider = new ethers.providers.InfuraProvider(ENVS.network, process.env.NEXT_PUBLIC_INFURA_KEY);
const mnemonic = ""
const mnWallet = ethers.Wallet.fromMnemonic(mnemonic);
const wallet = new ethers.Wallet(mnWallet.privateKey, provider);

const mintNFT = new ethers.Contract("", mintJSON.abi, wallet);

const client = {
  wallet: wallet,
  provider: provider,
  mintNFT: mintNFT,
};

// Metamaskを介してWeb3プロバイダーを設定します
const provider = new ethers.providers.Web3Provider(window.ethereum);


// コントラクトのアドレスを指定します
const contractAddress = '0x1234567890123456789012345678901234567890';

// Metamaskアカウントを選択します
const signer = provider.getSigner();

// コントラクトをインスタンス化します
const contract = new ethers.Contract(contractAddress, abi, signer);
