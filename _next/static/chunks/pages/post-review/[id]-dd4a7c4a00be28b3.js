(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[922],{

/***/ 4895:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/post-review/[id]",
      function () {
        return __webpack_require__(8961);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 8961:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_page_PostReview; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs
var chunk_QEVFQ4EU = __webpack_require__(5059);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/styled-system/dist/index.mjs
var dist = __webpack_require__(3179);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs + 2 modules
var chunk_T2VHL7RE = __webpack_require__(1628);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs + 5 modules
var chunk_3LE6AY5Q = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/shared-utils/dist/index.mjs
var shared_utils_dist = __webpack_require__(5432);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-SRMZVY4F.mjs
// src/container.tsx



var Container = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function Container2(props, ref) {
  const { className, centerContent, ...rest } = (0,dist/* omitThemingProps */.Lr)(props);
  const styles = (0,chunk_T2VHL7RE/* useStyleConfig */.mq)("Container", props);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.div */.m.div,
    {
      ref,
      className: (0,shared_utils_dist.cx)("chakra-container", className),
      ...rest,
      __css: {
        ...styles,
        ...centerContent && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }
    }
  );
});
Container.displayName = "Container";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs
var chunk_B2MGPQRJ = __webpack_require__(4418);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs + 3 modules
var chunk_O5CRURSQ = __webpack_require__(8420);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs
var chunk_P74GIWPW = __webpack_require__(8911);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(5227);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs
var react_use_merge_refs_dist = __webpack_require__(1103);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/form-control/dist/chunk-6ZNYZUDD.mjs
// src/form-control.tsx






var [FormControlStylesProvider, useFormControlStyles] = (0,react_context_dist/* createContext */.k)({
  name: `FormControlStylesContext`,
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
var [FormControlProvider, useFormControlContext] = (0,react_context_dist/* createContext */.k)({
  strict: false,
  name: "FormControlContext"
});
function useFormControlProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = (0,react.useId)();
  const id = idProp || `field-${uuid}`;
  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = (0,react.useState)(false);
  const [hasHelpText, setHasHelpText] = (0,react.useState)(false);
  const [isFocused, setFocus] = (0,react.useState)(false);
  const getHelpTextProps = (0,react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props2,
      ref: (0,react_use_merge_refs_dist/* mergeRefs */.lq)(forwardedRef, (node) => {
        if (!node)
          return;
        setHasHelpText(true);
      })
    }),
    [helpTextId]
  );
  const getLabelProps = (0,react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-focus": (0,shared_utils_dist/* dataAttr */.PB)(isFocused),
      "data-disabled": (0,shared_utils_dist/* dataAttr */.PB)(isDisabled),
      "data-invalid": (0,shared_utils_dist/* dataAttr */.PB)(isInvalid),
      "data-readonly": (0,shared_utils_dist/* dataAttr */.PB)(isReadOnly),
      id: props2.id !== void 0 ? props2.id : labelId,
      htmlFor: props2.htmlFor !== void 0 ? props2.htmlFor : id
    }),
    [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]
  );
  const getErrorMessageProps = (0,react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props2,
      ref: (0,react_use_merge_refs_dist/* mergeRefs */.lq)(forwardedRef, (node) => {
        if (!node)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    }),
    [feedbackId]
  );
  const getRootProps = (0,react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ...htmlProps,
      ref: forwardedRef,
      role: "group"
    }),
    [htmlProps]
  );
  const getRequiredIndicatorProps = (0,react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    }),
    []
  );
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
var FormControl = (0,chunk_QEVFQ4EU/* forwardRef */.G)(
  function FormControl2(props, ref) {
    const styles = (0,chunk_T2VHL7RE/* useMultiStyleConfig */.jC)("Form", props);
    const ownProps = (0,dist/* omitThemingProps */.Lr)(props);
    const {
      getRootProps,
      htmlProps: _,
      ...context
    } = useFormControlProvider(ownProps);
    const className = (0,shared_utils_dist.cx)("chakra-form-control", props.className);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(FormControlProvider, { value: context, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FormControlStylesProvider, { value: styles, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      chunk_3LE6AY5Q/* chakra.div */.m.div,
      {
        ...getRootProps({}, ref),
        className,
        __css: styles["container"]
      }
    ) }) });
  }
);
FormControl.displayName = "FormControl";
var FormHelperText = (0,chunk_QEVFQ4EU/* forwardRef */.G)(
  function FormHelperText2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    const className = (0,shared_utils_dist.cx)("chakra-form__helper-text", props.className);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      chunk_3LE6AY5Q/* chakra.div */.m.div,
      {
        ...field == null ? void 0 : field.getHelpTextProps(props, ref),
        __css: styles.helperText,
        className
      }
    );
  }
);
FormHelperText.displayName = "FormHelperText";



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/form-control/dist/chunk-IJBC3YLI.mjs


