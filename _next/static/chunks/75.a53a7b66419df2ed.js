"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[75],{

/***/ 9075:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookReview": function() { return /* binding */ BookReview; }
/* harmony export */ });
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class BookReview extends snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .SmartContract */ .C3 {
    constructor() {
        super(...arguments);
        // On-chain state definitions
        this.x = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.verifiedCId1 = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.verifiedCId2 = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.verifiedCId3 = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.verifiedCId4 = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.verifiedCId5 = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.verifiedCId6 = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.verifiedCId7 = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
    }
    setSecret(secret1, secret2) {
        const x = this.x.get();
        this.x.assertEquals(x);
        this.x.assertEquals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.x.set(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash([secret1, secret2,]));
    }
    proveReading1(cId, secret1, secret2) {
        const x = this.x.get();
        this.x.assertEquals(x);
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash([secret1, secret2,]).assertEquals(x);
        const verifiedCId1 = this.verifiedCId1.get();
        this.verifiedCId1.assertEquals(verifiedCId1);
        this.verifiedCId1.assertEquals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.verifiedCId1.set(cId);
    }
    proveReading2(cId, secret1, secret2) {
        const x = this.x.get();
        this.x.assertEquals(x);
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash([secret1, secret2,]).assertEquals(x);
        const verifiedCId2 = this.verifiedCId2.get();
        this.verifiedCId2.assertEquals(verifiedCId2);
        this.verifiedCId2.assertEquals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.verifiedCId2.set(cId);
    }
    proveReading3(cId, secret1, secret2) {
        const x = this.x.get();
        this.x.assertEquals(x);
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash([secret1, secret2,]).assertEquals(x);
        const verifiedCId3 = this.verifiedCId3.get();
        this.verifiedCId3.assertEquals(verifiedCId3);
        this.verifiedCId3.assertEquals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.verifiedCId3.set(cId);
    }
    proveReading4(cId, secret1, secret2) {
        const x = this.x.get();
        this.x.assertEquals(x);
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash([secret1, secret2,]).assertEquals(x);
        const verifiedCId4 = this.verifiedCId4.get();
        this.verifiedCId4.assertEquals(verifiedCId4);
        this.verifiedCId4.assertEquals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.verifiedCId4.set(cId);
    }
    proveReading5(cId, secret1, secret2) {
        const x = this.x.get();
        this.x.assertEquals(x);
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash([secret1, secret2,]).assertEquals(x);
        const verifiedCId5 = this.verifiedCId5.get();
        this.verifiedCId5.assertEquals(verifiedCId5);
        this.verifiedCId5.assertEquals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.verifiedCId5.set(cId);
    }
    proveReading6(cId, secret1, secret2) {
        const x = this.x.get();
        this.x.assertEquals(x);
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash([secret1, secret2,]).assertEquals(x);
        const verifiedCId6 = this.verifiedCId6.get();
        this.verifiedCId6.assertEquals(verifiedCId6);
        this.verifiedCId6.assertEquals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.verifiedCId6.set(cId);
    }
    proveReading7(cId, secret1, secret2) {
        const x = this.x.get();
        this.x.assertEquals(x);
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash([secret1, secret2,]).assertEquals(x);
        const verifiedCId7 = this.verifiedCId7.get();
        this.verifiedCId7.assertEquals(verifiedCId7);
        this.verifiedCId7.assertEquals((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.verifiedCId7.set(cId);
    }
}
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], BookReview.prototype, "x", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], BookReview.prototype, "verifiedCId1", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], BookReview.prototype, "verifiedCId2", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], BookReview.prototype, "verifiedCId3", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], BookReview.prototype, "verifiedCId4", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], BookReview.prototype, "verifiedCId5", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], BookReview.prototype, "verifiedCId6", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], BookReview.prototype, "verifiedCId7", void 0);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], BookReview.prototype, "setSecret", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], BookReview.prototype, "proveReading1", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], BookReview.prototype, "proveReading2", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], BookReview.prototype, "proveReading3", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], BookReview.prototype, "proveReading4", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], BookReview.prototype, "proveReading5", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], BookReview.prototype, "proveReading6", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN,
        snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], BookReview.prototype, "proveReading7", null);
//# sourceMappingURL=BookReview.js.map

/***/ })

}]);