"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_e404_e404_module_ts"],{

/***/ 93841:
/*!***************************************************!*\
  !*** ./src/app/pages/e404/e404-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E404PageRoutingModule": () => (/* binding */ E404PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _e404_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e404.page */ 55078);




const routes = [
    {
        path: '',
        component: _e404_page__WEBPACK_IMPORTED_MODULE_0__.E404Page
    }
];
let E404PageRoutingModule = class E404PageRoutingModule {
};
E404PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], E404PageRoutingModule);



/***/ }),

/***/ 32547:
/*!*******************************************!*\
  !*** ./src/app/pages/e404/e404.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E404PageModule": () => (/* binding */ E404PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _e404_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e404-routing.module */ 93841);
/* harmony import */ var _e404_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e404.page */ 55078);







let E404PageModule = class E404PageModule {
};
E404PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _e404_routing_module__WEBPACK_IMPORTED_MODULE_0__.E404PageRoutingModule
        ],
        declarations: [_e404_page__WEBPACK_IMPORTED_MODULE_1__.E404Page]
    })
], E404PageModule);



/***/ }),

/***/ 55078:
/*!*****************************************!*\
  !*** ./src/app/pages/e404/e404.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E404Page": () => (/* binding */ E404Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _e404_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e404.page.html?ngResource */ 39191);
/* harmony import */ var _e404_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e404.page.scss?ngResource */ 61793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let E404Page = class E404Page {
    constructor() { }
    ngOnInit() {
    }
};
E404Page.ctorParameters = () => [];
E404Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-e404',
        template: _e404_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_e404_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], E404Page);



/***/ }),

/***/ 61793:
/*!******************************************************!*\
  !*** ./src/app/pages/e404/e404.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlNDA0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 39191:
/*!******************************************************!*\
  !*** ./src/app/pages/e404/e404.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"danger\">Página \n      <br> no encontrada...</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-img src=\"assets/img/error.webp\"></ion-img>\n\n  <ion-button  fill=\"outline\" routerLink=\"['./app/Inicio']\" expand=\"block\" class=\"ion-margin-top\" color=\"secondary\">\n    <ion-icon name=\"home\" slot=\"start\" color=\"\"></ion-icon>\n    Volver\n  </ion-button>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_e404_e404_module_ts.js.map