(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[216],{

/***/ 687:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/nft-list",
      function () {
        return __webpack_require__(9819);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 9819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NftList; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@ethersproject/providers/lib.esm/web3-provider.js + 21 modules
var web3_provider = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(6441);
// EXTERNAL MODULE: ./node_modules/@ethersproject/contracts/lib.esm/index.js + 16 modules
var contracts_lib_esm = __webpack_require__(6076);
;// CONCATENATED MODULE: ./src/abi/MintNFT.json
var MintNFT_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"string","name":"_title","type":"string"}],"name":"addBook","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bookId","type":"uint256"},{"internalType":"string","name":"_content","type":"string"},{"internalType":"address","name":"_reviewer","type":"address"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bookId","type":"uint256"},{"internalType":"string","name":"_blockAddress","type":"string"}],"name":"addVerifiedBlockAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"books","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"title","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"comments","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"bookId","type":"uint256"},{"internalType":"string","name":"content","type":"string"},{"internalType":"address","name":"reviewer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bookId","type":"uint256"}],"name":"getCommentsByBook","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"getCommentsByIds","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"bookId","type":"uint256"},{"internalType":"string","name":"content","type":"string"},{"internalType":"address","name":"reviewer","type":"address"}],"internalType":"struct MintNFT.Comment[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bookId","type":"uint256"}],"name":"isMintNFTed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./src/components/nft-list/nft-list.tsx




const NFTList = ()=>{
    const contractAddress = "0x4fc13E05998A33dFC9067E2A201aCd9C8CaA2405";
    const [nfts, setNFTs] = (0,react.useState)([]);
    // -----------------------------------
    const [userAddress, setUserAddress] = (0,react.useState)("");
    const [provider, setProvider] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        const connectWallet = async ()=>{
            try {
                const { ethereum  } = window;
                if (!ethereum) {
                    throw new Error("Please install MetaMask!");
                } else {
                    console.log("MetaMask is installed!", ethereum);
                }
                const provider = new web3_provider/* Web3Provider */.Q(ethereum);
                setProvider(provider);
                const accounts = await provider.listAccounts();
                const currentAccount = accounts[0];
                setUserAddress(currentAccount);
                const connectedChainId = await provider.getNetwork().then((network)=>network.chainId);
                await ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: lib_esm/* hexValue */.$P(connectedChainId)
                        }
                    ]
                });
            } catch (e) {
                console.log(e);
            }
        };
        connectWallet();
        console.log(userAddress);
    }, [
        userAddress
    ]);
    // load -----------------------------------
    const loadNfts = async ()=>{
        try {
            const { ethereum  } = window;
            if (!ethereum) {
                throw new Error("Please install MetaMask!");
            } else {
                console.log("MetaMask is installed!", ethereum);
            }
            const provider = new web3_provider/* Web3Provider */.Q(ethereum);
            const signer = provider.getSigner();
            const contract = new contracts_lib_esm/* Contract */.CH(contractAddress, MintNFT_namespaceObject.Mt, signer);
            const tokenIds = await contract.totalSupply();
            const nftList = await Promise.all(tokenIds.map(async (tokenId)=>{
                const tokenURI = await contract.methods.tokenURI(tokenId - 1);
                const res = await fetch(tokenURI);
                const data = await res.json();
                return {
                    tokenId,
                    title: data.name,
                    description: data.description,
                    review: data.review,
                    image: data.image
                };
            }));
            setNFTs(nftList);
        } catch (e) {
            console.log("エラー", e);
        }
    };
    (0,react.useEffect)(()=>{
        loadNfts();
    }, []);
    // -----------------------------------
    // buy -----------------------------------
    // const buyNFT = async (tokenId: string) : Promise<void> => {
    //   try {
    //     const { ethereum } = window as any;
    //     if (!ethereum) {
    //       throw new Error('Please install MetaMask!');
    //     } else {
    //       console.log('MetaMask is installed!', ethereum);
    //     }
    //     const provider = new ethers.providers.Web3Provider(ethereum);
    //     const signer = provider.getSigner();
    //     const contract = new ethers.Contract(contractAddress, MintNFT.abi, signer);
    //     const res = await contract.purchase(tokenId);
    //     await loadNfts();
    //     console.log(nfts)
    //     console.log("res: ", res)
    //   } catch (e) {
    //     console.log('エラー', e)
    //   }
    // }
    // -----------------------------------
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                children: "All NFTs"
            }),
            nfts === null || nfts === void 0 ? void 0 : nfts.map((nft)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            "Token ID: ",
                            nft.tokenId
                        ]
                    })
                }, nft.tokenId))
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/nft-list/index.ts


;// CONCATENATED MODULE: ./src/pages/nft-list/index.page.tsx


function NftList() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTList, {});
}


/***/ }),

/***/ 6601:
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [433,774,888,179], function() { return __webpack_exec__(687); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);