// src/use-form-control.ts

function useFormControl(props) {
  const { isDisabled, isInvalid, isReadOnly, isRequired, ...rest } = useFormControlProps(props);
  return {
    ...rest,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": (0,shared_utils_dist/* ariaAttr */.Qm)(isInvalid),
    "aria-required": (0,shared_utils_dist/* ariaAttr */.Qm)(isRequired),
    "aria-readonly": (0,shared_utils_dist/* ariaAttr */.Qm)(isReadOnly)
  };
}
function useFormControlProps(props) {
  var _a, _b, _c;
  const field = useFormControlContext();
  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus,
    onBlur,
    ...rest
  } = props;
  const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if ((field == null ? void 0 : field.hasFeedbackText) && (field == null ? void 0 : field.isInvalid)) {
    labelIds.push(field.feedbackId);
  }
  if (field == null ? void 0 : field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return {
    ...rest,
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id != null ? id : field == null ? void 0 : field.id,
    isDisabled: (_a = disabled != null ? disabled : isDisabled) != null ? _a : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_b = readOnly != null ? readOnly : isReadOnly) != null ? _b : field == null ? void 0 : field.isReadOnly,
    isRequired: (_c = required != null ? required : isRequired) != null ? _c : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: (0,shared_utils_dist/* callAllHandlers */.v0)(field == null ? void 0 : field.onFocus, onFocus),
    onBlur: (0,shared_utils_dist/* callAllHandlers */.v0)(field == null ? void 0 : field.onBlur, onBlur)
  };
}



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs
// src/input.tsx




var Input = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function Input2(props, ref) {
  const { htmlSize, ...rest } = props;
  const styles = (0,chunk_T2VHL7RE/* useMultiStyleConfig */.jC)("Input", rest);
  const ownProps = (0,dist/* omitThemingProps */.Lr)(rest);
  const input = useFormControl(ownProps);
  const _className = (0,shared_utils_dist.cx)("chakra-input", props.className);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.input */.m.input,
    {
      size: htmlSize,
      ...input,
      __css: styles.field,
      ref,
      className: _className
    }
  );
});
Input.displayName = "Input";
Input.id = "Input";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs + 3 modules
var chunk_NAA7TEES = __webpack_require__(6272);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs
var chunk_DKFDJSXF = __webpack_require__(6877);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react-children-utils/dist/index.mjs
var react_children_utils_dist = __webpack_require__(2495);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-Z47J5YMH.mjs
// src/list.tsx





