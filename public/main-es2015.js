(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VzF":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "lGQG");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => !!user), // map to boolean
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(loggedIn => {
            if (!loggedIn) {
                console.log('access denied');
                this.router.navigate(['login']);
            }
            else {
                console.log('loggedIn');
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "/Ijn":
/*!***************************************************************!*\
  !*** ./src/app/components/access/banner/banner.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner-background {\r\n    background-image: url(\"/assets/banner-acesso/fundo.png\");\r\n    height: 602px;\r\n    width: 379px;\r\n    padding-top: 91px;\r\n    padding-left: 116px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2Nlc3MvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0RBQXdEO0lBQ3hELGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjZXNzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXItYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Jhbm5lci1hY2Vzc28vZnVuZG8ucG5nXCIpO1xyXG4gICAgaGVpZ2h0OiA2MDJweDtcclxuICAgIHdpZHRoOiAzNzlweDtcclxuICAgIHBhZGRpbmctdG9wOiA5MXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMTZweDtcclxufSJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Documents\Projects\Angular\Git\angular-firebase-instagram\src\main.ts */"zUnb");


/***/ }),

/***/ "0z2C":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    height: 77px;\r\n    padding: 26px 40px;\r\n    width: 100%;\r\n    border-bottom: solid 1px #E6E6E6;\r\n}\r\n\r\n.logo {\r\n    background-image: url('/assets/logo-instagram-2.png');\r\n    width: 110px;\r\n    height: 36px;\r\n    float: left;\r\n}\r\n\r\n.add-post {\r\n    background-image: url('/assets/camera.png');\r\n    width: 32px;\r\n    height: 32px;\r\n    float: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGhlaWdodDogNzdweDtcclxuICAgIHBhZGRpbmc6IDI2cHggNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNFNkU2RTY7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9sb2dvLWluc3RhZ3JhbS0yLnBuZycpO1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hZGQtcG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvY2FtZXJhLnBuZycpO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "9Qp5":
/*!************************************************************!*\
  !*** ./src/app/components/access/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "o6Br");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "zbRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");






let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.flRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.formgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    }
    ngOnInit() {
    }
    cadastrar() {
        this.flRegister.emit(true);
    }
    signIn() {
        this.authService.signIn(this.formgroup.value.email, this.formgroup.value.password);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
LoginComponent.propDecorators = {
    flRegister: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    padding-top: 5%\r\n}\r\n\r\n.bg-padrao{\r\n    background: #FAFAFA\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1A7QUFDSjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNSVcclxufVxyXG5cclxuLmJnLXBhZHJhb3tcclxuICAgIGJhY2tncm91bmQ6ICNGQUZBRkFcclxufSJdfQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCBizZziG5eN2M-wrEiBEA3zpZlvMFNnes',
        authDomain: 'dss-api-357ac.firebaseapp.com',
        databaseURL: 'https://dss-api-357ac.firebaseio.com',
        projectId: 'dss-api-357ac',
        storageBucket: 'dss-api-357ac.appspot.com',
        messagingSenderId: '559785213381',
        appId: '1:559785213381:web:2f5833f35f09870f',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "0z2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "HOoa":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access/access.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div [@animation-banner]=\"bannerState\" class=\"col-sm-6 d-flex justify-content-end\">\r\n\t\t\t<app-banner></app-banner>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"flRegister; else formLogin\" \r\n\t\t\t[@animation-painel]=\"bannerState\" \r\n\t\t\t(@animation-painel.start)=\"startAnimation()\" \r\n\t\t\t(@animation-painel.done)=\"doneAnimation()\"\r\n\t\t\tclass=\"col-sm-6 d-flex justify-content-start\">\r\n\r\n\t\t\t<app-register (flRegister)=\"register($event)\"></app-register>\r\n\t\t</div>\r\n\r\n\t\t<ng-template #formLogin>\r\n\t\t\t<div class=\"col-sm-6 d-flex justify-content-start\"\r\n\t\t\t\t[@animation-painel]=\"bannerState\"\r\n\t\t\t\t(@animation-painel.start)=\"startAnimation()\"\r\n\t\t\t\t(@animation-painel.done)=\"doneAnimation()\">\r\n\r\n\t\t\t\t<app-login (flRegister)=\"register($event)\"></app-login>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t\t\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "HPsO":
/*!***********************************************************************!*\
  !*** ./src/app/components/home/publication/publication.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n  margin-bottom: 50px;\r\n  border-color: #E6E6E6;\r\n  max-width: 600px;\r\n}\r\n\r\n.comment {\r\n  border: none;\r\n  padding: 0\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBib3JkZXItY29sb3I6ICNFNkU2RTY7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwXHJcbn0iXX0= */");

/***/ }),

