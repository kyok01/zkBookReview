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
		hardhat: {
			accounts: {
				count: 10,
				balance: "10000000000000000000", // 10 ETH
			  },
		}
	}
};

export default config;