var [ListStylesProvider, useListStyles] = (0,react_context_dist/* createContext */.k)({
  name: `ListStylesContext`,
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
});
var List = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function List2(props, ref) {
  const styles = (0,chunk_T2VHL7RE/* useMultiStyleConfig */.jC)("List", props);
  const {
    children,
    styleType = "none",
    stylePosition,
    spacing,
    ...rest
  } = (0,dist/* omitThemingProps */.Lr)(props);
  const validChildren = (0,react_children_utils_dist/* getValidChildren */.W)(children);
  const selector = "& > *:not(style) ~ *:not(style)";
  const spacingStyle = spacing ? { [selector]: { mt: spacing } } : {};
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ListStylesProvider, { value: styles, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.ul */.m.ul,
    {
      ref,
      listStyleType: styleType,
      listStylePosition: stylePosition,
      role: "list",
      __css: { ...styles.container, ...spacingStyle },
      ...rest,
      children: validChildren
    }
  ) });
});
List.displayName = "List";
var OrderedList = (0,chunk_QEVFQ4EU/* forwardRef */.G)((props, ref) => {
  const { as, ...rest } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(List, { ref, as: "ol", styleType: "decimal", marginStart: "1em", ...rest });
});
OrderedList.displayName = "OrderedList";
var UnorderedList = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function UnorderedList2(props, ref) {
  const { as, ...rest } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(List, { ref, as: "ul", styleType: "initial", marginStart: "1em", ...rest });
});
UnorderedList.displayName = "UnorderedList";
var ListItem = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function ListItem2(props, ref) {
  const styles = useListStyles();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_3LE6AY5Q/* chakra.li */.m.li, { ref, ...props, __css: styles.item });
});
ListItem.displayName = "ListItem";
var ListIcon = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function ListIcon2(props, ref) {
  const styles = useListStyles();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_DKFDJSXF/* Icon */.J, { ref, role: "presentation", ...props, __css: styles.icon });
});
ListIcon.displayName = "ListIcon";



