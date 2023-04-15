(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 9208:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(8052);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 8052:
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@ethersproject/providers/lib.esm/web3-provider.js + 21 modules
var web3_provider = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(6441);
// EXTERNAL MODULE: ./node_modules/@ethersproject/contracts/lib.esm/index.js + 16 modules
var contracts_lib_esm = __webpack_require__(6076);
// EXTERNAL MODULE: ./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js + 1 modules
var bignumber = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-3ZTTLJBV.mjs + 1 modules
var chunk_3ZTTLJBV = __webpack_require__(6452);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/card/dist/chunk-4DHADF5X.mjs
// src/card-context.tsx

var [CardStylesProvider, useCardStyles] = (0,chunk_3ZTTLJBV/* createStylesContext */.eC)("Card");



// EXTERNAL MODULE: ./node_modules/@chakra-ui/shared-utils/dist/index.mjs
var dist = __webpack_require__(5432);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs
var chunk_QEVFQ4EU = __webpack_require__(5059);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/styled-system/dist/index.mjs
var styled_system_dist = __webpack_require__(3179);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs + 2 modules
var chunk_T2VHL7RE = __webpack_require__(1628);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs + 5 modules
var chunk_3LE6AY5Q = __webpack_require__(6384);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/card/dist/chunk-S432VF2S.mjs


// src/card.tsx



var Card = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function Card2(props, ref) {
  const {
    className,
    children,
    direction = "column",
    justify,
    align,
    ...rest
  } = (0,styled_system_dist/* omitThemingProps */.Lr)(props);
  const styles = (0,chunk_T2VHL7RE/* useMultiStyleConfig */.jC)("Card", props);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.div */.m.div,
    {
      ref,
      className: (0,dist.cx)("chakra-card", className),
      __css: {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...styles.container
      },
      ...rest,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(CardStylesProvider, { value: styles, children })
    }
  );
});



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/card/dist/chunk-KKEJMMX3.mjs


// src/card-body.tsx



var CardBody = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function CardBody2(props, ref) {
  const { className, ...rest } = props;
  const styles = useCardStyles();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.div */.m.div,
    {
      ref,
      className: (0,dist.cx)("chakra-card__body", className),
      __css: styles.body,
      ...rest
    }
  );
});



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/image/dist/chunk-QBIO4VEB.mjs
// src/native-image.tsx


var NativeImage = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function NativeImage2(props, ref) {
  const { htmlWidth, htmlHeight, alt, ...rest } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("img", { width: htmlWidth, height: htmlHeight, ref, alt, ...rest });
});
NativeImage.displayName = "NativeImage";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs
var react_use_safe_layout_effect_dist = __webpack_require__(6245);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/image/dist/chunk-HR33I6FK.mjs
// src/use-image.ts


function useImage(props) {
  const {
    loading,
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes,
    ignoreFallback
  } = props;
  const [status, setStatus] = (0,react.useState)("pending");
  (0,react.useEffect)(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  const imageRef = (0,react.useRef)();
  const load = (0,react.useCallback)(() => {
    if (!src)
      return;
    flush();
    const img = new Image();
    img.src = src;
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    if (srcSet)
      img.srcset = srcSet;
    if (sizes)
      img.sizes = sizes;
    if (loading)
      img.loading = loading;
    img.onload = (event) => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    img.onerror = (error) => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading]);
  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  (0,react_use_safe_layout_effect_dist/* useSafeLayoutEffect */.G)(() => {
    if (ignoreFallback)
      return void 0;
    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);
  return ignoreFallback ? "loaded" : status;
}
var shouldShowFallbackImage = (status, fallbackStrategy) => status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/image/dist/chunk-E77276RR.mjs



// src/image.tsx


// ../../utilities/object-utils/src/index.ts
function omit(object, keysToOmit = []) {
  const clone = Object.assign({}, object);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}

// src/image.tsx

var chunk_E77276RR_Image = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function Image2(props, ref) {
  const {
    fallbackSrc,
    fallback,
    src,
    srcSet,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = "beforeLoadOrError",
    referrerPolicy,
    ...rest
  } = props;
  const providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
  const shouldIgnoreFallbackImage = loading != null || ignoreFallback || !providedFallback;
  const status = useImage({
    ...props,
    ignoreFallback: shouldIgnoreFallbackImage
  });
  const showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"])
  };
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      chunk_3LE6AY5Q/* chakra.img */.m.img,
      {
        as: NativeImage,
        className: "chakra-image__placeholder",
        src: fallbackSrc,
        ...shared
      }
    );
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.img */.m.img,
    {
      as: NativeImage,
      src,
      srcSet,
      crossOrigin,
      loading,
      referrerPolicy,
      className: "chakra-image",
      ...shared
    }
  );
});
chunk_E77276RR_Image.displayName = "Image";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs + 3 modules
var chunk_O5CRURSQ = __webpack_require__(8420);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs
var chunk_B2MGPQRJ = __webpack_require__(4418);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs
var chunk_P74GIWPW = __webpack_require__(8911);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs
// src/divider.tsx



var Divider = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function Divider2(props, ref) {
  const {
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderRightWidth,
    borderWidth,
    borderStyle,
    borderColor,
    ...styles
  } = (0,chunk_T2VHL7RE/* useStyleConfig */.mq)("Divider", props);
  const {
    className,
    orientation = "horizontal",
    __css,
    ...rest
  } = (0,styled_system_dist/* omitThemingProps */.Lr)(props);
  const dividerStyles = {
    vertical: {
      borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.hr */.m.hr,
    {
      ref,
      "aria-orientation": orientation,
      ...rest,
      __css: {
        ...styles,
        border: "0",
        borderColor,
        borderStyle,
        ...dividerStyles[orientation],
        ...__css
      },
      className: (0,dist.cx)("chakra-divider", className)
    }
  );
});
Divider.displayName = "Divider";



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/card/dist/chunk-V3HPETQ4.mjs