/***/ "IQpA":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/publication/publication.component.ts ***!
  \**********************************************************************/
/*! exports provided: PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_publication_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./publication.component.html */ "zM16");
/* harmony import */ var _publication_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publication.component.css */ "HPsO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PublicationComponent = class PublicationComponent {
    constructor() { }
    ngOnInit() {
    }
};
PublicationComponent.ctorParameters = () => [];
PublicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publication',
        template: _raw_loader_publication_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_publication_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PublicationComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { environment } from '../environments/environment';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-instagram';
    }
    ngOnInit() {
        // firebase.initializeApp(environment.firebaseConfig);
        // firebase.auth().useDeviceLanguage();
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T2iZ":
/*!*******************************************************!*\
  !*** ./src/app/components/access/access.component.ts ***!
  \*******************************************************/
/*! exports provided: AccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessComponent", function() { return AccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_access_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./access.component.html */ "HOoa");
/* harmony import */ var _access_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access.component.css */ "TQCW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");





let AccessComponent = class AccessComponent {
    constructor() {
        this.bannerState = 'start';
        this.flRegister = false;
    }
    ngOnInit() {
    }
    register(event) {
        this.flRegister = event;
    }
    startAnimation() {
    }
    doneAnimation() {
    }
};
AccessComponent.ctorParameters = () => [];
AccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-access',
        template: _raw_loader_access_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('animation-banner', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ 'opacity': 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => start', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ 'opacity': 0, transform: 'translate(-50px, -50px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms 500ms ease-in-out')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('animation-painel', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ 'opacity': 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => start', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ 'opacity': 0, transform: 'translate(50px, 50px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1500ms 500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.60, opacity: 1, transform: 'translateX(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.82, opacity: 1, transform: 'translateX(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.84, opacity: 1, transform: 'translateY(-10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.86, opacity: 1, transform: 'translateY(10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.90, opacity: 1, transform: 'translateY(10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.94, opacity: 1, transform: 'translateY(10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 0.98, opacity: 1, transform: 'translateY(10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ offset: 1, opacity: 1, transform: 'translateY(0)' })
                    ]))
                ])
            ])
        ],
        styles: [_access_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AccessComponent);



/***/ }),

/***/ "TQCW":
/*!********************************************************!*\
  !*** ./src/app/components/access/access.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjZXNzL2FjY2Vzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-padrao\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_access_access_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/access/access.component */ "T2iZ");
/* harmony import */ var _components_access_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/access/banner/banner.component */ "b82Q");
/* harmony import */ var _components_access_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/access/register/register.component */ "srj5");
/* harmony import */ var _components_access_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/access/login/login.component */ "9Qp5");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_home_publication_publication_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/publication/publication.component */ "IQpA");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_access_access_component__WEBPACK_IMPORTED_MODULE_7__["AccessComponent"],
            _components_access_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["BannerComponent"],
            _components_access_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _components_access_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _components_home_publication_publication_component__WEBPACK_IMPORTED_MODULE_12__["PublicationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig, 'dss-projects'),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "b82Q":
/*!**************************************************************!*\
  !*** ./src/app/components/access/banner/banner.component.ts ***!
  \**************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_banner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./banner.component.html */ "zXwE");
/* harmony import */ var _banner_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.component.css */ "/Ijn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");