// EXTERNAL MODULE: ./node_modules/snarkyjs/dist/web/index.js
var web = __webpack_require__(6400);
// EXTERNAL MODULE: ./node_modules/@ethersproject/providers/lib.esm/web3-provider.js + 21 modules
var web3_provider = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(6441);
// EXTERNAL MODULE: ./node_modules/@ethersproject/contracts/lib.esm/index.js + 16 modules
var contracts_lib_esm = __webpack_require__(6076);
// EXTERNAL MODULE: ./src/components/post-review/styles/style.module.css
var style_module = __webpack_require__(457);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
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
        let { secret1 , secret2  } = param;
        return this._call("createSetSecretTransaction", {
            secret1: web/* Encoding.stringToFields */.ez.stringToFields(secret1)[0],
            secret2: web/* Encoding.stringToFields */.ez.stringToFields(secret2)[0]
        });
    }
    createProveReadingTransaction(param) {
        let { cId , secret1 , secret2  } = param;
        return this._call("createProveReadingTransaction", {
            cId: (0,web/* Field */.gN)(cId),
            secret1: web/* Encoding.stringToFields */.ez.stringToFields(secret1)[0],
            secret2: web/* Encoding.stringToFields */.ez.stringToFields(secret2)[0]
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


// EXTERNAL MODULE: ./src/abi/MintNFT.json
var MintNFT = __webpack_require__(5841);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(5434);
;// CONCATENATED MODULE: ./src/components/post-review/post-review.tsx












const transactionFee = 0.1;
const PostReview = ()=>{
    const router = (0,next_router.useRouter)();
    const contractAddress = "0x1dbb068EF9c4C73F086DBec28aAa6F79CCb5F499";
    const comments = [
        {
            id: 1,
            bookId: 1,
            content: "This book is fantastic! It's the era of openness and transparency !",
            reviewer: "0xA09AD8cbA86AE23937e4e3E71F995F7C406a89ba"
        },
        {
            id: 2,
            bookId: 1,
            content: "This book is not so good !",
            reviewer: "0xA09AD8cbA86AE23937e4e3E71F995F7C406a89ba"
        },
        {
            id: 3,
            bookId: 1,
            content: "This is great !!",
            reviewer: "0xA09AD8cbA86AE23937e4e3E71F995F7C406a89ba"
        }
    ];
    const [userAddress, setUserAddress] = (0,react.useState)("");
    const [review, setReview] = (0,react.useState)("");
    const [bookTitle, setBookTitle] = (0,react.useState)("");
    const [bookDescription, setBookDescription] = (0,react.useState)(null);
    const [provider, setProvider] = (0,react.useState)();
    const [postedCId, setPostedCId] = (0,react.useState)();
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
    const [tokenId, setTokenId] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        const getBook = async ()=>{
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
                const currentUrl = router.asPath;
                const regex = /\/(\d+)$/;
                const match = currentUrl.match(regex);
                if (match) {
                    setTokenId(match[1]);
                } else {
                    console.log("数字が見つかりませんでした");
                }
                const book = await contract.getBookById(tokenId);
                setBookTitle(book === null || book === void 0 ? void 0 : book.title);
                setBookDescription(book === null || book === void 0 ? void 0 : book.description);
                const comments = await contract.getCommentsByBook(tokenId);
                setBookDescription(comments.join(", "));
            } catch (e) {
                console.log("エラー", e);
            }
        };
        getBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
    const [cId, setCId] = (0,react.useState)();
    console.log(secret1, typeof secret1);
    console.log(secret2, typeof secret2);
    (0,react.useEffect)(()=>{
        (async ()=>{
            await web/* isReady */.DK;
            const { BookReview  } = await __webpack_require__.e(/* import() */ 50).then(__webpack_require__.bind(__webpack_require__, 50));
            const zkAppAddress = "B62qpaEuAKao4hVdToyFawbZVuhdJNLm4LCWKQARCXZUAtsLPDsj4Xa";
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
                const zkappPublicKey = web/* PublicKey.fromBase58 */.nh.fromBase58("B62qpaEuAKao4hVdToyFawbZVuhdJNLm4LCWKQARCXZUAtsLPDsj4Xa");
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
            state.zkappWorkerClient && await onRefreshCurrentVerifiedCIds();
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        state.zkappWorkerClient
    ]);
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
        if (!secret1 || !secret2) return;
        await state.zkappWorkerClient.createSetSecretTransaction({
            secret1,
            secret2
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
        if (!secret1 || !secret2 || !cId) return;
        await state.zkappWorkerClient.createProveReadingTransaction({
            cId,
            secret1,
            secret2
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
    let setupText = state.hasBeenSetup ? "" : "Setting up SnarkyJS...";
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
        mainContent = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container, {
            maxW: "2xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B2MGPQRJ/* Heading */.X, {
                    as: "h2",
                    size: "2xl",
                    children: "ZKP"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_O5CRURSQ/* Stack */.K, {
                    spacing: 4,
                    className: (style_module_default()).formStack,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                            children: "Q1. What is the fourth step to run the network ?"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                            value: secret1,
                            onChange: handleChange1,
                            type: "text"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                            children: "Q2. Please copy and paste the first paragraph under the heading 6. Incentive"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                            value: secret2,
                            onChange: handleChange2,
                            type: "text"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                            children: "Please input your commentId"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                            value: cId,
                            onChange: handleChangeCId,
                            type: "text"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_O5CRURSQ/* Stack */.K, {
                    align: "end",
                    className: (style_module_default()).minaTransactionStack,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_NAA7TEES/* Button */.z, {
                        onClick: onSendProveReadingTransaction,
                        disabled: state.creatingTransaction,
                        colorScheme: "green",
                        children: [
                            " ",
                            "Send Transaction",
                            " "
                        ]
                    })
                })
            ]
        });
    }
    // ------------------------------
    // post review -----------------------------------
    const postReview = async (review)=>{
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
            const res = await contract.addComment(tokenId, review, userAddress);
            setPostedCId(()=>res.commentId);
            console.log("res: ", res);
        } catch (e) {
            console.log("エラー", e);
        }
    };
    const handleReviewChange = (event)=>{
        setReview(event.target.value);
    };
    // ----------------------------------
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container, {
        maxW: "2xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B2MGPQRJ/* Heading */.X, {
                as: "h2",
                size: "2xl",
                className: (style_module_default()).h2,
                children: "Post your comment"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_O5CRURSQ/* Stack */.K, {
                direction: "row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                        src: "/".concat(tokenId, ".png"),
                        width: 150,
                        height: 200,
                        alt: "logo",
                        className: (style_module_default()).img
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (style_module_default()).alignItemsCenter,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B2MGPQRJ/* Heading */.X, {
                                    as: "h3",
                                    size: "lg",
                                    children: "title"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                                    fontSize: "xl",
                                    children: "Bitcoin: A Peer-to-Peer Electronic Cash System"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B2MGPQRJ/* Heading */.X, {
                                    as: "h3",
                                    size: "lg",
                                    children: "description"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                                    fontSize: "md",
                                    children: "Written by Satoshi Nakamoto"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_O5CRURSQ/* Stack */.K, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                        children: "Comments"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(List, {
                        children: comments.map((comment, i)=>{
                            var _state_verifiedCIds;
                            /*#__PURE__*/ return (0,jsx_runtime.jsxs)(ListItem, {
                                children: [
                                    ((_state_verifiedCIds = state.verifiedCIds) === null || _state_verifiedCIds === void 0 ? void 0 : _state_verifiedCIds.includes(i + 1)) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListIcon, {
                                        as: index_esm/* MdCheckCircle */.ZSR,
                                        color: "green.500"
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ListIcon, {
                                        as: index_esm/* MdCircle */.uAz,
                                        color: "gray.500"
                                    }),
                                    comment.content
                                ]
                            }, i);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_O5CRURSQ/* Stack */.K, {
                direction: "column",
                spacing: 2,
                className: (style_module_default()).formStack,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                        children: "Comment !"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_O5CRURSQ/* Stack */.K, {
                        align: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                            type: "text",
                            value: review,
                            onChange: handleReviewChange,
                            height: "5rem"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_O5CRURSQ/* Stack */.K, {
                        align: "end",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_NAA7TEES/* Button */.z, {
                            onClick: ()=>postReview(review),
                            colorScheme: "green",
                            children: "post review"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                children: postedCId && "CommentId you just now submitted : ".concat(postedCId)
            }),
            setup,
            accountDoesNotExist,
            mainContent
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/post-review/index.ts


;// CONCATENATED MODULE: ./src/pages/post-review/[id].page.tsx


function _id_page_PostReview() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostReview, {});
}


/***/ }),

/***/ 457:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"style_container__Rckya","tokenInfo":"style_tokenInfo__qzzOn","form":"style_form__fIonZ","img":"style_img__zV_RZ","formStack":"style_formStack__M1ouA","minaTransactionStack":"style_minaTransactionStack__xwWpW","h2":"style_h2__VU3Ln","alignItemsCenter":"style_alignItemsCenter__5x1Gx"};

/***/ }),

/***/ 1163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6885)


/***/ }),

/***/ 8357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w_": function() { return /* reexport */ GenIcon; }
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconsManifest.js
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  }
]
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && react.createContext(DefaultContext);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return react.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return react.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? react.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/index.js




/***/ }),