// src/card-footer.tsx



var CardFooter = (0,chunk_QEVFQ4EU/* forwardRef */.G)(
  function CardFooter2(props, ref) {
    const { className, justify, ...rest } = props;
    const styles = useCardStyles();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      chunk_3LE6AY5Q/* chakra.div */.m.div,
      {
        ref,
        className: (0,dist.cx)("chakra-card__footer", className),
        __css: {
          display: "flex",
          justifyContent: justify,
          ...styles.footer
        },
        ...rest
      }
    );
  }
);



// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chunk-DGWZA2DU.mjs
var chunk_DGWZA2DU = __webpack_require__(7215);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-PEYICJIL.mjs


// src/button-group.tsx




var attachedStyles = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
};
var gapStyles = {
  horizontal: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: spacing }
  }),
  vertical: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing }
  })
};
var ButtonGroup = (0,chunk_QEVFQ4EU/* forwardRef */.G)(
  function ButtonGroup2(props, ref) {
    const {
      size,
      colorScheme,
      variant,
      className,
      spacing = "0.5rem",
      isAttached,
      isDisabled,
      orientation = "horizontal",
      ...rest
    } = props;
    const _className = (0,dist.cx)("chakra-button__group", className);
    const context = (0,react.useMemo)(
      () => ({ size, colorScheme, variant, isDisabled }),
      [size, colorScheme, variant, isDisabled]
    );
    let groupStyles = {
      display: "inline-flex",
      ...isAttached ? attachedStyles[orientation] : gapStyles[orientation](spacing)
    };
    const isVertical = orientation === "vertical";
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_DGWZA2DU/* ButtonGroupProvider */.D, { value: context, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      chunk_3LE6AY5Q/* chakra.div */.m.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        className: _className,
        "data-attached": isAttached ? "" : void 0,
        "data-orientation": orientation,
        flexDir: isVertical ? "column" : void 0,
        ...rest
      }
    ) });
  }
);
ButtonGroup.displayName = "ButtonGroup";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs + 3 modules
var chunk_NAA7TEES = __webpack_require__(6272);
// EXTERNAL MODULE: ./src/components/nft-list/styles/style.module.css
var style_module = __webpack_require__(5644);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./src/abi/MintNFT.json
var MintNFT = __webpack_require__(5841);
;// CONCATENATED MODULE: ./src/components/nft-list/nft-list.tsx







const NFTList = ()=>{
    const contractAddress = "0x1dbb068EF9c4C73F086DBec28aAa6F79CCb5F499";
    const [nfts, setNFTs] = (0,react.useState)([]);
    const [comments, setComments] = (0,react.useState)([]);
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
            const contract = new contracts_lib_esm/* Contract */.CH(contractAddress, MintNFT/* abi */.Mt, signer);
            const books = await contract.getAllBooks();
            setNFTs(books);
            await getComments();
        } catch (e) {
            console.log("エラー", e);
        }
    };
    (0,react.useEffect)(()=>{
        loadNfts();
    }, [
        loadNfts
    ]);
    // -----------------------------------
    // buy -----------------------------------
    const buyNFT = async (tokenId)=>{
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
            const res = await contract.purchase(bignumber/* BigNumber.from */.O$.from(tokenId));
            await loadNfts();
            console.log(nfts);
            console.log("res: ", res);
        } catch (e) {
            console.log("エラー", e);
        }
    };
    // -----------------------------------
    // comment -----------------------------------
    const getComments = async ()=>{
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
            const commentArray = await Promise.all(nfts === null || nfts === void 0 ? void 0 : nfts.map(async (nft)=>{
                const commentIds = await contract.getCommentsByBook(nft.id);
                const comments = await contract.getCommentsByIds(commentIds);
                return comments.map((comment)=>{
                    return comment.content;
                });
            }));
            setComments(commentArray);
        } catch (e) {
            console.log("エラー", e);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (style_module_default()).list,
        children: nfts === null || nfts === void 0 ? void 0 : nfts.map((nft, i)=>{
            const id = nft.id.toString();
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(MyCards, {
                nft: nft,
                buy: ()=>buyNFT(id)
            }, i);
        })
    });
};
function MyCards(param) {
    let { nft , buy  } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card, {
        maxW: "sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardBody, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_E77276RR_Image, {
                        src: "".concat(nft.id, ".png")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_O5CRURSQ/* Stack */.K, {
                        mt: "6",
                        spacing: "3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B2MGPQRJ/* Heading */.X, {
                                size: "md",
                                children: nft.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_P74GIWPW/* Text */.x, {
                                children: nft.description
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardFooter, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonGroup, {
                    spacing: "2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_NAA7TEES/* Button */.z, {
                            variant: "solid",
                            colorScheme: "green",
                            onClick: buy,
                            children: "Buy now"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "/post-review/".concat(nft.id),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_NAA7TEES/* Button */.z, {
                                children: "post review"
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/nft-list/index.ts


;// CONCATENATED MODULE: ./src/pages/index.page.tsx


function NftList() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTList, {})
    });
}


/***/ }),

/***/ 5644:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"list":"style_list__vbE2U","element":"style_element__UvUcM","text":"style_text__ItN0p","img":"style_img__DxtiF"};

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
/******/ __webpack_require__.O(0, [433,593,774,888,179], function() { return __webpack_exec__(9208); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);