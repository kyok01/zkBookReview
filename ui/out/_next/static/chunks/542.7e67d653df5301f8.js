/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ref, ref1;
module.exports = ((ref = __webpack_require__.g.process) == null ? void 0 : ref.env) && typeof ((ref1 = __webpack_require__.g.process) == null ? void 0 : ref1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(7663);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 6460:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);

const state = {
    BookReview: null,
    zkapp: null,
    transaction: null
};
// ---------------------------------------------------------------------------------------
const functions = {
    loadSnarkyJS: async (args)=>{
        await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .isReady */ .DK;
    },
    setActiveInstanceToBerkeley: async (args)=>{
        const Berkeley = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.Network */ .No.Network("https://proxy.berkeley.minaexplorer.com/graphql");
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.setActiveInstance */ .No.setActiveInstance(Berkeley);
    },
    loadContract: async (args)=>{
        const { BookReview  } = await __webpack_require__.e(/* import() */ 75).then(__webpack_require__.bind(__webpack_require__, 9075));
        state.BookReview = BookReview;
    },
    compileContract: async (args)=>{
        await state.BookReview.compile();
    },
    fetchAccount: async (args)=>{
        const publicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey.fromBase58 */ .nh.fromBase58(args.publicKey58);
        return await (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .fetchAccount */ .$G)({
            publicKey
        });
    },
    initZkappInstance: async (args)=>{
        const publicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey.fromBase58 */ .nh.fromBase58(args.publicKey58);
        state.zkapp = new state.BookReview(publicKey);
    },
    getX: async (args)=>{
        const x = state.zkapp.x.get();
        return JSON.stringify(x.toJSON());
    },
    getVerifiedCId1: async (args)=>{
        const verifiedCId1 = state.zkapp.verifiedCId1.get();
        return JSON.stringify(verifiedCId1.toJSON());
    },
    getVerifiedCId2: async (args)=>{
        const verifiedCId2 = state.zkapp.verifiedCId2.get();
        return JSON.stringify(verifiedCId2.toJSON());
    },
    getVerifiedCId3: async (args)=>{
        const verifiedCId3 = state.zkapp.verifiedCId3.get();
        return JSON.stringify(verifiedCId3.toJSON());
    },
    getVerifiedCId4: async (args)=>{
        const verifiedCId4 = state.zkapp.verifiedCId4.get();
        return JSON.stringify(verifiedCId4.toJSON());
    },
    getVerifiedCId5: async (args)=>{
        const verifiedCId5 = state.zkapp.verifiedCId5.get();
        return JSON.stringify(verifiedCId5.toJSON());
    },
    getVerifiedCId6: async (args)=>{
        const verifiedCId6 = state.zkapp.verifiedCId6.get();
        return JSON.stringify(verifiedCId6.toJSON());
    },
    getVerifiedCId7: async (args)=>{
        const verifiedCId7 = state.zkapp.verifiedCId7.get();
        return JSON.stringify(verifiedCId7.toJSON());
    },
    createSetSecretTransaction: async (args)=>{
        const transaction = await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.transaction */ .No.transaction(()=>{
            state.zkapp.setSecret(args.secret1, args.secret2, args.secret3, args.secret4, args.secret5);
        });
        state.transaction = transaction;
    },
    createProveReadingTransaction: async (args)=>{
        const verifiedCId1 = state.zkapp.verifiedCId1.get();
        const verifiedCId2 = state.zkapp.verifiedCId2.get();
        const verifiedCId3 = state.zkapp.verifiedCId3.get();
        const verifiedCId4 = state.zkapp.verifiedCId4.get();
        const verifiedCId5 = state.zkapp.verifiedCId5.get();
        const verifiedCId6 = state.zkapp.verifiedCId6.get();
        const verifiedCId7 = state.zkapp.verifiedCId7.get();
        if (verifiedCId1.equals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0))) {
            const transaction = await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.transaction */ .No.transaction(()=>{
                state.zkapp.proveReading1(args.cId, args.secret1, args.secret2, args.secret3, args.secret4, args.secret5);
            });
            state.transaction = transaction;
        } else if (verifiedCId2.equals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0))) {
            const transaction = await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.transaction */ .No.transaction(()=>{
                state.zkapp.proveReading2(args.cId, args.secret1, args.secret2, args.secret3, args.secret4, args.secret5);
            });
            state.transaction = transaction;
        } else if (verifiedCId3.equals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0))) {
            const transaction = await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.transaction */ .No.transaction(()=>{
                state.zkapp.proveReading3(args.cId, args.secret1, args.secret2, args.secret3, args.secret4, args.secret5);
            });
            state.transaction = transaction;
        } else if (verifiedCId4.equals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0))) {
            const transaction = await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.transaction */ .No.transaction(()=>{
                state.zkapp.proveReading4(args.cId, args.secret1, args.secret2, args.secret3, args.secret4, args.secret5);
            });
            state.transaction = transaction;
        } else if (verifiedCId5.equals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0))) {
            const transaction = await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.transaction */ .No.transaction(()=>{
                state.zkapp.proveReading5(args.cId, args.secret1, args.secret2, args.secret3, args.secret4, args.secret5);
            });
            state.transaction = transaction;
        } else if (verifiedCId6.equals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0))) {
            const transaction = await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.transaction */ .No.transaction(()=>{
                state.zkapp.proveReading6(args.cId, args.secret1, args.secret2, args.secret3, args.secret4, args.secret5);
            });
            state.transaction = transaction;
        } else if (verifiedCId7.equals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0))) {
            const transaction = await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Mina.transaction */ .No.transaction(()=>{
                state.zkapp.proveReading7(args.cId, args.secret1, args.secret2, args.secret3, args.secret4, args.secret5);
            });
            state.transaction = transaction;
        }
    },
    proveUpdateTransaction: async (args)=>{
        await state.transaction.prove();
    },
    getTransactionJSON: async (args)=>{
        return state.transaction.toJSON();
    }
};
if (true) {
    addEventListener("message", async (event)=>{
        const returnData = await functions[event.data.fn](event.data.args);
        const message = {
            id: event.data.id,
            data: returnData
        };
        postMessage(message);
    });
}


/***/ }),

/***/ 7663:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [829], function() { return __webpack_require__(6460); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 829) return "static/chunks/cc8f0cfa-b03d37774bdf7fc0.js";
/******/ 			// return url for filenames based on template
/******/ 			return "static/chunks/" + chunkId + "." + "f4bffcd2c973ebf1" + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: function(url) { return url; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	!function() {
/******/ 		__webpack_require__.tu = function(url) { return __webpack_require__.tt().createScriptURL(url); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/zkBookReview//_next/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			542: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.u(chunkId)));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			return __webpack_require__.e(829).then(next);
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;