let BannerComponent = class BannerComponent {
    constructor() {
        this.imageList = [
            { state: 'visible', url: '/assets/banner-acesso/img_1.png' },
            { state: 'hidden', url: '/assets/banner-acesso/img_2.png' },
            { state: 'hidden', url: '/assets/banner-acesso/img_3.png' },
            { state: 'hidden', url: '/assets/banner-acesso/img_4.png' },
            { state: 'hidden', url: '/assets/banner-acesso/img_5.png' }
        ];
    }
    ngOnInit() {
        setTimeout(() => this.rotation(), 3000);
    }
    rotation() {
        for (let i = 0; i < this.imageList.length; i++) {
            if (this.imageList[i].state === 'visible') {
                this.imageList[i].state = 'hidden';
                this.imageList[i === 4 ? 0 : (i + 1)].state = 'visible';
                break;
            }
        }
        setTimeout(() => this.rotation(), 3000);
    }
};
BannerComponent.ctorParameters = () => [];
BannerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-banner',
        template: _raw_loader_banner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('banner', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    'opacity': 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    'opacity': 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('hidden <=> visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('2s ease-in'))
            ])
        ],
        styles: [_banner_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BannerComponent);



/***/ }),

/***/ "jiCS":
/*!*******************************************************************!*\
  !*** ./src/app/components/access/register/register.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-title {\r\n    background-image: url(\"/assets/logo-instagram.png\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 60px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2Nlc3MvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1EQUFtRDtJQUNuRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY2Vzcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sb2dvLWluc3RhZ3JhbS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let AuthService = class AuthService {
    constructor(angularFireAuth, angularFirestore, angularFireDatabase, router) {
        this.angularFireAuth = angularFireAuth;
        this.angularFirestore = angularFirestore;
        this.angularFireDatabase = angularFireDatabase;
        this.router = router;
        //// Get auth data, then get firestore user document || null
        this.user = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((user) => {
            if (user) {
                console.log('user');
                return this.angularFireDatabase.object(`users/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
            }
        }));
    }
    googleLogin() {
        const provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }
    oAuthLogin(provider) {
        return this.angularFireAuth.signInWithPopup(provider).then((credential) => {
            this.router.navigate(['home']);
            this.updateUserData(credential.user);
        });
    }
    // Not used
    updateUserData(user) {
        // Sets user data to firestore on login
        const userReference = this.angularFirestore.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            fullname: user.fullname,
            username: user.username,
        };
        return userReference.set(data, { merge: true });
    }
    signOut() {
        this.angularFireAuth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }
    signIn(email, password) {
        this.angularFireAuth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
            console.log(response);
            this.router.navigate(['/home']);
        })
            .catch((error) => {
            console.log(error);
            alert('The login or password is wrong.');
        });
    }
    update(fbPath, data) {
        return this.angularFireDatabase.object(fbPath).update(data);
    }
    addUser(user) {
        console.log(user);
        this.angularFireAuth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((response) => {
            console.log(response);
            if (response.additionalUserInfo.isNewUser) {
                const password = user.password;
                delete user.password;
                this.angularFireDatabase.object(`users/${response.user.uid}`).set(user);
                return this.signIn(user.email, password);
            }
        })
            .catch((error) => {
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            }
            else {
                alert(errorMessage);
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthService);



/***/ }),

/***/ "o6Br":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access/login/login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\t<div class=\"card-body\">\r\n\t\t<div class=\"card-title\"></div>\r\n\r\n\t\t<form [formGroup]=\"formgroup\" (ngSubmit)=\"signIn()\">\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Senha\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-sm btn-block\">Entrar</button>\r\n\t\t</form>\r\n\r\n\t\t<hr />\r\n\r\n\t\t<p class=\"small text-danger text-center\">O nome de usuário inserido não pertence a uma conta. Verifique seu nome de usuário e tente novamente.</p>\r\n\t\t\r\n\t</div>\r\n</div>\r\n\r\n<br />\r\n\r\n<div class=\"card\">\r\n\t<div class=\"card-body\">\r\n\t\t<p class=\"card-text\">\r\n\t\t\tNão tem uma conta? <a (click)=\"cadastrar()\" href=\"#\" class=\"card-link\">Cadastre-se</a>\r\n\t\t</p> \r\n\t</div>\r\n</div>");

/***/ }),

