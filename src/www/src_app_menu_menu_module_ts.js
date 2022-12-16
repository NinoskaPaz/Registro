"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 61198:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 25915);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage,
        children: [
            {
                path: 'folder',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../folder/folder.module */ 3412)).then(m => m.FolderPageModule),
            },
            {
                path: 'personajes',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_personajes_personajes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../personajes/personajes.module */ 53112)).then(m => m.PersonajesPageModule),
            },
            {
                path: 'inicio',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inicio_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../inicio/inicio.module */ 53185)).then(m => m.InicioPageModule)
            },
            {
                path: 'QR',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_qr_qr_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../qr/qr.module */ 57915)).then(m => m.QrPageModule)
            },
            {
                path: 'e404',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_e404_e404_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/e404/e404.module */ 32547)).then(m => m.E404PageModule)
            },
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 32825:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 61198);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 25915);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 25915:
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var C_Users_BanG_Desktop_Registro_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.html?ngResource */ 31757);
/* harmony import */ var _menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss?ngResource */ 140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let MenuPage = class MenuPage {
  constructor(alertController, navCtrl) {
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.indiceSeleccionado = 0;
    this.paginas = [{
      titulo: 'Home',
      url: '/menu/inicio',
      icono: 'home'
    }, {
      titulo: 'Alumnos',
      url: '/menu/personajes',
      icono: 'person'
    }, {
      titulo: 'QR',
      url: '/menu/QR',
      icono: 'scan'
    }, {
      titulo: 'error',
      url: '/menu/e404',
      icono: 'close'
    }];
  }

  ngOnInit() {}

  cambiarIndiceSeleccionado(i) {
    this.indiceSeleccionado = i;
  }

  salir() {
    var _this = this;

    return (0,C_Users_BanG_Desktop_Registro_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Salir',
        message: '¿Estas seguro que quieres salir?',
        buttons: [{
          text: 'No',
          handler: () => {}
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');

            _this.navCtrl.navigateRoot('login');
          }
        }]
      });
      yield alert.present();
    })();
  }

};

MenuPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
}];

MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-menu',
  template: _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MenuPage);


/***/ }),

/***/ 140:
/*!************************************************!*\
  !*** ./src/app/menu/menu.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-avatar {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n}\n\nion-avatar .custom-icon {\n  font-size: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkVBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFOztFQUVFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyREFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxzREFBQTtBQUhKOztBQU1FO0VBQ0UsK0JBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTtFQUNFLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UsbUJBQUE7QUFISjs7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0UsK0JBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtBQUhKOztBQU1FOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpKOztBQU9FO0VBQ0UsaUNBQUE7QUFKSjs7QUFPRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBTUk7RUFDRSxlQUFBO0FBSk4iLCJmaWxlIjoibWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgXG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIFxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIFxuICAgIGNvbG9yOiAjNzU3NTc1O1xuICBcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNjE2ZTdlO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjNzM4NDlhO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICBpb24tbm90ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICB9XG4gIFxuICBpb24taXRlbS5zZWxlY3RlZCB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgaW9uLWF2YXRhcntcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICAvL2JvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLmN1c3RvbS1pY29ue1xuICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 31757:
/*!************************************************!*\
  !*** ./src/app/menu/menu.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-split-pane contentId=\"main\">\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n      <br>\n      <ion-toolbar color=\"\">\n        <br>\n        <ion-title color=\"secondary\" >Registro</ion-title>\n        <br>\n        <ion-note>Nombre del Usuario</ion-note>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let pagina of paginas; let i = index\">\n          <ion-item (click)=\"cambiarIndiceSeleccionado(i)\" routerDirection=\"root\" [routerLink]=\"[pagina.url]\"\n            lines=\"none\" detail=\"false\" [class.selected]=\"indiceSeleccionado == i\">\n            <ion-icon slot=\"start\" [name]=\"pagina.icono + '-outline'\" color=\"secondary\"></ion-icon>\n            <ion-label color=\"secondary\">{{pagina.titulo}}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide=\"false\">\n          <ion-item (click)=\"salir()\" routerDirection=\"root\" lines=\"none\" detail=\"false\" >\n            <ion-icon slot=\"start\" [name]=\"'exit-outline'\" color=\"secondary\"></ion-icon>\n            <ion-label color=\"secondary\">Cerrar Sesion </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main\" main></ion-router-outlet>\n</ion-split-pane>";

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map