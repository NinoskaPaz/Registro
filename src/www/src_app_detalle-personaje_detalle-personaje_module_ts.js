"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_detalle-personaje_detalle-personaje_module_ts"],{

/***/ 62226:
/*!***********************************************************************!*\
  !*** ./src/app/detalle-personaje/detalle-personaje-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallePersonajePageRoutingModule": () => (/* binding */ DetallePersonajePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _detalle_personaje_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-personaje.page */ 95950);




const routes = [
    {
        path: '',
        component: _detalle_personaje_page__WEBPACK_IMPORTED_MODULE_0__.DetallePersonajePage
    }
];
let DetallePersonajePageRoutingModule = class DetallePersonajePageRoutingModule {
};
DetallePersonajePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetallePersonajePageRoutingModule);



/***/ }),

/***/ 75120:
/*!***************************************************************!*\
  !*** ./src/app/detalle-personaje/detalle-personaje.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallePersonajePageModule": () => (/* binding */ DetallePersonajePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _detalle_personaje_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-personaje-routing.module */ 62226);
/* harmony import */ var _detalle_personaje_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-personaje.page */ 95950);







let DetallePersonajePageModule = class DetallePersonajePageModule {
};
DetallePersonajePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_personaje_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetallePersonajePageRoutingModule
        ],
        declarations: [_detalle_personaje_page__WEBPACK_IMPORTED_MODULE_1__.DetallePersonajePage]
    })
], DetallePersonajePageModule);



/***/ }),

/***/ 95950:
/*!*************************************************************!*\
  !*** ./src/app/detalle-personaje/detalle-personaje.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallePersonajePage": () => (/* binding */ DetallePersonajePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _detalle_personaje_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-personaje.page.html?ngResource */ 36047);
/* harmony import */ var _detalle_personaje_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-personaje.page.scss?ngResource */ 90756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let DetallePersonajePage = class DetallePersonajePage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.pageTitle = '';
        this.personaje = null;
        this.obtenerPersonaje();
    }
    ngOnInit() {
        console.log(this.personaje);
        this.pageTitle = this.personaje.name;
    }
    obtenerPersonaje() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.personaje = JSON.parse(params.personaje);
        });
    }
};
DetallePersonajePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
DetallePersonajePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-detalle-personaje',
        template: _detalle_personaje_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detalle_personaje_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetallePersonajePage);



/***/ }),

/***/ 90756:
/*!**************************************************************************!*\
  !*** ./src/app/detalle-personaje/detalle-personaje.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlLXBlcnNvbmFqZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 36047:
/*!**************************************************************************!*\
  !*** ./src/app/detalle-personaje/detalle-personaje.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  <ion-toolbar color=\"\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title>{{pageTitle | titlecase }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img [src]=\"personaje.image\" alt=\"{{personaje.name}}\">\n    <ion-card-header>\n      <ion-card-subtitle>{{personaje.homeworld | titlecase}}</ion-card-subtitle>\n      <ion-card-title>{{personaje.name}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-text>\n        <p>{{personaje.Informacion}} <i><a href=\"{{personaje.Informacion}}\" target=\"_blank\"></a></i></p>\n      </ion-text>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_detalle-personaje_detalle-personaje_module_ts.js.map