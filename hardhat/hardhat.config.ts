import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

// const { MNEMONIC, INFURA_KEY } = process.env;
// if (!MNEMONIC) {
//   throw "must specify MNEMONIC and INFURA_KEY as env variable";
// }

// const mnWallet = ethers.Wallet.fromMnemonic(MNEMONIC);


const config: HardhatUserConfig = {
	solidity: '0.8.18',
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {},
		alfajores: {
			url: 'https://alfajores-forno.celo-testnet.org',
			accounts: {
				mnemonic: process.env.MNEMONIC,
				path: "m/44'/60'/0'/0",
			},
			chainId: 44787,
		},
		localhost: {
			url: 'http://localhost:8545',
		},
	},
};

export default config;