/***/ 7215:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ ButtonGroupProvider; },
/* harmony export */   "i": function() { return /* binding */ useButtonGroup; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5227);
// src/button-context.ts

var [ButtonGroupProvider, useButtonGroup] = (0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__/* .createContext */ .k)({
  strict: false,
  name: "ButtonGroupContext"
});




/***/ }),

/***/ 6272:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": function() { return /* binding */ Button; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-FRFD4OXU.mjs
// src/use-button-type.tsx

function useButtonType(value) {
  const [isButton, setIsButton] = (0,react.useState)(!value);
  const refCallback = (0,react.useCallback)((node) => {
    if (!node)
      return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  const type = isButton ? "button" : void 0;
  return { ref: refCallback, type };
}



// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chunk-DGWZA2DU.mjs
var chunk_DGWZA2DU = __webpack_require__(7215);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs + 5 modules
var chunk_3LE6AY5Q = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/shared-utils/dist/index.mjs
var dist = __webpack_require__(5432);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-HCASMTTF.mjs
// src/button-icon.tsx




function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = (0,react.isValidElement)(children) ? (0,react.cloneElement)(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = (0,dist.cx)("chakra-button__icon", className);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.span */.m.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/spinner/dist/chunk-NO6MRLPK.mjs
var chunk_NO6MRLPK = __webpack_require__(295);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-HNNHG6RU.mjs
// src/button-spinner.tsx





function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing = "0.5rem",
    children = /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_NO6MRLPK/* Spinner */.$, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = (0,dist.cx)("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = (0,react.useMemo)(
    () => ({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing]
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_3LE6AY5Q/* chakra.div */.m.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs
var react_use_merge_refs_dist = __webpack_require__(1103);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs
var chunk_QEVFQ4EU = __webpack_require__(5059);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs + 2 modules
var chunk_T2VHL7RE = __webpack_require__(1628);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/styled-system/dist/index.mjs
var styled_system_dist = __webpack_require__(3179);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs





// src/button.tsx





var Button = (0,chunk_QEVFQ4EU/* forwardRef */.G)((props, ref) => {
  const group = (0,chunk_DGWZA2DU/* useButtonGroup */.i)();
  const styles = (0,chunk_T2VHL7RE/* useStyleConfig */.mq)("Button", { ...group, ...props });
  const {
    isDisabled = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as,
    ...rest
  } = (0,styled_system_dist/* omitThemingProps */.Lr)(props);
  const buttonStyles = (0,react.useMemo)(() => {
    const _focus = { ...styles == null ? void 0 : styles["_focus"], zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles,
      ...!!group && { _focus }
    };
  }, [styles, group]);
  const { ref: _ref, type: defaultType } = useButtonType(as);
  const contentProps = { rightIcon, leftIcon, iconSpacing, children };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    chunk_3LE6AY5Q/* chakra.button */.m.button,
    {
      ref: (0,react_use_merge_refs_dist/* useMergeRefs */.qq)(ref, _ref),
      as,
      type: type != null ? type : defaultType,
      "data-active": (0,dist/* dataAttr */.PB)(isActive),
      "data-loading": (0,dist/* dataAttr */.PB)(isLoading),
      __css: buttonStyles,
      className: (0,dist.cx)("chakra-button", className),
      ...rest,
      disabled: isDisabled || isLoading,
      children: [
        isLoading && spinnerPlacement === "start" && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing,
            children: spinner
          }
        ),
        isLoading ? loadingText || /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_3LE6AY5Q/* chakra.span */.m.span, { opacity: 0, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonContent, { ...contentProps }) }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--end",
            label: loadingText,
            placement: "end",
            spacing: iconSpacing,
            children: spinner
          }
        )
      ]
    }
  );
});
Button.displayName = "Button";
function ButtonContent(props) {
  const { leftIcon, rightIcon, children, iconSpacing } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    leftIcon && /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
    children,
    rightIcon && /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
  ] });
}




