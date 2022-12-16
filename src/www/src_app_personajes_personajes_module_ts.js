"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_personajes_personajes_module_ts"],{

/***/ 88770:
/*!*********************************************************!*\
  !*** ./src/app/personajes/personajes-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonajesPageRoutingModule": () => (/* binding */ PersonajesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _personajes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personajes.page */ 90681);




const routes = [
    {
        path: '',
        component: _personajes_page__WEBPACK_IMPORTED_MODULE_0__.PersonajesPage
    }
];
let PersonajesPageRoutingModule = class PersonajesPageRoutingModule {
};
PersonajesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PersonajesPageRoutingModule);



/***/ }),

/***/ 53112:
/*!*************************************************!*\
  !*** ./src/app/personajes/personajes.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonajesPageModule": () => (/* binding */ PersonajesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _personajes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personajes-routing.module */ 88770);
/* harmony import */ var _personajes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personajes.page */ 90681);







let PersonajesPageModule = class PersonajesPageModule {
};
PersonajesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _personajes_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonajesPageRoutingModule,
            //PipesModule
        ],
        declarations: [_personajes_page__WEBPACK_IMPORTED_MODULE_1__.PersonajesPage]
    })
], PersonajesPageModule);



/***/ }),

/***/ 90681:
/*!***********************************************!*\
  !*** ./src/app/personajes/personajes.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonajesPage": () => (/* binding */ PersonajesPage)
/* harmony export */ });
/* harmony import */ var C_Users_BanG_Desktop_Registro_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _personajes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personajes.page.html?ngResource */ 16666);
/* harmony import */ var _personajes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personajes.page.scss?ngResource */ 80197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_persona_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/persona.service */ 90253);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.page */ 49660);








let PersonajesPage = class PersonajesPage {
  constructor(personaService, alertCtrl, modalCtrl, toastCtrl) {
    this.personaService = personaService;
    this.alertCtrl = alertCtrl;
    this.modalCtrl = modalCtrl;
    this.toastCtrl = toastCtrl;
    this.pageTitle = 'Alumnos';
    this.busqueda = '';
    this.listadoPersona = [];
    this.getPersonas();
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe(respuesta => {
      console.log(respuesta);
      this.listadoPersona = respuesta;
    });
  }

  openDetailPersona(persona) {
    var _this = this;

    return (0,C_Users_BanG_Desktop_Registro_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
        componentProps: {
          id: persona.id
        },
        breakpoints: [0, 0.5, 0.8],
        initialBreakpoint: 0.5
      });
      modal.present();
    })();
  }

  addPersona() {
    var _this2 = this;

    return (0,C_Users_BanG_Desktop_Registro_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: 'Agregar Alumno',
        inputs: [{
          name: 'nombre',
          type: 'text',
          placeholder: 'nombre'
        }, {
          name: 'apellido',
          type: 'text',
          placeholder: 'apellido'
        }, {
          name: 'género',
          type: 'text',
          placeholder: 'Género'
        }, {
          name: 'edad',
          type: 'number',
          placeholder: 'edad'
        }, {
          name: 'email',
          type: 'email',
          placeholder: 'correo@correo.com'
        }, {
          name: 'imagen',
          type: 'url',
          placeholder: 'link web image'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancelar'
        }, {
          text: 'Guardar',
          role: 'confirm',
          handler: data => {
            _this2.personaService.addPersona(data);

            _this2.toastPresent('Persona Registrada');
          }
        }]
      });
      yield alert.present();
    })();
  }

  toastPresent(message) {
    var _this3 = this;

    return (0,C_Users_BanG_Desktop_Registro_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastCtrl.create({
        message: message,
        duration: 1000
      });
      toast.present();
    })();
  }

};

PersonajesPage.ctorParameters = () => [{
  type: _services_persona_service__WEBPACK_IMPORTED_MODULE_3__.PersonaService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];

PersonajesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-personajes',
  template: _personajes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_personajes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PersonajesPage);


/***/ }),

/***/ 80197:
/*!************************************************************!*\
  !*** ./src/app/personajes/personajes.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".img-logo {\n  width: 4em;\n  position: absolute;\n  top: 0.3em;\n  right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFqZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJwZXJzb25hamVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctbG9nb3tcbiAgICB3aWR0aDogNGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuMzBlbTtcbiAgICByaWdodDogMWVtO1xufVxuIl19 */";

/***/ }),

/***/ 16666:
/*!************************************************************!*\
  !*** ./src/app/personajes/personajes.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{pageTitle | titlecase }}</ion-title>\n    <img class=\"img-logo\" src=\"../../../assets/img/icon.png\" alt=\"\">\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item *ngFor=\"let persona of listadoPersona\" (click)=\"openDetailPersona(persona)\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"persona.image\" alt=\"\">\n      </ion-avatar>\n      <ion-label>\n        <h3>{{persona.name}} {{persona.lastname}}</h3>\n        <h5>{{persona.email}}</h5>\n        <h5>{{persona.age}} años</h5>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\n    <ion-fab-button (click)=\"addPersona()\" color=\"secondary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_personajes_personajes_module_ts.js.map