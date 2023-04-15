(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[324],{

/***/ 5053:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/add-book",
      function () {
        return __webpack_require__(4814);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ index_page_AddBook; }
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
// EXTERNAL MODULE: ./src/abi/MintNFT.json
var MintNFT = __webpack_require__(5841);
;// CONCATENATED MODULE: ./src/components/add-book/add-book.tsx




const AddBook = ()=>{
    const contractAddress = "0x1dbb068EF9c4C73F086DBec28aAa6F79CCb5F499";
    // -----------------------------------
    const [userAddress, setUserAddress] = (0,react.useState)("");
    const [title, setTitle] = (0,react.useState)("");
    const [description, setDescription] = (0,react.useState)("");
    const [imageTitle, setImageTitle] = (0,react.useState)(null);
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
    }, [
        userAddress
    ]);
    // add -----------------------------------
    const addBook = async (title, description, imageId)=>{
        try {
            const { ethereum  } = window;
            if (!ethereum) {
                throw new Error("Please install MetaMask!");
            } else {
                console.log("MetaMask is installed!", ethereum);
            }
            const provider = new web3_provider/* Web3Provider */.Q(ethereum);
            const signer = provider.getSigner();
            const contract = new contracts_lib_esm/* Contract */.CH(contractAddress, MintNFT/* abi */.Mt, signer);
            const res = await contract.addBook(title, description, imageId);
            console.log("res: ", res);
        } catch (e) {
            console.log("エラー", e);
        }
    };
    const handleTitleChange = (event)=>{
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event)=>{
        setDescription(event.target.value);
    };
    const handleImageChange = (event)=>{
        const file = event.target.files && event.target.files[0];
        setImageTitle((file === null || file === void 0 ? void 0 : file.name) || "");
    };
    // -----------------------------------
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                children: "Add NFTs"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                type: "text",
                value: title,
                onChange: handleTitleChange
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                type: "text",
                value: description,
                onChange: handleDescriptionChange
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                type: "file",
                onChange: handleImageChange
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>addBook(title, description, imageTitle !== null && imageTitle !== void 0 ? imageTitle : ""),
                children: "add"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/add-book/index.ts


;// CONCATENATED MODULE: ./src/pages/add-book/index.page.tsx


function index_page_AddBook() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AddBook, {});
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [433,593,774,888,179], function() { return __webpack_exec__(5053); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);