/***/ }),

/***/ 4418:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ Heading; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5059);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1628);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3179);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6384);
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5432);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
// src/heading.tsx



var Heading = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .G)(function Heading2(props, ref) {
  const styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__/* .useStyleConfig */ .mq)("Heading", props);
  const { className, ...rest } = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__/* .omitThemingProps */ .Lr)(props);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__/* .chakra.h2 */ .m.h2,
    {
      ref,
      className: (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading", props.className),
      ...rest,
      __css: styles
    }
  );
});
Heading.displayName = "Heading";




/***/ }),

/***/ 8420:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": function() { return /* binding */ Stack; }
});

// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs + 5 modules
var chunk_3LE6AY5Q = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-AMDSPU3E.mjs
// src/stack/stack-item.tsx


var StackItem = (props) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  chunk_3LE6AY5Q/* chakra.div */.m.div,
  {
    className: "chakra-stack__item",
    ...props,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"]
    }
  }
);
StackItem.displayName = "StackItem";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/shared-utils/dist/index.mjs
var dist = __webpack_require__(5432);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs
// src/responsive.ts

var breakpoints = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => item === null ? null : mapper(item));
  }
  if ((0,dist/* isObject */.Kn)(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}
function objectToArrayNotation(obj, bps = breakpoints) {
  const result = bps.map((br) => {
    var _a;
    return (_a = obj[br]) != null ? _a : null;
  });
  const lastItem = result[result.length - 1];
  while (lastItem === null)
    result.pop();
  return result;
}
function arrayToObjectNotation(values, bps = breakpoints) {
  const result = {};
  values.forEach((value, index) => {
    const key = bps[index];
    if (value == null)
      return;
    result[key] = value;
  });
  return result;
}
function isResponsiveObjectLike(obj, bps = breakpoints) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.every((key) => bps.includes(key));
}
var isCustomBreakpoint = (v) => Number.isNaN(Number(v));



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-V4DIVZKN.mjs
// src/stack/stack.utils.tsx

