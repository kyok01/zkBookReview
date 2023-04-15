import React, { useState } from "react";
import { ethers } from "ethers";
import { RecoilRoot, useRecoilState, atom } from "recoil";
import mintJSON from "../../contract/MintNFT/MintNFT.json";

const accountState = atom({
  key: "accountState",
  default: null,
});

const abi = mintJSON["abi"];

const contractAddr = "0x3a19da9AA0625Fe5531F457762E0F63291114615";
const walletMnemonic =
  "submit shoe march victory favorite flower analyst forum dress tower teach canal";
const walletPrivateKey =
  "0xf1c8e403bbb4a14c1fb08d753e5b23d227388c3d1d972881503403a7838ef13e";
const walletPublicKey = "0x7243B53610eBeD7173BA941B72f1E37e98c1A601";

export default function main() {
  return (
    <RecoilRoot>
      <Hello />
    </RecoilRoot>
  );
}

function Hello() {
  const [account, setAccount] = useRecoilState(accountState);
  const [title, setTokenId] = useState("");

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        // Metamaskに接続します
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Metamaskアカウントを取得します
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Please install Metamask");
    }
  };

  const wallet = new ethers.Wallet(walletPrivateKey);
  console.log("_____wallet ______", wallet);
  console.log("____ethers ______", ethers);

  const mintNFT = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddr, abi, signer);

    // titleが入力されているか確認します
    if (!title) {
      console.error("Please enter a title");
      return;
    }

    try {
      // NFTをMintします
      const tx = await contract.addBook(title);
      await tx.wait();
      console.log("NFT Minted!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {account ? (
        <p>Connected with {account}</p>
      ) : (
        <button onClick={connectMetamask}>Connect Metamask</button>
      )}

      <input
        type="text"
        value={title}
        onChange={(e) => setTokenId(e.target.value)}
      />

      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
}
