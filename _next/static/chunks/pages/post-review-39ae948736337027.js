(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[289],{

/***/ 3454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ref, ref1;
module.exports = ((ref = __webpack_require__.g.process) == null ? void 0 : ref.env) && typeof ((ref1 = __webpack_require__.g.process) == null ? void 0 : ref1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(7663);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 9713:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/post-review",
      function () {
        return __webpack_require__(1929);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 1929:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PostReview; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/snarkyjs/dist/web/index.js
var web = __webpack_require__(6400);
// EXTERNAL MODULE: ./src/pages/reactCOIServiceWorker.tsx
var reactCOIServiceWorker = __webpack_require__(9795);
;// CONCATENATED MODULE: ./src/pages/zkappWorkerClient.ts

class ZkappWorkerClient {
    // ---------------------------------------------------------------------------------------
    loadSnarkyJS() {
        return this._call("loadSnarkyJS", {});
    }
    setActiveInstanceToBerkeley() {
        return this._call("setActiveInstanceToBerkeley", {});
    }
    loadContract() {
        return this._call("loadContract", {});
    }
    compileContract() {
        return this._call("compileContract", {});
    }
    fetchAccount(param) {
        let { publicKey  } = param;
        const result = this._call("fetchAccount", {
            publicKey58: publicKey.toBase58()
        });
        return result;
    }
    initZkappInstance(publicKey) {
        return this._call("initZkappInstance", {
            publicKey58: publicKey.toBase58()
        });
    }
    async getX() {
        const result = await this._call("getX", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    async getVerifiedCId1() {
        const result = await this._call("getVerifiedCId1", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    async getVerifiedCId2() {
        const result = await this._call("getVerifiedCId2", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    async getVerifiedCId3() {
        const result = await this._call("getVerifiedCId3", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    async getVerifiedCId4() {
        const result = await this._call("getVerifiedCId4", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    async getVerifiedCId5() {
        const result = await this._call("getVerifiedCId5", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    async getVerifiedCId6() {
        const result = await this._call("getVerifiedCId6", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    async getVerifiedCId7() {
        const result = await this._call("getVerifiedCId7", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    createSetSecretTransaction(param) {
        let { secret1 , secret2 , secret3 , secret4 , secret5  } = param;
        return this._call("createSetSecretTransaction", {
            secret1: web/* Encoding.stringToFields */.ez.stringToFields(secret1)[0],
            secret2: web/* Encoding.stringToFields */.ez.stringToFields(secret2)[0],
            secret3: web/* Encoding.stringToFields */.ez.stringToFields(secret3)[0],
            secret4: web/* Encoding.stringToFields */.ez.stringToFields(secret4)[0],
            secret5: web/* Encoding.stringToFields */.ez.stringToFields(secret5)[0]
        });
    }
    createProveReadingTransaction(param) {
        let { cId , secret1 , secret2 , secret3 , secret4 , secret5  } = param;
        return this._call("createProveReadingTransaction", {
            cId: (0,web/* Field */.gN)(cId),
            secret1: web/* Encoding.stringToFields */.ez.stringToFields(secret1)[0],
            secret2: web/* Encoding.stringToFields */.ez.stringToFields(secret2)[0],
            secret3: web/* Encoding.stringToFields */.ez.stringToFields(secret3)[0],
            secret4: web/* Encoding.stringToFields */.ez.stringToFields(secret4)[0],
            secret5: web/* Encoding.stringToFields */.ez.stringToFields(secret5)[0]
        });
    }
    proveUpdateTransaction() {
        return this._call("proveUpdateTransaction", {});
    }
    async getTransactionJSON() {
        const result = await this._call("getTransactionJSON", {});
        return result;
    }
    _call(fn, args) {
        return new Promise((resolve, reject)=>{
            this.promises[this.nextId] = {
                resolve,
                reject
            };
            const message = {
                id: this.nextId,
                fn,
                args
            };
            this.worker.postMessage(message);
            this.nextId++;
        });
    }
    constructor(){
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(542), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
}


;// CONCATENATED MODULE: ./src/pages/post-review/index.page.tsx





const transactionFee = 0.1;
function PostReview() {
    let [state, setState] = (0,react.useState)({
        zkappWorkerClient: null,
        hasWallet: null,
        hasBeenSetup: false,
        accountExists: false,
        x: null,
        verifiedCIds: null,
        publicKey: null,
        zkappPublicKey: null,
        creatingTransaction: false
    });
    const [secret1, setSecret1] = (0,react.useState)();
    const [secret2, setSecret2] = (0,react.useState)();
    const [secret3, setSecret3] = (0,react.useState)();
    const [secret4, setSecret4] = (0,react.useState)();
    const [secret5, setSecret5] = (0,react.useState)();
    const [cId, setCId] = (0,react.useState)();
    console.log(secret1, typeof secret1);
    console.log(secret2, typeof secret2);
    console.log(secret3, typeof secret3);
    console.log(secret4, typeof secret4);
    console.log(secret5, typeof secret5);
    (0,react.useEffect)(()=>{
        (async ()=>{
            await web/* isReady */.DK;
            const { BookReview  } = await __webpack_require__.e(/* import() */ 50).then(__webpack_require__.bind(__webpack_require__, 50));
            const zkAppAddress = "B62qrNeaM6SZBdqizf7PcQw488DPLvJGTeFKwEgp71yZZuMYDQikptv";
            // This should be removed once the zkAppAddress is updated.
            if (!zkAppAddress) {
                console.error('The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qqkb7hD1We6gEfrcqosKt9C398VLp1WXeTo1i9boPoqF7B1LxHg4');
            }
            const zkApp = new BookReview(web/* PublicKey.fromBase58 */.nh.fromBase58(zkAppAddress));
        })();
        (async ()=>{
            if (!state.hasBeenSetup) {
                const zkappWorkerClient = new ZkappWorkerClient();
                console.log("Loading SnarkyJS...");
                await zkappWorkerClient.loadSnarkyJS();
                console.log("done");
                await zkappWorkerClient.setActiveInstanceToBerkeley();
                const mina = window.mina;
                if (mina == null) {
                    setState({
                        ...state,
                        hasWallet: false
                    });
                    return;
                }
                const publicKeyBase58 = (await mina.requestAccounts())[0];
                const publicKey = web/* PublicKey.fromBase58 */.nh.fromBase58(publicKeyBase58);
                console.log(publicKey);
                console.log("using key", publicKey.toBase58());
                console.log("checking if account exists...");
                const res = await zkappWorkerClient.fetchAccount({
                    publicKey: publicKey
                });
                const accountExists = res.error == null;
                await zkappWorkerClient.loadContract();
                console.log("compiling zkApp");
                await zkappWorkerClient.compileContract();
                console.log("zkApp compiled");
                const zkappPublicKey = web/* PublicKey.fromBase58 */.nh.fromBase58("B62qrNeaM6SZBdqizf7PcQw488DPLvJGTeFKwEgp71yZZuMYDQikptv");
                await zkappWorkerClient.initZkappInstance(zkappPublicKey);
                console.log("getting zkApp state...");
                await zkappWorkerClient.fetchAccount({
                    publicKey: zkappPublicKey
                });
                const x = await zkappWorkerClient.getX();
                console.log("current state:", x);
                setState({
                    ...state,
                    zkappWorkerClient,
                    hasWallet: true,
                    hasBeenSetup: true,
                    publicKey,
                    zkappPublicKey,
                    accountExists,
                    x
                });
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // -------------------------------------------------------
    // Wait for account to exist, if it didn't
    (0,react.useEffect)(()=>{
        (async ()=>{
            if (state.hasBeenSetup && !state.accountExists) {
                for(;;){
                    console.log("checking if account exists...");
                    const res = await state.zkappWorkerClient.fetchAccount({
                        publicKey: state.publicKey
                    });
                    const accountExists = res.error == null;
                    if (accountExists) {
                        break;
                    }
                    await new Promise((resolve)=>setTimeout(resolve, 5000));
                }
                setState({
                    ...state,
                    accountExists: true
                });
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        state.hasBeenSetup
    ]);
    // -------------------------------------------------------
    // Send a transaction
    const onSendSetSecretTransaction = async ()=>{
        setState({
            ...state,
            creatingTransaction: true
        });
        console.log("sending a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        if (!secret1 || !secret2 || !secret3 || !secret4 || !secret5) return;
        await state.zkappWorkerClient.createSetSecretTransaction({
            secret1,
            secret2,
            secret3,
            secret4,
            secret5
        });
        console.log("creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("getting Transaction JSON...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        console.log("requesting send transaction...");
        const { hash  } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);
        setState({
            ...state,
            creatingTransaction: false
        });
    };
    // Send a transaction
    const onSendProveReadingTransaction = async ()=>{
        setState({
            ...state,
            creatingTransaction: true
        });
        console.log("sending a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        if (!secret1 || !secret2 || !secret3 || !secret4 || !secret5 || !cId) return;
        await state.zkappWorkerClient.createProveReadingTransaction({
            cId,
            secret1,
            secret2,
            secret3,
            secret4,
            secret5
        });
        console.log("creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("getting Transaction JSON...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        console.log("requesting send transaction...");
        const { hash  } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);
        setState({
            ...state,
            creatingTransaction: false
        });
    };
    const handleChange1 = (e)=>{
        setSecret1(()=>e.target.value);
    };
    const handleChange2 = (e)=>{
        setSecret2(()=>e.target.value);
    };
    const handleChange3 = (e)=>{
        setSecret3(()=>e.target.value);
    };
    const handleChange4 = (e)=>{
        setSecret4(()=>e.target.value);
    };
    const handleChange5 = (e)=>{
        setSecret5(()=>e.target.value);
    };
    const handleChangeCId = (e)=>{
        setCId(()=>Number(e.target.value));
    };
    // -------------------------------------------------------
    // -------------------------------------------------------
    // Refresh the current state
    const onRefreshCurrentHash = async ()=>{
        console.log("getting zkApp state...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const x = await state.zkappWorkerClient.getX();
        console.log("current state:", x);
        setState({
            ...state,
            x
        });
    };
    const onRefreshCurrentVerifiedCIds = async ()=>{
        console.log("getting zkApp state...");
        const verifiedCId1 = await state.zkappWorkerClient.getVerifiedCId1();
        const verifiedCId2 = await state.zkappWorkerClient.getVerifiedCId2();
        const verifiedCId3 = await state.zkappWorkerClient.getVerifiedCId3();
        const verifiedCId4 = await state.zkappWorkerClient.getVerifiedCId4();
        const verifiedCId5 = await state.zkappWorkerClient.getVerifiedCId5();
        const verifiedCId6 = await state.zkappWorkerClient.getVerifiedCId6();
        const verifiedCId7 = await state.zkappWorkerClient.getVerifiedCId7();
        const verifiedCIds = [
            Number(verifiedCId1.toString()),
            Number(verifiedCId2.toString()),
            Number(verifiedCId3.toString()),
            Number(verifiedCId4.toString()),
            Number(verifiedCId5.toString()),
            Number(verifiedCId6.toString()),
            Number(verifiedCId7.toString())
        ].filter((ele)=>ele !== 0);
        console.log(verifiedCIds);
        setState({
            ...state,
            verifiedCIds
        });
    };
    // -------------------------------------------------------...
    // -------------------------------------------------------
    // Create UI elements
    let hasWallet;
    if (state.hasWallet != null && !state.hasWallet) {
        const auroLink = "https://www.aurowallet.com/";
        const auroLinkElem = /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
            href: auroLink,
            target: "_blank",
            rel: "noreferrer",
            children: [
                " ",
                "[Link]",
                " "
            ]
        });
        hasWallet = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                " ",
                "Could not find a wallet. Install Auro wallet here: ",
                auroLinkElem
            ]
        });
    }
    let setupText = state.hasBeenSetup ? "SnarkyJS Ready" : "Setting up SnarkyJS...";
    let setup = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            " ",
            setupText,
            " ",
            hasWallet
        ]
    });
    let accountDoesNotExist;
    if (state.hasBeenSetup && !state.accountExists) {
        const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey.toBase58();
        accountDoesNotExist = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                "Account does not exist. Please visit the faucet to fund this account",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: faucetLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                        " ",
                        "[Link]",
                        " "
                    ]
                })
            ]
        });
    }
    let mainContent;
    if (state.hasBeenSetup && state.accountExists) {
        var _state_x, _state_verifiedCIds;
        mainContent = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                    children: "set secret"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    value: secret1,
                    onChange: handleChange1,
                    type: "text"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    value: secret2,
                    onChange: handleChange2,
                    type: "text"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    value: secret3,
                    onChange: handleChange3,
                    type: "text"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    value: secret4,
                    onChange: handleChange4,
                    type: "text"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    value: secret5,
                    onChange: handleChange5,
                    type: "text"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    onClick: onSendSetSecretTransaction,
                    disabled: state.creatingTransaction,
                    children: [
                        " ",
                        "Send Transaction",
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        " Current Number in zkApp: ",
                        (_state_x = state.x) === null || _state_x === void 0 ? void 0 : _state_x.toString(),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onRefreshCurrentHash,
                    children: " Get Latest State "
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                    children: "prove reading"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    value: cId,
                    onChange: handleChangeCId,
                    type: "text"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    onClick: onSendProveReadingTransaction,
                    disabled: state.creatingTransaction,
                    children: [
                        " ",
                        "Send Transaction",
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: " Current Verified CId in zkApp:"
                }),
                (_state_verifiedCIds = state.verifiedCIds) === null || _state_verifiedCIds === void 0 ? void 0 : _state_verifiedCIds.map((ele, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: ele.toString()
                    }, i)),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onRefreshCurrentVerifiedCIds,
                    children: " Get Latest State "
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            setup,
            accountDoesNotExist,
            mainContent
        ]
    });
}


/***/ }),

/***/ 7663:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,774,888,179], function() { return __webpack_exec__(9713); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);