var selector = "& > *:not(style) ~ *:not(style)";
function getStackStyles(options) {
  const { spacing, direction } = options;
  const directionStyles = {
    column: {
      marginTop: spacing,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0
    },
    row: { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: spacing },
    "column-reverse": {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: spacing,
      marginStart: 0
    },
    "row-reverse": {
      marginTop: 0,
      marginEnd: spacing,
      marginBottom: 0,
      marginStart: 0
    }
  };
  return {
    flexDirection: direction,
    [selector]: mapResponsive(
      direction,
      (value) => directionStyles[value]
    )
  };
}
function getDividerStyles(options) {
  const { spacing, direction } = options;
  const dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": mapResponsive(
      direction,
      (value) => dividerStyles[value]
    )
  };
}



// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs
var chunk_QEVFQ4EU = __webpack_require__(5059);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react-children-utils/dist/index.mjs
var react_children_utils_dist = __webpack_require__(2495);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs



// src/stack/stack.tsx





var Stack = (0,chunk_QEVFQ4EU/* forwardRef */.G)((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction = isInline ? "row" : directionProp != null ? directionProp : "column";
  const styles = (0,react.useMemo)(
    () => getStackStyles({ direction, spacing }),
    [direction, spacing]
  );
  const dividerStyle = (0,react.useMemo)(
    () => getDividerStyles({ spacing, direction }),
    [spacing, direction]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = (0,react.useMemo)(() => {
    const validChildren = (0,react_children_utils_dist/* getValidChildren */.W)(children);
    return shouldUseChildren ? validChildren : validChildren.map((child, index) => {
      const key = typeof child.key !== "undefined" ? child.key : index;
      const isLast = index + 1 === validChildren.length;
      const wrappedChild = /* @__PURE__ */ (0,jsx_runtime.jsx)(StackItem, { children: child }, key);
      const _child = shouldWrapChildren ? wrappedChild : child;
      if (!hasDivider)
        return _child;
      const clonedDivider = (0,react.cloneElement)(
        divider,
        {
          __css: dividerStyle
        }
      );
      const _divider = isLast ? null : clonedDivider;
      return /* @__PURE__ */ (0,jsx_runtime.jsxs)(react.Fragment, { children: [
        _child,
        _divider
      ] }, key);
    });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children
  ]);
  const _className = (0,dist.cx)("chakra-stack", className);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.div */.m.div,
    {
      ref,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: styles.flexDirection,
      flexWrap: wrap,
      className: _className,
      __css: hasDivider ? {} : { [selector]: styles[selector] },
      ...rest,
      children: clones
    }
  );
});
Stack.displayName = "Stack";




/***/ }),

/***/ 8911:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ Text; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5059);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1628);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3179);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6384);
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5432);
/* harmony import */ var _chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(888);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
// src/text.tsx




var Text = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .G)(function Text2(props, ref) {
  const styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__/* .useStyleConfig */ .mq)("Text", props);
  const { className, align, decoration, casing, ...rest } = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__/* .omitThemingProps */ .Lr)(props);
  const aliasedProps = (0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__/* .compact */ .oA)({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__/* .chakra.p */ .m.p,
    {
      ref,
      className: (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text", props.className),
      ...aliasedProps,
      ...rest,
      __css: styles
    }
  );
});
Text.displayName = "Text";




/***/ }),

/***/ 2495:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ getValidChildren; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
// src/index.ts

function getValidChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(
    (child) => (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)
  );
}



/***/ }),

/***/ 1103:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lq": function() { return /* binding */ mergeRefs; },
/* harmony export */   "qq": function() { return /* binding */ useMergeRefs; }
/* harmony export */ });
/* unused harmony export assignRef */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
// src/index.ts

function assignRef(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      assignRef(ref, node);
    });
  };
}
function useMergeRefs(...refs) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => mergeRefs(...refs), refs);
}



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,228,433,593,774,888,179], function() { return __webpack_exec__(4895); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);