/***/ "qJcC":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access/register/register.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\t<div class=\"card-body\">\r\n\t\t<div class=\"card-title\"></div>\r\n\t\t\r\n\t\t<form [formGroup]=\"formgroup\" (ngSubmit)=\"addUser()\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input formControlName=\"fullname\" type=\"text\" class=\"form-control\" placeholder=\"Nome completo\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Nome de usuário\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Senha\">\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-sm btn-block\">Cadastre-se</button>\r\n\t\t</form>\r\n\t\t<hr />\r\n\t\t\r\n\t\t<p class=\"small text-center\">\r\n\t\t\tAo cadastrar-se, você concorda com nossos <b>Termos</b> e <b>Política de Privacidade</b>.\r\n\t\t</p>\r\n\t\t\r\n\t</div>\r\n</div>\r\n\r\n<br />\r\n\r\n<div class=\"card\">\r\n\t<div class=\"card-body\">\r\n\t\t<p class=\"card-text\">\r\n\t\t\tTem uma conta? <a (click)=\"login()\" href=\"#\" class=\"card-link\">Faça login</a>\r\n\t\t</p> \r\n\t</div>\r\n</div>");

/***/ }),

/***/ "srj5":
/*!******************************************************************!*\
  !*** ./src/app/components/access/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "qJcC");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "jiCS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");






let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.flRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.formgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'fullname': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    }
    ngOnInit() {
    }
    login() {
        this.flRegister.emit(false);
    }
    addUser() {
        let user = {
            email: this.formgroup.value.email,
            fullname: this.formgroup.value.fullname,
            username: this.formgroup.value.username,
            password: this.formgroup.value.password
        };
        this.authService.addUser(user);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
RegisterComponent.propDecorators = {
    flRegister: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], RegisterComponent);



/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar fixed-top navbar-light bg-white\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"logo\"></div>\r\n\t\t<div class=\"add-post\"></div>\r\n\t</div>  \r\n</nav>\r\n\r\n<br /><br /><br />\r\n<div class=\"container\">\r\n\t<app-publication></app-publication>   \r\n</div>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_access_access_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/access/access.component */ "T2iZ");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ "+VzF");






const routes = [
    { path: '', component: _components_access_access_component__WEBPACK_IMPORTED_MODULE_3__["AccessComponent"] },
    { path: 'login', component: _components_access_access_component__WEBPACK_IMPORTED_MODULE_3__["AccessComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "zM16":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/publication/publication.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n\t<div class=\"col d-flex justify-content-center\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<p class=\"card-text\"><strong>Jorge</strong></p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<img class=\"card-img\" src=\"/assets/posts/img1.png\" />\r\n\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<p class=\"card-text\">\r\n\t\t\t\t<strong>Jorge</strong> foi um belo dia no parque!\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<hr />\r\n\t\t\t\t<input type=\"text\" class=\"form-control comment\" placeholder=\"Adicione um comentário...\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n  \t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col d-flex justify-content-center\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<p class=\"card-text\"><strong>Jorge</strong></p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<img class=\"card-img\" src=\"/assets/posts/img2.png\" />\r\n\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<p class=\"card-text\">\r\n\t\t\t\t<strong>Jorge</strong> pra você também!\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<hr />\r\n\t\t\t\t<input type=\"text\" class=\"form-control comment\" placeholder=\"Adicione um comentário...\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col d-flex justify-content-center\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<p class=\"card-text\"><strong>Jorge</strong></p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<img class=\"card-img\" src=\"/assets/posts/img3.png\" />\r\n\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<p class=\"card-text\"></p>\r\n\r\n\t\t\t\t<hr />\r\n\t\t\t\t<input type=\"text\" class=\"form-control comment\" placeholder=\"Adicione um comentário...\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col d-flex justify-content-center\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<p class=\"card-text\"><strong>Jorge</strong></p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<img class=\"card-img\" src=\"/assets/posts/img4.png\" />\r\n\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<p class=\"card-text\"></p>\r\n\r\n\t\t\t\t<hr />\r\n\t\t\t\t<input type=\"text\" class=\"form-control comentario\" placeholder=\"Adicione um comentário...\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zXwE":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access/banner/banner.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner-background\">\r\n\t<img *ngFor=\"let image of imageList\"\r\n\t\t[@banner]=\"image.state\"\r\n\t\tclass=\"position-absolute\"\r\n\t\t[src]=\"image.url\"\r\n\t\talt=\"Responsive image\">\r\n</div>\r\n");

/***/ }),

/***/ "zbRL":
/*!*************************************************************!*\
  !*** ./src/app/components/access/login/login.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-title {\r\n    background-image: url(\"/assets/logo-instagram.png\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 60px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2Nlc3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1EQUFtRDtJQUNuRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY2Vzcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sb2dvLWluc3RhZ3JhbS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map