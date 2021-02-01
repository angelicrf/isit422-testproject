(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _finalproject_finalproject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finalproject/finalproject.component */ "./src/app/finalproject/finalproject.component.ts");
/* harmony import */ var _cloudmanagement_cloudmanagement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloudmanagement/cloudmanagement.component */ "./src/app/cloudmanagement/cloudmanagement.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _filetransfer_filetransfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filetransfer/filetransfer.component */ "./src/app/filetransfer/filetransfer.component.ts");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'users', component: _finalproject_finalproject_component__WEBPACK_IMPORTED_MODULE_2__["FinalprojectComponent"] },
    { path: 'cloudmanagement/', component: _cloudmanagement_cloudmanagement_component__WEBPACK_IMPORTED_MODULE_3__["CloudmanagementComponent"] },
    { path: 'filetransfer', component: _filetransfer_filetransfer_component__WEBPACK_IMPORTED_MODULE_7__["FiletransferComponent"] },
    { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"] }
];
//FinalProjectComponent
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-login.service */ "./src/app/user-login.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");










function AppComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cloud Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cloud Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cloud Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cloud Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(usrLogin) {
        this.usrLogin = usrLogin;
        this.appSiName = "Sign In";
        this.appSpName = "Sign Up";
        this.signedConfirmed = false;
    }
    ngOnInit() {
        this.signedInApprouved();
    }
    signedInApprouved() {
        let signInValue = sessionStorage.getItem("userSignedIn");
        if (signInValue == "SignedUser") {
            this.signedConfirmed = true;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 122, vars: 15, consts: [[1, "fixed-header"], ["mat-icon-button", "", 1, "btn", "btn-primary", 3, "matMenuTriggerFor"], ["id", "team_name"], ["routerLink", "/home", "id", "a_three"], ["routerLink", "/cloudmanagement/", "id", "a_one", 4, "ngIf"], ["id", "a_one", 4, "ngIf"], ["routerLink", "/filetransfer", "id", "a_two", 4, "ngIf"], ["id", "a_two", 4, "ngIf"], ["routerLink", "/sign-up", "id", "a_three"], ["routerLink", "/sign-in", "id", "a_four"], ["menu", "matMenu"], [1, "card"], ["mat-menu-item", "", "routerLink", "/home"], ["mat-menu-item", "", "routerLink", "/sign-in"], ["mat-menu-item", "", "routerLink", "/sign-up"], ["mat-menu-item", "", "routerLink", "/cloudmanagement/", 3, "disabled"], ["mat-menu-item", "", "routerLink", "/filetransfer", 3, "disabled"], [1, "footer-div", "container-fluid"], [1, "container-fluid", "cnSecond", "pb-0", "mb-0", "justify-content-center", "text-light"], [1, "stFooter"], [1, "row", "my-5", "justify-content-center", "py-5"], [1, "col-11"], [1, "row"], [1, "col-xl-8", "col-md-4", "col-sm-4", "col-12", "my-auto", "mx-auto", "a"], [1, "text-muted", "mb-md-0", "mb-5", "bold-text"], [1, "col-xl-2", "col-md-4", "col-sm-4", "col-12"], [1, "mb-3", "mb-lg-4", "bold-text"], [1, "list-unstyled"], ["routerLink", "/home"], ["routerLink", "/sign-in"], ["routerLink", "/sign-up"], ["routerLink", "/cloudmanagement/", 4, "ngIf"], [4, "ngIf"], ["routerLink", "/filetransfer", 4, "ngIf"], [1, "mb-3", "mb-lg-4", "text-muted", "bold-text", "mt-sm-0", "mt-5"], [1, "mb-1"], [1, "col-xl-8", "col-md-4", "col-sm-4", "col-auto", "my-md-0", "mt-5", "order-sm-1", "order-3", "align-self-end"], [1, "social", "text-muted", "mb-0", "pb-0", "bold-text"], [1, "mx-2"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["aria-hidden", "true", 1, "fa", "fa-linkedin-square"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "rights"], [1, "col-xl-2", "col-md-4", "col-sm-4", "col-auto", "order-1", "align-self-end"], [1, "mt-55", "mt-2", "text-muted", "bold-text"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [1, "col-xl-2", "col-md-4", "col-sm-4", "col-auto", "order-2", "align-self-end", "mt-3"], [1, "text-muted", "bold-text"], ["routerLink", "/cloudmanagement/", "id", "a_one"], ["id", "a_one"], ["routerLink", "/filetransfer", "id", "a_two"], ["id", "a_two"], ["routerLink", "/cloudmanagement/"], ["routerLink", "/filetransfer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Multicloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_a_10_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_a_11_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_a_12_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_a_13_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "add_task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cloud Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "perm_media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "File Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Multicloud Corp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AppComponent_a_72_Template, 2, 0, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AppComponent_a_73_Template, 2, 0, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AppComponent_a_75_Template, 2, 0, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AppComponent_a_76_Template, 2, 0, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "ADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2034, Bel-red Rd,Bellevue, WA 98008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Multicloud Corp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u00AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Multicloud Corp. Signs & Logo Registered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " 2020 Multicloud Corp. All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "yellowteam Isit422");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "yellowteamisit422@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "YELLOWTEAM ISIT422");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "yellowteamisit422@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appSpName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appSiName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appSiName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appSpName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signedConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signedConfirmed);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');\n#team_name[_ngcontent-%COMP%]{\n    margin-left: 20px;\n}\n#a_one[_ngcontent-%COMP%]{\n    margin-left: 450px;\n    color: rgb(212, 225, 236);\n}\n#a_two[_ngcontent-%COMP%]{\n    margin-left: 60px;\n    color: rgb(212, 225, 236);\n}\n#a_three[_ngcontent-%COMP%]{\n    margin-left: 30px;\n    color: rgb(212, 225, 236);\n}\n#a_four[_ngcontent-%COMP%]{\n    margin-left: 40px;\n    color: rgb(212, 225, 236);\n}\n.team-spacer[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n.card[_ngcontent-%COMP%]{\n    width: 250px;\n}\n.fixed-header[_ngcontent-%COMP%]{\n    background-color: rgba(8, 22, 83, 0.952);\n    width:100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    color: #627482 !important;\n}\n.footer-div[_ngcontent-%COMP%] {\n     margin-top: 50px; \n     background: linear-gradient(0deg, #354c8bc0, 50%, #DEEEFE);\n     font-family: 'Rubik', sans-serif;\n          \n }\n.container-fluid[_ngcontent-%COMP%] {\n     width:180%; \n     z-index: 2;\n     bottom: 0;\n     left: 0;\n     right:0;\n     overflow: hidden;\n     margin-right:0;\n     margin-left:0;\n     margin-bottom: 0;\n     padding-right:0;\n     padding-left:0;\n }\n.cnSecond[_ngcontent-%COMP%]{\n    margin-top: 30px; \n    background: #0a2570f8;\n    color: #627482 !important;\n }\n.stFooter[_ngcontent-%COMP%]{\n     width: 100%;\n     margin-bottom: 0px;\n }\nsmall[_ngcontent-%COMP%] {\n     font-size: calc(12px + (15 - 12) * ((100vw - 360px) / (1600 - 360))) !important\n }\n.bold-text[_ngcontent-%COMP%] {\n     color: #989c9e !important\n }\n.mt-55[_ngcontent-%COMP%] {\n     margin-top: calc(50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))) !important\n }\nh3[_ngcontent-%COMP%] {\n     font-size: calc(34px + (40 - 34) * ((100vw - 360px) / (1600 - 360))) !important\n }\n.social[_ngcontent-%COMP%] {\n     font-size: 21px !important\n }\n.rights[_ngcontent-%COMP%] {\n     font-size: calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUVBQXlFO0FBQ3pFO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLHlCQUF5QjtBQUM3QjtBQUVBO0tBQ0ssZ0JBQWdCO0tBQ2hCLDBEQUEwRDtLQUMxRCxnQ0FBZ0M7RUFDbkMsOEJBQThCO0NBQy9CO0FBRUQ7S0FDSyxVQUFVO0tBQ1YsVUFBVTtLQUNWLFNBQVM7S0FDVCxPQUFPO0tBQ1AsT0FBTztLQUNQLGdCQUFnQjtLQUNoQixjQUFjO0tBQ2QsYUFBYTtLQUNiLGdCQUFnQjtLQUNoQixlQUFlO0tBQ2YsY0FBYztDQUNsQjtBQUNBO0lBQ0csZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix5QkFBeUI7Q0FDNUI7QUFDQTtLQUNJLFdBQVc7S0FDWCxrQkFBa0I7Q0FDdEI7QUFFQTtLQUNJO0NBQ0o7QUFFQTtLQUNJO0NBQ0o7QUFFQTtLQUNJO0NBQ0o7QUFFQTtLQUNJO0NBQ0o7QUFFQTtLQUNJO0NBQ0o7QUFFQTtLQUNJO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWsmZGlzcGxheT1zd2FwJyk7XG4jdGVhbV9uYW1le1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuI2Ffb25le1xuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgICBjb2xvcjogcmdiKDIxMiwgMjI1LCAyMzYpO1xufVxuI2FfdHdve1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIGNvbG9yOiByZ2IoMjEyLCAyMjUsIDIzNik7XG59XG4jYV90aHJlZXtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBjb2xvcjogcmdiKDIxMiwgMjI1LCAyMzYpO1xufVxuI2FfZm91cntcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBjb2xvcjogcmdiKDIxMiwgMjI1LCAyMzYpO1xufVxuLnRlYW0tc3BhY2Vye1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuLmNhcmR7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuLmZpeGVkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDIyLCA4MywgMC45NTIpO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6ICM2Mjc0ODIgIWltcG9ydGFudDtcbn0gXG5cbi5mb290ZXItZGl2IHtcbiAgICAgbWFyZ2luLXRvcDogNTBweDsgXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMzU0YzhiYzAsIDUwJSwgI0RFRUVGRSk7XG4gICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuICAvKiAgICBiYWNrZ3JvdW5kOiAjMzU0YzhiYzA7ICovICAgICAgICBcbiB9XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgICB3aWR0aDoxODAlOyBcbiAgICAgei1pbmRleDogMjtcbiAgICAgYm90dG9tOiAwO1xuICAgICBsZWZ0OiAwO1xuICAgICByaWdodDowO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICBtYXJnaW4tcmlnaHQ6MDtcbiAgICAgbWFyZ2luLWxlZnQ6MDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgcGFkZGluZy1yaWdodDowO1xuICAgICBwYWRkaW5nLWxlZnQ6MDtcbiB9XG4gLmNuU2Vjb25ke1xuICAgIG1hcmdpbi10b3A6IDMwcHg7IFxuICAgIGJhY2tncm91bmQ6ICMwYTI1NzBmODtcbiAgICBjb2xvcjogIzYyNzQ4MiAhaW1wb3J0YW50O1xuIH1cbiAuc3RGb290ZXJ7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gfVxuXG4gc21hbGwge1xuICAgICBmb250LXNpemU6IGNhbGMoMTJweCArICgxNSAtIDEyKSAqICgoMTAwdncgLSAzNjBweCkgLyAoMTYwMCAtIDM2MCkpKSAhaW1wb3J0YW50XG4gfVxuXG4gLmJvbGQtdGV4dCB7XG4gICAgIGNvbG9yOiAjOTg5YzllICFpbXBvcnRhbnRcbiB9XG5cbiAubXQtNTUge1xuICAgICBtYXJnaW4tdG9wOiBjYWxjKDUwcHggKyAoNjAgLSA1MCkgKiAoKDEwMHZ3IC0gMzYwcHgpIC8gKDE2MDAgLSAzNjApKSkgIWltcG9ydGFudFxuIH1cblxuIGgzIHtcbiAgICAgZm9udC1zaXplOiBjYWxjKDM0cHggKyAoNDAgLSAzNCkgKiAoKDEwMHZ3IC0gMzYwcHgpIC8gKDE2MDAgLSAzNjApKSkgIWltcG9ydGFudFxuIH1cblxuIC5zb2NpYWwge1xuICAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudFxuIH1cblxuIC5yaWdodHMge1xuICAgICBmb250LXNpemU6IGNhbGMoMTBweCArICgxMiAtIDEwKSAqICgoMTAwdncgLSAzNjBweCkgLyAoMTYwMCAtIDM2MCkpKSAhaW1wb3J0YW50XG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _finalproject_finalproject_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./finalproject/finalproject.component */ "./src/app/finalproject/finalproject.component.ts");
/* harmony import */ var _cloudmanagement_cloudmanagement_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cloudmanagement/cloudmanagement.component */ "./src/app/cloudmanagement/cloudmanagement.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _filetransfer_filetransfer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filetransfer/filetransfer.component */ "./src/app/filetransfer/filetransfer.component.ts");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error-handelers.service */ "./src/app/error-handelers.service.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
            useClass: _error_handelers_service__WEBPACK_IMPORTED_MODULE_20__["ErrorHandelersService"]
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
        _finalproject_finalproject_component__WEBPACK_IMPORTED_MODULE_14__["FinalprojectComponent"],
        _cloudmanagement_cloudmanagement_component__WEBPACK_IMPORTED_MODULE_15__["CloudmanagementComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__["SignInComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _filetransfer_filetransfer_component__WEBPACK_IMPORTED_MODULE_19__["FiletransferComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
                    _finalproject_finalproject_component__WEBPACK_IMPORTED_MODULE_14__["FinalprojectComponent"],
                    _cloudmanagement_cloudmanagement_component__WEBPACK_IMPORTED_MODULE_15__["CloudmanagementComponent"],
                    _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_16__["SignInComponent"],
                    _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _filetransfer_filetransfer_component__WEBPACK_IMPORTED_MODULE_19__["FiletransferComponent"]
                ],
                providers: [{
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
                        useClass: _error_handelers_service__WEBPACK_IMPORTED_MODULE_20__["ErrorHandelersService"]
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bx-cloud.service.ts":
/*!*************************************!*\
  !*** ./src/app/bx-cloud.service.ts ***!
  \*************************************/
/*! exports provided: BxCloudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BxCloudService", function() { return BxCloudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handelers.service */ "./src/app/error-handelers.service.ts");




class BxCloudService {
    constructor(errorService) {
        this.errorService = errorService;
        this.accesToken = '';
        this.boxCodeStored = '';
    }
    boxRedirectCode() {
        let bxUrl = "https://account.box.com/api/oauth2/authorize?response_type=code&client_id=cizpnka9apgvmixa683wgv0lk63cbv7q&redirect_uri=https://stormy-headland-33273.herokuapp.com/cloudmanagement";
        let link = document.createElement('a');
        link.href = bxUrl;
        link.click();
    }
    getBoxCodefromUri() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                const uriLink = location.href;
                const newUri = new URL(uriLink);
                const findParam = newUri.searchParams.get('code');
                try {
                    if (findParam !== undefined || findParam !== null || findParam !== "") {
                        return resolve(findParam);
                    }
                }
                catch (error) {
                    this.errorService.handleError(error);
                    return reject(error);
                }
            });
        });
    }
    getboxCodeOauth(boxIssuedCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("getboxCodeOauth called");
            try {
                if (boxIssuedCode !== undefined || boxIssuedCode !== null || boxIssuedCode !== "") {
                    console.log("boxIssuedCode " + boxIssuedCode);
                    return yield new Promise((resolve, reject) => {
                        let myHeaders = new Headers();
                        myHeaders.append('Content-Type', 'application/json');
                        let raw = JSON.stringify({
                            title: 'codefromAngular',
                            saveCode: boxIssuedCode,
                        });
                        let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw,
                        };
                        fetch('/api/BoxCode', requestOptions)
                            .then((response) => {
                            console.log("inside the ResponseOne");
                            return response.json();
                        })
                            .then(result => {
                            console.log("inside the ResponseTWo");
                            resolve(`Code Issued ${result}`);
                        })
                            .catch(err => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    issueBoxAccessToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                let myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                let requestOptions = {
                    method: 'GET',
                    headers: myHeaders
                };
                fetch('/api/BoxOauth', requestOptions)
                    .then((response) => {
                    return response.json();
                })
                    .then((result) => {
                    this.accesToken = result[Object.keys(result)[1]];
                    console.log("AccessToken form BoxService " + this.accesToken);
                    sessionStorage.setItem("bxAccessToken", this.accesToken);
                    resolve(this.accesToken);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    getBoxClientInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                let myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                let requestOptions = {
                    method: 'GET',
                    headers: myHeaders
                };
                fetch('/api/BoxClientEmail', requestOptions)
                    .then((response) => {
                    return response.json();
                })
                    .then((result) => {
                    let saveClientEmail = result[Object.keys(result)[1]];
                    let saveClientName = result[Object.keys(result)[2]];
                    let holdBoxClientInfo = [];
                    holdBoxClientInfo.push(saveClientName, saveClientEmail);
                    console.log("BoxClientEmail form BoxService " + saveClientEmail);
                    resolve(holdBoxClientInfo);
                })
                    .catch(err => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    boxShowFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                let myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                let requestOptions = {
                    method: 'GET',
                    headers: myHeaders
                };
                fetch('/api/BoxGetFile', requestOptions)
                    .then((response) => {
                    return response.json();
                })
                    .then((result) => {
                    let holdFileInfo = result[Object.keys(result)[1]];
                    console.log("boxShowFile form BoxService " + JSON.stringify(holdFileInfo));
                    resolve(holdFileInfo);
                })
                    .catch(err => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    boxAllFoldersFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                let myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                let requestOptions = {
                    method: 'GET',
                    headers: myHeaders
                };
                fetch('/api/BoxGetFolders', requestOptions)
                    .then((response) => {
                    return response.json();
                })
                    .then((result) => {
                    let holdAllFlsFils = result[Object.keys(result)[1]];
                    resolve(holdAllFlsFils);
                })
                    .catch(err => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    boxDownload(bxId, bxName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (bxId !== undefined || bxId !== null || bxId !== ""
                    || bxName !== undefined || bxName !== null || bxName !== "") {
                    console.log("boxDownload from service " + bxId + bxName);
                    return yield new Promise((resolve, reject) => {
                        let myHeaders = new Headers();
                        myHeaders.append('Content-Type', 'application/json');
                        let raw = JSON.stringify({
                            title: 'codefromAngular',
                            boxFileId: bxId,
                            boxFileName: bxName
                        });
                        let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw
                        };
                        fetch('/api/BxDownload', requestOptions)
                            .then((response) => {
                            return response.json();
                        })
                            .then((result) => {
                            let msgDisplay = result[Object.keys(result)[0]];
                            console.log("boxDownload form BoxService " + msgDisplay);
                            resolve(msgDisplay);
                        })
                            .catch(err => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    boxUpload(bxFlName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (bxFlName !== undefined || bxFlName !== null || bxFlName !== "") {
                    return yield new Promise((resolve, reject) => {
                        let myHeaders = new Headers();
                        myHeaders.append('Content-Type', 'application/json');
                        let raw = JSON.stringify({
                            title: 'codefromAngular',
                            boxUpFileName: bxFlName
                        });
                        let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw
                        };
                        fetch('/api/BxUpload', requestOptions)
                            .then((response) => {
                            return response.json();
                        })
                            .then((result) => {
                            let msgDisplay = result[Object.keys(result)[0]];
                            console.log("boxUpload form BoxService " + msgDisplay);
                            resolve(msgDisplay);
                        })
                            .catch(err => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    boxLocalUpload(bxFlName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (bxFlName !== undefined || bxFlName !== null || bxFlName !== "") {
                    return yield new Promise((resolve, reject) => {
                        let myHeaders = new Headers();
                        myHeaders.append('Content-Type', 'application/json');
                        let raw = JSON.stringify({
                            title: 'codefromAngular',
                            boxUpFileName: bxFlName
                        });
                        let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw
                        };
                        fetch('/api/BxLocalUpload', requestOptions)
                            .then((response) => {
                            return response.json();
                        })
                            .then((result) => {
                            let msgDisplay = result[Object.keys(result)[0]];
                            console.log("boxUpload form BoxService " + msgDisplay);
                            resolve(msgDisplay);
                        })
                            .catch(err => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    sendBoxClientInfo(getBxName, getBxEmail, getUserMongoId) {
        try {
            if (getBxName !== undefined || getBxName !== null || getBxName !== ""
                || getBxEmail !== undefined || getBxEmail !== null || getBxEmail !== ""
                || getUserMongoId !== undefined || getUserMongoId !== null || getUserMongoId !== "") {
                let bxClientValue = JSON.stringify({
                    bxname: getBxName,
                    bxemail: getBxEmail,
                    usermongoid: getUserMongoId,
                });
                let myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                return fetch('/api/MCBoxClient', {
                    method: 'POST',
                    headers: myHeaders,
                    body: bxClientValue
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(err => this.errorService.handleError(err));
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
}
BxCloudService.ɵfac = function BxCloudService_Factory(t) { return new (t || BxCloudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"])); };
BxCloudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BxCloudService, factory: BxCloudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BxCloudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cloudmanagement/cloudmanagement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cloudmanagement/cloudmanagement.component.ts ***!
  \**************************************************************/
/*! exports provided: CloudmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudmanagementComponent", function() { return CloudmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter.service */ "./src/app/filter.service.ts");
/* harmony import */ var _gd_cloud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gd-cloud.service */ "./src/app/gd-cloud.service.ts");
/* harmony import */ var _dp_cloud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dp-cloud.service */ "./src/app/dp-cloud.service.ts");
/* harmony import */ var _gdClientCredentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gdClientCredentials */ "./src/app/gdClientCredentials.ts");
/* harmony import */ var _bx_cloud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bx-cloud.service */ "./src/app/bx-cloud.service.ts");
/* harmony import */ var _od_cloud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../od-cloud.service */ "./src/app/od-cloud.service.ts");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error-handelers.service */ "./src/app/error-handelers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












function CloudmanagementComponent_li_6_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 19);
} if (rf & 2) {
    const flt_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", flt_r18);
} }
function CloudmanagementComponent_li_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CloudmanagementComponent_li_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ind_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.filters.splice(ind_r19, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CloudmanagementComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CloudmanagementComponent_li_6_input_1_Template, 1, 1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CloudmanagementComponent_li_6_button_2_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flt_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", flt_r18 !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", flt_r18 !== "");
} }
function CloudmanagementComponent_li_7_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ft_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ft_r28);
} }
function CloudmanagementComponent_li_7_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const srv_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](srv_r29);
} }
function CloudmanagementComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CloudmanagementComponent_li_7_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.fileType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CloudmanagementComponent_li_7_option_2_Template, 2, 1, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CloudmanagementComponent_li_7_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.service = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CloudmanagementComponent_li_7_option_6_Template, 2, 1, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.fileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.fileTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.service);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.services);
} }
function CloudmanagementComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CloudmanagementComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.addFilterForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+ New Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CloudmanagementComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CloudmanagementComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r35.addFilterForm = false; return ctx_r35.addFilter(ctx_r35.fileType + " to " + ctx_r35.service); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Complete Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CloudmanagementComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CloudmanagementComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.addFilterForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function CloudmanagementComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CloudmanagementComponent_input_14_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.dpChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx_r5.gdChecked && ctx_r5.odChecked ? true : null) || (ctx_r5.gdChecked && ctx_r5.bxChecked ? true : null) || (ctx_r5.gdChecked && ctx_r5.lfChecked ? true : null) || (ctx_r5.bxChecked && ctx_r5.lfChecked ? true : null) || (ctx_r5.bxChecked && ctx_r5.odChecked ? true : null) || (ctx_r5.lfChecked && ctx_r5.odChecked ? true : null))("ngModel", ctx_r5.dpChecked)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
function CloudmanagementComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dropbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.dpEmail);
} }
function CloudmanagementComponent_input_18_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CloudmanagementComponent_input_18_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.gdChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx_r7.dpChecked && ctx_r7.odChecked ? true : null) || (ctx_r7.dpChecked && ctx_r7.bxChecked ? true : null) || (ctx_r7.dpChecked && ctx_r7.lfChecked ? true : null) || (ctx_r7.bxChecked && ctx_r7.lfChecked ? true : null) || (ctx_r7.bxChecked && ctx_r7.odChecked ? true : null) || (ctx_r7.lfChecked && ctx_r7.odChecked ? true : null))("ngModel", ctx_r7.gdChecked)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
function CloudmanagementComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Google Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.gdEmail);
} }
function CloudmanagementComponent_input_22_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CloudmanagementComponent_input_22_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.odChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx_r9.dpChecked && ctx_r9.gdChecked ? true : null) || (ctx_r9.dpChecked && ctx_r9.bxChecked ? true : null) || (ctx_r9.dpChecked && ctx_r9.lfChecked ? true : null) || (ctx_r9.bxChecked && ctx_r9.lfChecked ? true : null) || (ctx_r9.bxChecked && ctx_r9.gdChecked ? true : null) || (ctx_r9.lfChecked && ctx_r9.gdChecked ? true : null))("ngModel", ctx_r9.odChecked)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
function CloudmanagementComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "OneDrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.odEmail);
} }
function CloudmanagementComponent_input_26_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CloudmanagementComponent_input_26_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.bxChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx_r11.dpChecked && ctx_r11.odChecked ? true : null) || (ctx_r11.dpChecked && ctx_r11.gdChecked ? true : null) || (ctx_r11.dpChecked && ctx_r11.lfChecked ? true : null) || (ctx_r11.gdChecked && ctx_r11.lfChecked ? true : null) || (ctx_r11.odChecked && ctx_r11.gdChecked ? true : null) || (ctx_r11.lfChecked && ctx_r11.odChecked ? true : null))("ngModel", ctx_r11.bxChecked)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
function CloudmanagementComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Box");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.bxEmail);
} }
function CloudmanagementComponent_input_30_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CloudmanagementComponent_input_30_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.lfChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx_r13.dpChecked && ctx_r13.odChecked ? true : null) || (ctx_r13.dpChecked && ctx_r13.bxChecked ? true : null) || (ctx_r13.dpChecked && ctx_r13.gdChecked ? true : null) || (ctx_r13.bxChecked && ctx_r13.gdChecked ? true : null) || (ctx_r13.bxChecked && ctx_r13.odChecked ? true : null) || (ctx_r13.gdChecked && ctx_r13.odChecked ? true : null))("ngModel", ctx_r13.lfChecked)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
function CloudmanagementComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Local File System");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.readsessionStorageValue("localFilePath"));
} }
function CloudmanagementComponent_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Specify a local file path:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CloudmanagementComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CloudmanagementComponent_div_34_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.localFilePath = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CloudmanagementComponent_div_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.setsessionStorageFilePath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CloudmanagementComponent_div_34_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.localForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.localFilePath);
} }
function CloudmanagementComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CloudmanagementComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.handleClientLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CloudmanagementComponent {
    constructor(filterService, gdService, dpService, gdcl, bxService, odService, errorService) {
        this.filterService = filterService;
        this.gdService = gdService;
        this.dpService = dpService;
        this.gdcl = gdcl;
        this.bxService = bxService;
        this.odService = odService;
        this.errorService = errorService;
        this.title = 'CloudManagementComponent';
        this.checked = false;
        this.selectedApi = [];
        this.selected = false;
        this.dpChecked = false;
        this.gdChecked = false;
        this.odChecked = false;
        this.bxChecked = false;
        this.lfChecked = false;
        this.addFilterForm = false;
        this.dropboxForm = false;
        this.googleDriveForm = false;
        this.oneDriveForm = false;
        this.boxForm = false;
        this.localForm = false;
        this.gdEmail = this.readsessionStorageValue('gdUserEmail');
        this.dpEmail = this.readsessionStorageValue('dpEmail');
        this.bxEmail = this.readsessionStorageValue('boxClientEmail');
        this.odEmail = this.readsessionStorageValue('odClientEmail');
        this.dbAccount = {
            "username": "",
            "password": ""
        };
        this.gdAccount = {
            "username": "",
            "password": ""
        };
        this.odAccount = {
            "username": "",
            "password": ""
        };
        this.bAccount = {
            "username": "",
            "password": ""
        };
        this.fileTypes = [
            'Audio',
            'Documents',
            'Images',
            'Videos'
        ];
        this.services = [
            'Dropbox',
            'GoogleDrive',
            'OneDrive',
            'Box',
            'LocalFiles'
        ];
        this.filters = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uriLink = location.href;
            try {
                if (uriLink.includes('code=MdDdy')) {
                    this.saveDpCode = yield this.dpService.getCodefromUri();
                    let stDpCode = this.saveDpCode;
                    console.log("stDpCode " + stDpCode);
                    let saveDpAccessToken = yield this.dpService.sendMessageToNode(stDpCode);
                    sessionStorage.setItem("dpAccessToken", saveDpAccessToken);
                    this.removeUrlParams();
                    if (sessionStorage.getItem("gdSelected") === "gdSelected") {
                        this.removeSelectedCloud("gdSelected");
                        this.googleDriveInit();
                    }
                    if (sessionStorage.getItem("bxSelected") === "bxSelected") {
                        this.removeSelectedCloud("bxSelected");
                        this.bxService.boxRedirectCode();
                        let saveBxCode = yield this.bxService.getBoxCodefromUri();
                        let stBxCode = saveBxCode;
                        console.log("stBxCode " + stBxCode);
                        yield this.bxService.getboxCodeOauth(saveBxCode);
                        yield this.bxService.issueBoxAccessToken();
                        this.removeUrlParams();
                    }
                    if (sessionStorage.getItem("odSelected") === "odSelected") {
                        this.removeSelectedCloud("odSelected");
                        this.odService.login();
                        let saveOdCode = yield this.odService.odCodeFromUri();
                        let saveOdAccessToken = yield this.odService.odAccessToken(saveOdCode);
                        sessionStorage.setItem("odAccessToken", saveOdAccessToken);
                        this.removeUrlParams();
                    }
                    if (sessionStorage.getItem("lfSelected") === "lfSelected") {
                        this.removeSelectedCloud("lfSelected");
                        this.readsessionStorageValue('localFilePath');
                    }
                }
                if (uriLink.includes('code') && !uriLink.includes('code=MdDdy')) {
                    let saveBxCode = yield this.bxService.getBoxCodefromUri();
                    let stBxCode = saveBxCode;
                    console.log("stBxCode " + stBxCode);
                    yield this.bxService.getboxCodeOauth(saveBxCode);
                    yield this.bxService.issueBoxAccessToken();
                    this.removeUrlParams();
                    if (sessionStorage.getItem("gdSelected") === "gdSelected") {
                        this.removeSelectedCloud("gdSelected");
                        this.googleDriveInit();
                    }
                    if (sessionStorage.getItem("odSelected") === "odSelected") {
                        this.removeSelectedCloud("odSelected");
                        this.odService.login();
                        let saveOdCode = yield this.odService.odCodeFromUri();
                        let saveOdAccessToken = yield this.odService.odAccessToken(saveOdCode);
                        sessionStorage.setItem("odAccessToken", saveOdAccessToken);
                        this.removeUrlParams();
                    }
                    if (sessionStorage.getItem("lfSelected") === "lfSelected") {
                        this.removeSelectedCloud("lfSelected");
                        this.readsessionStorageValue('localFilePath');
                    }
                }
                if (uriLink.includes('access_token')) {
                    let saveOdCode = yield this.odService.odCodeFromUri();
                    let saveOdAccessToken = yield this.odService.odAccessToken(saveOdCode);
                    sessionStorage.setItem("odAccessToken", saveOdAccessToken);
                    this.removeUrlParams();
                    if (sessionStorage.getItem("gdSelected") === "gdSelected") {
                        this.removeSelectedCloud("gdSelected");
                        this.googleDriveInit();
                    }
                    if (sessionStorage.getItem("lfSelected") === "lfSelected") {
                        this.removeSelectedCloud("lfSelected");
                        this.readsessionStorageValue('localFilePath');
                    }
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    addFilter(filter) {
        try {
            if (filter !== undefined || filter !== null || filter !== '') {
                // if(!this.filters.includes(filter) && !filter.includes("undefined")){
                this.filters.push(filter);
                sessionStorage.setItem("apiFileFilter", filter);
                // }
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    linkAccount() {
        // This should link the account if the passed in username and password are accurate
    }
    setsessionStorageFilePath() {
        this.localForm = false;
        /*  let target = ev.target as HTMLInputElement
         let crFile: File = (target.files as FileList)[0];
         this.localFilePath = "Desktop/dog_3.png"; */
        //target.value
        //console.log("targetvalue is " + target.value.substring(12))
        /*  var fReader = new FileReader();
         fReader.readAsDataURL(crFile);
         fReader.onloadend = function(event){
           //console.log('this currentEv ' + event.target.result)
           hdth = event.target.result;
         } */
        sessionStorage.setItem('localFilePath', this.localFilePath);
    }
    readsessionStorageValue(key) {
        try {
            if (key !== undefined || key !== null || key !== "") {
                return sessionStorage.getItem(key);
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    clientEmailValue(v) {
        try {
            if (v !== undefined || v !== null || v !== "") {
                if (sessionStorage.getItem('gdUserEmail') == null) {
                    this.gdEmail = v;
                    sessionStorage.setItem('gdUserEmail', this.gdEmail);
                    console.log('the value from set2 ' + this.gdEmail);
                }
                else if (sessionStorage.getItem('gdUserEmail') !== v) {
                    sessionStorage.removeItem('gdUserEmail');
                    this.gdEmail = v;
                    sessionStorage.setItem('gdUserEmail', this.gdEmail);
                    console.log('the value from set2 ' + this.gdEmail);
                }
                else
                    this.gdEmail = sessionStorage.getItem('gdUserEmail');
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    getClientEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.clientEmailValue(this.gdcl.holdDataClient[0]);
        });
    }
    googleDriveInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let holdPromise = yield this.gdService.googleImplementCallBack();
            console.log("HoldPromises " + holdPromise);
            let holdUserData = yield this.getClientEmail();
            console.log("holdUserData " + holdUserData);
        });
    }
    removeUrlParams() {
        return window.history.replaceState(null, null, window.location.pathname);
    }
    dropBoxClientLogin() {
        this.dpService.dropBoxClLogin();
    }
    boxClientLogin() {
        this.bxService.boxRedirectCode();
    }
    oneDriveClientLogin() {
        this.odService.login();
    }
    handleClientLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.dpChecked && this.gdChecked) {
                    this.selectedApi.push(this.services[0], this.services[1]);
                    this.selected = true;
                    sessionStorage.setItem("gdSelected", "gdSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.dropBoxClientLogin();
                }
                if (this.dpChecked && this.odChecked) {
                    this.selectedApi.push(this.services[0], this.services[2]);
                    this.selected = true;
                    sessionStorage.setItem("odSelected", "odSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.dropBoxClientLogin();
                }
                if (this.dpChecked && this.bxChecked) {
                    this.selectedApi.push(this.services[0], this.services[3]);
                    this.selected = true;
                    sessionStorage.setItem("bxSelected", "bxSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.dropBoxClientLogin();
                }
                if (this.dpChecked && this.lfChecked) {
                    this.selectedApi.push(this.services[0], this.services[4]);
                    this.selected = true;
                    sessionStorage.setItem("lfSelected", "lfSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.dropBoxClientLogin();
                }
                if (this.odChecked && this.gdChecked) {
                    this.selectedApi.push(this.services[2], this.services[1]);
                    this.selected = true;
                    sessionStorage.setItem("gdSelected", "gdSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.odService.login();
                }
                if (this.odChecked && this.bxChecked) {
                    this.selectedApi.push(this.services[2], this.services[3]);
                    this.selected = true;
                    sessionStorage.setItem("bxSelected", "bxSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.odService.login();
                }
                if (this.odChecked && this.lfChecked) {
                    this.selectedApi.push(this.services[2], this.services[4]);
                    this.selected = true;
                    sessionStorage.setItem("lfSelected", "lfSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.odService.login();
                }
                if (this.bxChecked && this.gdChecked) {
                    this.selectedApi.push(this.services[3], this.services[1]);
                    this.selected = true;
                    sessionStorage.setItem("gdSelected", "gdSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.boxClientLogin();
                }
                if (this.bxChecked && this.lfChecked) {
                    this.selectedApi.push(this.services[3], this.services[4]);
                    this.selected = true;
                    sessionStorage.setItem("lfSelected", "lfSelected");
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.boxClientLogin();
                }
                if (this.lfChecked && this.gdChecked) {
                    this.selectedApi.push(this.services[4], this.services[1]);
                    this.selected = true;
                    sessionStorage.setItem("apiSelected", JSON.stringify(this.selectedApi));
                    this.googleDriveInit();
                }
                if (this.selected == false) {
                    alert("Dear customer, please at least check two of the checkboxes");
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    removeSelectedCloud(slt) {
        try {
            if (slt !== undefined || slt !== null || slt !== "") {
                sessionStorage.removeItem(slt);
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
}
CloudmanagementComponent.ɵfac = function CloudmanagementComponent_Factory(t) { return new (t || CloudmanagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gd_cloud_service__WEBPACK_IMPORTED_MODULE_3__["GdCloudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dp_cloud_service__WEBPACK_IMPORTED_MODULE_4__["DpCloudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gdClientCredentials__WEBPACK_IMPORTED_MODULE_5__["GDClientCredentials"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bx_cloud_service__WEBPACK_IMPORTED_MODULE_6__["BxCloudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_od_cloud_service__WEBPACK_IMPORTED_MODULE_7__["OdCloudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandelersService"])); };
CloudmanagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CloudmanagementComponent, selectors: [["app-cloudmanagement"]], decls: 38, vars: 18, consts: [[1, "cmBar"], [2, "margin-top", "40px", "margin-left", "100px", "width", "100%", "overflow", "hidden", "align-content", "center"], [2, "width", "600px", "float", "left"], [1, "filters"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "new-filter", 3, "click", 4, "ngIf"], [2, "margin-left", "620px"], ["type", "checkbox", "class", "services", "aria-checked", "false", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["src", "assets/images/dropbox.png", "width", "64", "height", "64"], ["class", "services-button", 4, "ngIf"], ["src", "assets/images/googledrive.png", "width", "64", "height", "64"], ["src", "assets/images/onedrive.png", "width", "64", "height", "64"], ["src", "assets/images/box.png", "width", "64", "height", "64"], ["src", "assets/images/folder.png", "width", "64", "height", "64"], ["class", "services", 4, "ngIf"], ["class", "btn btn-danger submit-button", 3, "click", 4, "ngIf"], ["autocomplete", "off", "aria-invalid", "false", "readonly", "", 3, "value", 4, "ngIf"], ["class", "delete-button", 3, "click", 4, "ngIf"], ["autocomplete", "off", "aria-invalid", "false", "readonly", "", 3, "value"], [1, "delete-button", 3, "click"], ["id", "fileType", 3, "ngModel", "ngModelChange"], [2, "display", "inline"], ["id", "service", 3, "ngModel", "ngModelChange"], [1, "new-filter", 3, "click"], ["type", "checkbox", "aria-checked", "false", 1, "services", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], [1, "services-button"], [1, "services"], ["autocomplete", "off", "aria-invalid", "false", "placeholder", "/home/bcuser/Documents", 1, "service-input", 3, "ngModel", "ngModelChange"], [1, "service-input", 3, "click"], [1, "btn", "btn-danger", "submit-button", 3, "click"]], template: function CloudmanagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CloudmanagementComponent_li_6_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CloudmanagementComponent_li_7_Template, 7, 4, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CloudmanagementComponent_button_9_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CloudmanagementComponent_button_10_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CloudmanagementComponent_button_12_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CloudmanagementComponent_input_14_Template, 1, 4, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CloudmanagementComponent_span_16_Template, 5, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CloudmanagementComponent_input_18_Template, 1, 4, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CloudmanagementComponent_span_20_Template, 5, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CloudmanagementComponent_input_22_Template, 1, 4, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CloudmanagementComponent_span_24_Template, 4, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CloudmanagementComponent_input_26_Template, 1, 4, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CloudmanagementComponent_span_28_Template, 4, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CloudmanagementComponent_input_30_Template, 1, 4, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CloudmanagementComponent_span_32_Template, 4, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CloudmanagementComponent_label_33_Template, 2, 0, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CloudmanagementComponent_div_34_Template, 6, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CloudmanagementComponent_button_37_Template, 3, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.addFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dropboxForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dropboxForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.googleDriveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.googleDriveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.oneDriveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.oneDriveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.boxForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.boxForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.localForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.localForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lfChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lfChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dropboxForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]], styles: [".new-filter[_ngcontent-%COMP%] {\n    border-radius: 5;\n    width: 210px;\n    margin-bottom: 5px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n\n.filters[_ngcontent-%COMP%] {\n    list-style-type: none; \n    padding: 0;\n    margin: 0; \n}\n\nli[_ngcontent-%COMP%] {\n    margin: 10px 0;\n}\n\n.services[_ngcontent-%COMP%], .services-button[_ngcontent-%COMP%] {\n    margin: 20px 20px;\n    text-align: left;\n    vertical-align: middle;\n    \n}\n\n.services-button[_ngcontent-%COMP%], .delete-button[_ngcontent-%COMP%] {\n    background: none;\n    border: none; \n    outline: 0;\n    \n}\n\n.submit-button[_ngcontent-%COMP%]{\n    margin: 20px 20px;\n    text-align: left;\n    vertical-align: middle;\n    outline: 0;\n    border: rgb(36, 53, 207);\n    border-radius: 5px;\n    border-width: thick;\n    border-style: solid;\n    width: 60px;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n    color: rgb(155, 164, 177);\n}\n\n.services-button[_ngcontent-%COMP%]:hover {\n    background: rgb(220, 235, 255);\n}\n\n.service-input[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-right: 5px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n    transform: scale(1.5);\n}\n\n.cmBar[_ngcontent-%COMP%]{\n    margin-top: 100px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvdWRtYW5hZ2VtZW50L2Nsb3VkbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztFQUNoQjs7QUFFRjtJQUNJLHFCQUFxQixFQUFFLG1CQUFtQjtJQUMxQyxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTs7QUFFZDs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkbWFuYWdlbWVudC9jbG91ZG1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5ldy1maWx0ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDU7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG4uZmlsdGVycyB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyAvKiBSZW1vdmUgYnVsbGV0cyAqL1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwOyBcbn1cblxubGkge1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uc2VydmljZXMsIC5zZXJ2aWNlcy1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBcbn1cblxuLnNlcnZpY2VzLWJ1dHRvbiwgLmRlbGV0ZS1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lOyBcbiAgICBvdXRsaW5lOiAwO1xuICAgIFxufVxuLnN1Ym1pdC1idXR0b257XG4gICAgbWFyZ2luOiAyMHB4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyOiByZ2IoMzYsIDUzLCAyMDcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItd2lkdGg6IHRoaWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDYwcHg7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgICBjb2xvcjogcmdiKDE1NSwgMTY0LCAxNzcpO1xufVxuXG4uc2VydmljZXMtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIwLCAyMzUsIDI1NSk7XG59XG5cbi5zZXJ2aWNlLWlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuLmNtQmFye1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CloudmanagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-cloudmanagement',
                templateUrl: './cloudmanagement.component.html',
                styleUrls: ['./cloudmanagement.component.css']
            }]
    }], function () { return [{ type: _filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] }, { type: _gd_cloud_service__WEBPACK_IMPORTED_MODULE_3__["GdCloudService"] }, { type: _dp_cloud_service__WEBPACK_IMPORTED_MODULE_4__["DpCloudService"] }, { type: _gdClientCredentials__WEBPACK_IMPORTED_MODULE_5__["GDClientCredentials"] }, { type: _bx_cloud_service__WEBPACK_IMPORTED_MODULE_6__["BxCloudService"] }, { type: _od_cloud_service__WEBPACK_IMPORTED_MODULE_7__["OdCloudService"] }, { type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dp-cloud.service.ts":
/*!*************************************!*\
  !*** ./src/app/dp-cloud.service.ts ***!
  \*************************************/
/*! exports provided: DpCloudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpCloudService", function() { return DpCloudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dropbox */ "./node_modules/dropbox/dist/Dropbox-sdk.min.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handelers.service */ "./src/app/error-handelers.service.ts");





class DpCloudService {
    constructor(errorService) {
        this.errorService = errorService;
    }
    dropBoxClLogin() {
        const dpUrl = "https://www.dropbox.com/oauth2/authorize?client_id=4kbv0so8hjs83lf&response_type=code&scope=account_info.read files.metadata.read files.content.write files.content.read&redirect_uri=https://stormy-headland-33273.herokuapp.com/cloudmanagement";
        let link = document.createElement('a');
        link.href = dpUrl;
        link.click();
    }
    getCodefromUri() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                const uriLink = location.href;
                const newUri = new URL(uriLink);
                const findParam = newUri.searchParams.get('code');
                try {
                    if (findParam !== undefined || findParam !== null || findParam !== "") {
                        return resolve(findParam);
                    }
                }
                catch (error) {
                    this.errorService.handleError(error);
                    reject(error);
                }
            });
        });
    }
    sendMessageToNode(sendCodeData) {
        try {
            if (sendCodeData !== undefined || sendCodeData !== null || sendCodeData !== "") {
                return new Promise((resolve, reject) => {
                    let myHeaders = new Headers();
                    myHeaders.append('Content-Type', 'application/json');
                    let raw = JSON.stringify({
                        title: 'codefromAngular',
                        saveCode: sendCodeData,
                    });
                    let requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                    };
                    fetch('/api/showData', requestOptions)
                        .then((response) => {
                        return response.json();
                    })
                        .then((result) => {
                        this.accesToken = result[Object.keys(result)[0]];
                        resolve(this.accesToken);
                    })
                        .catch((error) => {
                        this.errorService.handleError(error);
                        return reject(error);
                    });
                });
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    dpGetClientInfo(dpAccessToken) {
        try {
            if (dpAccessToken !== undefined || dpAccessToken !== null || dpAccessToken !== "") {
                let dbx = new dropbox__WEBPACK_IMPORTED_MODULE_2__["Dropbox"]({
                    accessToken: dpAccessToken
                });
                console.log(JSON.stringify(dbx));
                dbx
                    .usersGetCurrentAccount()
                    .then(response => {
                    console.log(JSON.stringify("First then" + response.result.email));
                    sessionStorage.setItem('dpEmail', response.result.email);
                    let getDpName = response.result.name.display_name;
                    let getDpEmail = response.result.email;
                    //userMnId is null
                    let getUserMongoId = sessionStorage.getItem('userMnId');
                    console.log("getUserMongoId is " + getUserMongoId);
                    //connect to dpCloud mongodb
                    sendDpClientInfo(getDpName, getDpEmail, getUserMongoId);
                    return (getDpEmail);
                })
                    .catch((err) => this.errorService.handleError(err));
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    dpGetFilesList(dpAccessToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (dpAccessToken !== undefined || dpAccessToken !== null || dpAccessToken !== "") {
                    return yield new Promise((resolve, reject) => {
                        let holdelement = [];
                        let dbx = new dropbox__WEBPACK_IMPORTED_MODULE_2__["Dropbox"]({
                            accessToken: dpAccessToken
                        });
                        console.log(JSON.stringify(dbx));
                        dbx
                            .filesListFolder({
                            path: '',
                            recursive: true
                        })
                            .then(response => {
                            let hpldDpFiles = response.result.entries;
                            console.log("hpldDpFiles " + JSON.stringify(hpldDpFiles[0].path_lower));
                            for (let index = 0; index < hpldDpFiles.length; index++) {
                                let holdObj = {};
                                holdObj["dpClName"] = hpldDpFiles[index].name;
                                holdObj["dpClPath"] = hpldDpFiles[index].path_display;
                                holdelement[index] = holdObj;
                            }
                            return resolve(holdelement);
                        })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    dPDownloadFromNode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                fetch('/api/DPDownload', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then((response) => {
                    console.log(response);
                    return resolve(response);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    dPDownloadLocalFromNode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                fetch('/api/DPDownloadLocal', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then((response) => {
                    console.log(response);
                    return resolve(response);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    dPUploadFromNode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                fetch('/api/DPUpload', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then((response) => {
                    alert("File is submitted to your Dropbox");
                    console.log(response);
                    return resolve(response);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    dPUploadLocalFromNode(fileName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (fileName !== undefined || fileName !== null || fileName !== "") {
                    return yield new Promise((resolve, reject) => {
                        fetch('/api/DPUploadLocal', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                            },
                            body: JSON.stringify({
                                fileName: fileName
                            })
                        })
                            .then((response) => {
                            alert("File is submitted to your Dropbox");
                            console.log(response);
                            return resolve(response);
                        })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    dpPathFiles(dpPathGiven) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (dpPathGiven !== undefined || dpPathGiven !== null || dpPathGiven !== "") {
                    console.log("dpPathFile is called" + dpPathGiven);
                    return yield new Promise((resolve, reject) => {
                        let myHeaders = new Headers();
                        myHeaders.append('Accept', '/');
                        myHeaders.append('Origin', 'x-requested-with');
                        myHeaders.append('Content-Type', 'application/json');
                        let raw = JSON.stringify({
                            title: 'dpPathfromAngular',
                            dpGetFPath: dpPathGiven,
                        });
                        let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw
                        };
                        fetch('/api/DpPath', requestOptions)
                            .then((response) => {
                            return response.text();
                        })
                            .then(response => { return resolve(response); })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
}
DpCloudService.ɵfac = function DpCloudService_Factory(t) { return new (t || DpCloudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandelersService"])); };
DpCloudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DpCloudService, factory: DpCloudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DpCloudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandelersService"] }]; }, null); })();
function sendDpClientInfo(getDbName, getDbEmail, getUserMongoId) {
    console.log("sendDpClientInfo called ");
    try {
        if (getDbName !== undefined || getDbName !== null || getDbName !== ""
            || getDbEmail !== undefined || getDbEmail !== null || getDbEmail !== ""
            || getUserMongoId !== undefined || getUserMongoId !== null || getUserMongoId !== "") {
            let dbClientValue = JSON.stringify({
                dbname: getDbName,
                dbemail: getDbEmail,
                usermongoid: getUserMongoId,
            });
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            return fetch('/api/MCDbClient', {
                method: 'POST',
                headers: myHeaders,
                body: dbClientValue
            })
                .then(response => { return response.json(); })
                .then(data => console.log(data))
                .catch(err => this.errorService.handleError(err));
        }
    }
    catch (error) {
        this.errorService.handleError(error);
    }
}


/***/ }),

/***/ "./src/app/error-handelers.service.ts":
/*!********************************************!*\
  !*** ./src/app/error-handelers.service.ts ***!
  \********************************************/
/*! exports provided: ErrorHandelersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandelersService", function() { return ErrorHandelersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ErrorHandelersService extends _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] {
    constructor() {
        super();
    }
    handleError(error) {
        if (error.message !== undefined) {
            console.log(`Error Received ${error.message}`);
            try {
                throw new ReferenceError();
            }
            catch (e) {
                switch (e.constructor) {
                    case Error: return console.log('generic error');
                    case RangeError: return console.log('range error');
                    case TypeError: return console.log('type error');
                    case SyntaxError: return console.log('syntax error');
                    case URIError: return console.log('uri error');
                    case EvalError: return console.log('eval error');
                    default: return console.log('unknown error');
                }
            }
        }
        else {
            console.log("There is an error");
        }
    }
    costumeCatchError(error) {
        throw new Error(`Error Received ${error}`);
    }
}
ErrorHandelersService.ɵfac = function ErrorHandelersService_Factory(t) { return new (t || ErrorHandelersService)(); };
ErrorHandelersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandelersService, factory: ErrorHandelersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandelersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/filetransfer/filetransfer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/filetransfer/filetransfer.component.ts ***!
  \********************************************************/
/*! exports provided: FiletransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiletransferComponent", function() { return FiletransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _filetransfer_filterByFileType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filetransfer/filterByFileType.js */ "./src/app/filetransfer/filterByFileType.js");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter.service */ "./src/app/filter.service.ts");
/* harmony import */ var _gd_cloud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gd-cloud.service */ "./src/app/gd-cloud.service.ts");
/* harmony import */ var _dp_cloud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dp-cloud.service */ "./src/app/dp-cloud.service.ts");
/* harmony import */ var _gdClientCredentials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gdClientCredentials */ "./src/app/gdClientCredentials.ts");
/* harmony import */ var _bx_cloud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bx-cloud.service */ "./src/app/bx-cloud.service.ts");
/* harmony import */ var _od_cloud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../od-cloud.service */ "./src/app/od-cloud.service.ts");
/* harmony import */ var _local_files_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../local-files.service */ "./src/app/local-files.service.ts");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../error-handelers.service */ "./src/app/error-handelers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function FiletransferComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.serviceIcons[5], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function FiletransferComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r11.leftServiceForm = true; return ctx_r11.apiMatch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Api to Drag");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FiletransferComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r13.files1 = []; ctx_r13.leftServiceForm = false; ctx_r13.service1 = 0; return ctx_r13.dpProcessFiles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r15.files1 = []; ctx_r15.leftServiceForm = false; ctx_r15.service1 = 1; return ctx_r15.gdProcessFiles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_9_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r16.files1 = []; ctx_r16.leftServiceForm = false; ctx_r16.service1 = 2; return ctx_r16.odProcessFiles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_9_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r17.files1 = []; ctx_r17.leftServiceForm = false; ctx_r17.service1 = 3; return ctx_r17.bxProcessFiles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_9_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r18.files1 = []; ctx_r18.leftServiceForm = false; ctx_r18.service1 = 4; return ctx_r18.lfProcessFiles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.serviceIcons[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.dpApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceNames[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceAccounts[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.serviceIcons[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.gdApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceNames[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceAccounts[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.serviceIcons[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.odApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceNames[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceAccounts[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.serviceIcons[3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.bxApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceNames[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceAccounts[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.serviceIcons[4], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.flApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceNames[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serviceAccounts[4]);
} }
function FiletransferComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fil_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fil_r20);
} }
function FiletransferComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FiletransferComponent_div_21_div_1_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.files1);
} }
function FiletransferComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fol_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fol_r22);
} }
function FiletransferComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FiletransferComponent_div_22_div_1_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.folders);
} }
function FiletransferComponent_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r6.serviceIcons[6], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function FiletransferComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.rightServiceForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Api to Drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FiletransferComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_26_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r25.files2 = []; ctx_r25.rightServiceForm = false; return ctx_r25.service2 = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_26_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r27.files2 = []; ctx_r27.rightServiceForm = false; return ctx_r27.service2 = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_26_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r28.files2 = []; ctx_r28.rightServiceForm = false; return ctx_r28.service2 = 2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_26_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r29.files2 = []; ctx_r29.rightServiceForm = false; return ctx_r29.service2 = 3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiletransferComponent_div_26_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r30.files2 = []; ctx_r30.rightServiceForm = false; return ctx_r30.service2 = 4; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.serviceIcons[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r8.dpApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceNames[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceAccounts[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.serviceIcons[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r8.gdApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceNames[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceAccounts[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.serviceIcons[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r8.odApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceNames[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceAccounts[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.serviceIcons[3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r8.bxApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceNames[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceAccounts[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.serviceIcons[4], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r8.flApiSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceNames[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.serviceAccounts[4]);
} }
function FiletransferComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fil_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fil_r31);
} }
const _c0 = function (a0) { return [a0]; };
let retreiveDpFiles = {};
let holdClientFilesToDisplay = {};
let holdBoxAllFlsFl = {};
let boxFiles = [];
let holdBoxSelectedFile = [];
let holdOdSelectedFile = [];
let odFile = [];
class FiletransferComponent {
    constructor(filterService, gdService, dpService, gdcl, bxService, odService, lfService, errorService) {
        this.filterService = filterService;
        this.gdService = gdService;
        this.dpService = dpService;
        this.gdcl = gdcl;
        this.bxService = bxService;
        this.odService = odService;
        this.lfService = lfService;
        this.errorService = errorService;
        this.gdEmail = this.readsessionStorageValue('gdUserEmail');
        this.storedApi = JSON.parse(sessionStorage.getItem("apiSelected"));
        this.apiFound = false;
        this.leftServiceForm = false;
        this.rightServiceForm = false;
        this.gdApiSelected = false;
        this.dpApiSelected = false;
        this.odApiSelected = false;
        this.bxApiSelected = false;
        this.flApiSelected = false;
        this.serviceIcons = [
            "assets/images/dropbox.png",
            "assets/images/googledrive.png",
            "assets/images/onedrive.png",
            "assets/images/box.png",
            "assets/images/folder.png",
            "assets/images/selectFile.jpg",
            "assets/images/fileDrop.png"
        ];
        this.serviceNames = [
            'Dropbox',
            'GoogleDrive',
            'OneDrive',
            'Box',
            'LocalFiles'
        ];
        this.serviceAccounts = [
            sessionStorage.getItem('dpEmail'),
            sessionStorage.getItem('gdUserEmail'),
            sessionStorage.getItem('odClientEmail'), ,
            sessionStorage.getItem('boxClientEmail'),
            sessionStorage.getItem('localFilePath')
        ];
        this.service1 = 0;
        this.service2 = 1;
        this.folders = [];
        this.files1 = [];
        this.files1Data = [];
        this.files2 = [];
        this.files2Data = [];
        this.filters = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if ("apiFileFilter" in sessionStorage) {
                    console.log("inside OnInt filetransfer");
                    this.getFilters();
                }
                this.serviceAccounts[0] = sessionStorage.getItem('dpEmail');
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    findMatch(firstArray, itemToFound) {
        try {
            if (firstArray.length !== 0 || firstArray !== undefined
                || itemToFound !== undefined || itemToFound !== null || itemToFound !== "") {
                const ARRAYLENGTH = firstArray.length;
                for (let index = 0; index < ARRAYLENGTH; index++) {
                    if (firstArray.includes(itemToFound)) {
                        if (itemToFound === "Dropbox") {
                            this.dpApiSelected = true;
                        }
                        if (itemToFound === "GoogleDrive") {
                            this.gdApiSelected = true;
                        }
                        if (itemToFound === "OneDrive") {
                            this.odApiSelected = true;
                        }
                        if (itemToFound === "Box") {
                            this.bxApiSelected = true;
                        }
                        if (itemToFound === "LocalFiles") {
                            this.flApiSelected = true;
                        }
                    }
                }
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    apiMatch() {
        try {
            if (this.storedApi !== undefined || this.storedApi !== null
                || this.storedApi !== "") {
                let holdApiSelected = [];
                holdApiSelected = this.storedApi;
                for (let index = 0; index < this.serviceNames.length; index++) {
                    console.log("inside storeApi if " + holdApiSelected);
                    this.findMatch(holdApiSelected, this.serviceNames[index]);
                }
                this.removesessionStorageValue("apiSelected");
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    readsessionStorageValue(key) {
        try {
            if (key !== undefined || key !== null || key !== "") {
                return sessionStorage.getItem(key);
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    removesessionStorageValue(str) {
        try {
            if (str !== undefined || str !== null || str !== "") {
                sessionStorage.removeItem(str);
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    filterList(fil, srv) {
        try {
            if (fil.length !== 0 || fil !== undefined
                || srv !== undefined || srv !== null) {
                let fList = "";
                let cnt = 0;
                fil.forEach((value, index) => {
                    if (value.includes(this.serviceNames[srv])) {
                        if (cnt != 0) {
                            fList += ", " + value.substr(0, value.indexOf(" "));
                        }
                        else
                            fList += value.substr(0, value.indexOf(" "));
                        cnt++;
                    }
                });
                return fList;
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    addLocalFiles(fileName, fileData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (fileName !== undefined || fileName !== null || fileName !== ""
                    || fileData !== undefined || fileData !== null) {
                    let filePath = this.serviceAccounts[4];
                    const files = yield fetch('/api/AddFiles', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                        body: JSON.stringify({
                            filePath: filePath,
                            fileName: fileName,
                            fileData: fileData
                        })
                    })
                        .then(response => response.json())
                        .catch(err => this.errorService.handleError(err));
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    deleteLocalFiles(fileName, fileData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (fileName !== undefined || fileName !== null || fileName !== ""
                    || fileData !== undefined || fileData !== null) {
                    let filePath = this.serviceAccounts[4];
                    const files = yield fetch('/api/DeleteFiles', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                        body: JSON.stringify({
                            filePath: filePath,
                            fileName: fileName,
                            fileData: fileData
                        })
                    })
                        .then(response => response.json())
                        .catch(err => this.errorService.handleError(err));
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    moveLocalFile(fileName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (fileName !== undefined || fileName !== null || fileName !== "") {
                    let filePath = this.serviceAccounts[4];
                    const files = yield fetch('/api/MoveFile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                        body: JSON.stringify({
                            filePath: filePath,
                            fileName: fileName
                        })
                    })
                        .then(response => response.json())
                        .catch(err => this.errorService.handleError(err));
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    getFilters() {
        try {
            if ("apiFileFilter" in sessionStorage) {
                let getFilterArray = [];
                let getFilterStr = sessionStorage.getItem("apiFileFilter");
                if (getFilterStr !== "" || getFilterStr !== null) {
                    if (getFilterStr.includes(',')) {
                        getFilterArray = getFilterStr.split(',');
                    }
                    else {
                        getFilterArray.push(getFilterStr);
                    }
                    console.log("getFilterArray " + getFilterArray);
                    this.filters = getFilterArray;
                }
                else {
                    this.filters = [];
                }
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    drop(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (event.previousContainer === event.container) {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
                }
                else {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                    let itemName = event.container.data[event.currentIndex];
                    if (event.previousContainer.id === "left") {
                        if (this.service1 === 4) {
                            //this.moveLocalFile(this.serviceAccounts[4] + '/' + this.files2[0]);
                        }
                    }
                    if (event.container.id === 'left') {
                        if (this.service1 === 0 && this.service2 === 1) {
                            this.apiFound = true;
                            let storePath = (this.files2[0]).toString();
                            console.log("this.files2 " + this.files2);
                            let holdLowerpath = [];
                            let keys = Object.keys(retreiveDpFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (retreiveDpFiles[i].dpClName === storePath.toString()) {
                                    holdLowerpath.push(retreiveDpFiles[i].dpClPath);
                                }
                            }
                            console.log("inside the looptwo");
                            yield this.dpService.dpPathFiles(holdLowerpath[0]);
                            console.log("inside the loop");
                            yield this.dpService.dPDownloadFromNode();
                            yield this.gdService.gDUploadFromNode();
                            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.gdService.gDUpdateFileName(); }), 5000);
                        }
                        if (this.service1 === 0 && this.service2 === 2) {
                            this.apiFound = true;
                            let storePath = (this.files2[0]).toString();
                            console.log("this.files2 " + this.files2);
                            let holdLowerpath = [];
                            let keys = Object.keys(retreiveDpFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (retreiveDpFiles[i].dpClName === storePath.toString()) {
                                    holdLowerpath.push(retreiveDpFiles[i].dpClPath);
                                }
                            }
                            console.log("inside the looptwo");
                            yield this.dpService.dpPathFiles(holdLowerpath[0]);
                            console.log("inside the loop");
                            yield this.dpService.dPDownloadFromNode();
                            yield this.odService.odUploadFile(storePath);
                        }
                        if (this.service1 === 0 && this.service2 === 3) {
                            this.apiFound = true;
                            let storePath = (this.files2[0]).toString();
                            console.log("this.files2 " + this.files2);
                            let holdLowerpath = [];
                            let keys = Object.keys(retreiveDpFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (retreiveDpFiles[i].dpClName === storePath.toString()) {
                                    holdLowerpath.push(retreiveDpFiles[i].dpClPath);
                                }
                            }
                            console.log("inside the looptwo");
                            yield this.dpService.dpPathFiles(holdLowerpath[0]);
                            console.log("inside the loop");
                            yield this.dpService.dPDownloadFromNode();
                            yield this.bxService.boxUpload(storePath);
                        }
                        if (this.service1 === 0 && this.service2 === 4) {
                            this.apiFound = true;
                            let storePath = (this.files2[0]).toString();
                            console.log("this.files2 " + this.files2);
                            let holdLowerpath = [];
                            let keys = Object.keys(retreiveDpFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (retreiveDpFiles[i].dpClName === storePath.toString()) {
                                    holdLowerpath.push(retreiveDpFiles[i].dpClPath);
                                }
                            }
                            console.log("inside the looptwo");
                            yield this.dpService.dpPathFiles(holdLowerpath[0]);
                            console.log("inside the loop");
                            yield this.dpService.dPDownloadFromNode();
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfDownlodToLocalPath();
                        }
                        if (this.service1 === 1 && this.service2 === 0) {
                            this.apiFound = true;
                            console.log("this.files2[0] " + this.files2[0]);
                            let gdStoreName = (this.files2[0]).toString();
                            let holdGdIdFiles = [];
                            let keys = Object.keys(holdClientFilesToDisplay);
                            for (let index = 0; index < keys.length; index++) {
                                if (holdClientFilesToDisplay[index].gdClName === gdStoreName.toString()) {
                                    console.log("inside the loop");
                                    holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId);
                                }
                            }
                            yield this.gdService.getGdId(holdGdIdFiles[0], gdStoreName);
                            let gdDownloadResult = yield this.gdService.gDDownloadFromNode();
                            yield this.dpService.dPUploadFromNode();
                        }
                        if (this.service1 === 1 && this.service2 === 2) {
                            this.apiFound = true;
                            console.log("this.files2[0] " + this.files2[0]);
                            let gdStoreName = (this.files2[0]).toString();
                            let holdGdIdFiles = [];
                            let keys = Object.keys(holdClientFilesToDisplay);
                            for (let index = 0; index < keys.length; index++) {
                                if (holdClientFilesToDisplay[index].gdClName === gdStoreName.toString()) {
                                    console.log("inside the loop");
                                    holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId);
                                }
                            }
                            yield this.gdService.getGdId(holdGdIdFiles[0], gdStoreName);
                            let gdDownloadResult = yield this.gdService.gDDownloadFromNode();
                            console.log("gdDownloadResult " + gdDownloadResult);
                            yield this.odService.odUploadFile(gdStoreName);
                        }
                        if (this.service1 === 1 && this.service2 === 3) {
                            this.apiFound = true;
                            console.log("this.files2[0] " + this.files2[0]);
                            let gdStoreName = (this.files2[0]).toString();
                            let holdGdIdFiles = [];
                            let keys = Object.keys(holdClientFilesToDisplay);
                            for (let index = 0; index < keys.length; index++) {
                                if (holdClientFilesToDisplay[index].gdClName === gdStoreName.toString()) {
                                    console.log("inside the loop");
                                    holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId);
                                }
                            }
                            yield this.gdService.getGdId(holdGdIdFiles[0], gdStoreName);
                            let gdDownloadResult = yield this.gdService.gDDownloadFromNode();
                            console.log("gdDownloadResult " + gdDownloadResult);
                            yield this.bxService.boxUpload(gdStoreName);
                        }
                        if (this.service1 === 1 && this.service2 === 4) {
                            this.apiFound = true;
                            console.log("this.files2[0] " + this.files2[0]);
                            let gdStoreName = (this.files2[0]).toString();
                            let holdGdIdFiles = [];
                            let keys = Object.keys(holdClientFilesToDisplay);
                            for (let index = 0; index < keys.length; index++) {
                                if (holdClientFilesToDisplay[index].gdClName === gdStoreName.toString()) {
                                    console.log("inside the loop");
                                    holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId);
                                }
                            }
                            yield this.gdService.getGdId(holdGdIdFiles[0], gdStoreName);
                            let gdDownloadResult = yield this.gdService.gDDownloadFromNode();
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfDownlodToLocalPath();
                        }
                        if (this.service1 === 2 && this.service2 === 0) {
                            this.apiFound = true;
                            let holdOdFile = this.files2[0];
                            console.log("holdodFile " + holdOdFile);
                            let keys = Object.keys(odFile);
                            for (let i = 0; i < keys.length; i++) {
                                if (odFile[i].odFileName === holdOdFile.toString()) {
                                    holdOdSelectedFile.push(odFile[i].odFileUrl, odFile[i].odFileName);
                                }
                            }
                            console.log("holdOdSelectedFile " + holdOdSelectedFile);
                            yield this.odService.odDownloadFile(holdOdSelectedFile[0], holdOdSelectedFile[1]);
                            yield this.dpService.dPUploadFromNode();
                        }
                        if (this.service1 === 2 && this.service2 === 1) {
                            this.apiFound = true;
                            let holdOdFile = this.files2[0];
                            console.log("holdodFile " + holdOdFile);
                            let keys = Object.keys(odFile);
                            for (let i = 0; i < keys.length; i++) {
                                if (odFile[i].odFileName === holdOdFile.toString()) {
                                    holdOdSelectedFile.push(odFile[i].odFileUrl, odFile[i].odFileName);
                                }
                            }
                            console.log("holdOdSelectedFile " + holdOdSelectedFile);
                            yield this.odService.odDownloadFile(holdOdSelectedFile[0], holdOdSelectedFile[1]);
                            yield this.gdService.gDUploadFromNode();
                            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.gdService.gDUpdateFileName(); }), 5000);
                        }
                        if (this.service1 === 2 && this.service2 === 3) {
                            this.apiFound = true;
                            let holdOdFile = this.files2[0];
                            console.log("holdodFile " + holdOdFile);
                            let keys = Object.keys(odFile);
                            for (let i = 0; i < keys.length; i++) {
                                if (odFile[i].odFileName === holdOdFile.toString()) {
                                    holdOdSelectedFile.push(odFile[i].odFileUrl, odFile[i].odFileName);
                                }
                            }
                            console.log("holdOdSelectedFile " + holdOdSelectedFile);
                            yield this.odService.odDownloadFile(holdOdSelectedFile[0], holdOdSelectedFile[1]);
                            yield this.bxService.boxUpload(holdOdFile);
                        }
                        if (this.service1 === 2 && this.service2 === 4) {
                            this.apiFound = true;
                            let holdOdFile = this.files2[0];
                            console.log("holdodFile " + holdOdFile);
                            let keys = Object.keys(odFile);
                            for (let i = 0; i < keys.length; i++) {
                                if (odFile[i].odFileName === holdOdFile.toString()) {
                                    holdOdSelectedFile.push(odFile[i].odFileUrl, odFile[i].odFileName);
                                }
                            }
                            console.log("holdOdSelectedFile " + holdOdSelectedFile);
                            yield this.odService.odDownloadFile(holdOdSelectedFile[0], holdOdSelectedFile[1]);
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfDownlodToLocalPath();
                        }
                        if (this.service1 === 3 && this.service2 === 0) {
                            this.apiFound = true;
                            let holdBoxFile = this.files2[0];
                            console.log("holdBoxFile " + holdBoxFile);
                            let keys = Object.keys(boxFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (boxFiles[i].bxFileName === holdBoxFile.toString()) {
                                    holdBoxSelectedFile.push(boxFiles[i].bxFileId, boxFiles[i].bxFileName);
                                }
                            }
                            console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
                            yield this.bxService.boxDownload(holdBoxSelectedFile[0], holdBoxSelectedFile[1]);
                            yield this.dpService.dPUploadFromNode();
                        }
                        if (this.service1 === 3 && this.service2 === 1) {
                            this.apiFound = true;
                            let holdBoxFile = this.files2[0];
                            console.log("holdBoxFile " + holdBoxFile);
                            let keys = Object.keys(boxFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (boxFiles[i].bxFileName === holdBoxFile.toString()) {
                                    holdBoxSelectedFile.push(boxFiles[i].bxFileId, boxFiles[i].bxFileName);
                                }
                            }
                            console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
                            yield this.bxService.boxDownload(holdBoxSelectedFile[0], holdBoxSelectedFile[1]);
                            yield this.gdService.gDUploadFromNode();
                            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.gdService.gDUpdateFileName(); }), 5000);
                        }
                        if (this.service1 === 3 && this.service2 === 2) {
                            this.apiFound = true;
                            let holdBoxFile = this.files2[0];
                            console.log("holdBoxFile " + holdBoxFile);
                            let keys = Object.keys(boxFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (boxFiles[i].bxFileName === holdBoxFile.toString()) {
                                    holdBoxSelectedFile.push(boxFiles[i].bxFileId, boxFiles[i].bxFileName);
                                }
                            }
                            console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
                            yield this.bxService.boxDownload(holdBoxSelectedFile[0], holdBoxSelectedFile[1]);
                            yield this.odService.odUploadFile(holdBoxFile);
                        }
                        if (this.service1 === 3 && this.service2 === 4) {
                            this.apiFound = true;
                            let holdBoxFile = this.files2[0];
                            console.log("holdBoxFile " + holdBoxFile);
                            let keys = Object.keys(boxFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (boxFiles[i].bxFileName === holdBoxFile.toString()) {
                                    holdBoxSelectedFile.push(boxFiles[i].bxFileId, boxFiles[i].bxFileName);
                                }
                            }
                            console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
                            yield this.bxService.boxDownload(holdBoxSelectedFile[0], holdBoxSelectedFile[1]);
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfDownlodToLocalPath();
                        }
                        if (this.service1 === 4 && this.service2 === 0) {
                            this.apiFound = true;
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfFromLocalPathToServer(this.files2[0]);
                            yield this.dpService.dPUploadLocalFromNode(this.files2[0]);
                        }
                        if (this.service1 === 4 && this.service2 === 1) {
                            this.apiFound = true;
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfFromLocalPathToServer(this.files2[0]);
                            yield this.gdService.gDUploadLocal(this.files2[0]);
                            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.gdService.gDUpdateLocalFileName(); }), 5000);
                        }
                        if (this.service1 === 4 && this.service2 === 2) {
                            this.apiFound = true;
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfFromLocalPathToServer(this.files2[0]);
                            yield this.odService.odUploadLocalFile(this.files2[0]);
                        }
                        if (this.service1 === 4 && this.service2 === 3) {
                            this.apiFound = true;
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfFromLocalPathToServer(this.files2[0]);
                            yield this.bxService.boxLocalUpload(this.files2[0]);
                        }
                        if (this.apiFound == false) {
                            alert("Please choose a right api to drop & transfer your file");
                        }
                    }
                    if (event.previousContainer.id === "right") {
                    }
                    if (event.container.id === 'right') {
                        if (this.service1 === 0 && this.service2 === 1) {
                            this.apiFound = true;
                            let storePath = (this.files2[0]).toString();
                            console.log("this.files2 " + this.files2);
                            let holdLowerpath = [];
                            let keys = Object.keys(retreiveDpFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (retreiveDpFiles[i].dpClName === storePath.toString()) {
                                    holdLowerpath.push(retreiveDpFiles[i].dpClPath);
                                }
                            }
                            console.log("inside the looptwo");
                            yield this.dpService.dpPathFiles(holdLowerpath[0]);
                            console.log("inside the loop");
                            yield this.dpService.dPDownloadFromNode();
                            yield this.gdService.gDUploadFromNode();
                            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.gdService.gDUpdateFileName(); }), 5000);
                        }
                        if (this.service1 === 0 && this.service2 === 2) {
                            this.apiFound = true;
                            let storePath = (this.files2[0]).toString();
                            console.log("this.files2 " + this.files2);
                            let holdLowerpath = [];
                            let keys = Object.keys(retreiveDpFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (retreiveDpFiles[i].dpClName === storePath.toString()) {
                                    holdLowerpath.push(retreiveDpFiles[i].dpClPath);
                                }
                            }
                            console.log("inside the looptwo");
                            yield this.dpService.dpPathFiles(holdLowerpath[0]);
                            console.log("inside the loop");
                            yield this.dpService.dPDownloadFromNode();
                            yield this.odService.odUploadFile(storePath);
                        }
                        if (this.service1 === 0 && this.service2 === 3) {
                            this.apiFound = true;
                            let storePath = (this.files2[0]).toString();
                            console.log("this.files2 " + this.files2);
                            let holdLowerpath = [];
                            let keys = Object.keys(retreiveDpFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (retreiveDpFiles[i].dpClName === storePath.toString()) {
                                    holdLowerpath.push(retreiveDpFiles[i].dpClPath);
                                }
                            }
                            console.log("inside the looptwo");
                            yield this.dpService.dpPathFiles(holdLowerpath[0]);
                            console.log("inside the loop");
                            yield this.dpService.dPDownloadFromNode();
                            yield this.bxService.boxUpload(storePath);
                        }
                        // if left is dropbox and right is local
                        if (this.service1 === 0 && this.service2 === 4) {
                            this.apiFound = true;
                            let storePath = (this.files2[0]).toString();
                            console.log("this.files2 " + this.files2);
                            let holdLowerpath = [];
                            let keys = Object.keys(retreiveDpFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (retreiveDpFiles[i].dpClName === storePath.toString()) {
                                    holdLowerpath.push(retreiveDpFiles[i].dpClPath);
                                }
                            }
                            console.log("inside the looptwo");
                            yield this.dpService.dpPathFiles(holdLowerpath[0]);
                            console.log("inside the loop");
                            yield this.dpService.dPDownloadFromNode();
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfDownlodToLocalPath();
                        }
                        if (this.service1 === 1 && this.service2 === 0) {
                            this.apiFound = true;
                            console.log("this.files2[0] " + this.files2[0]);
                            let gdStoreName = (this.files2[0]).toString();
                            let holdGdIdFiles = [];
                            let keys = Object.keys(holdClientFilesToDisplay);
                            for (let index = 0; index < keys.length; index++) {
                                if (holdClientFilesToDisplay[index].gdClName === gdStoreName.toString()) {
                                    console.log("inside the loop");
                                    holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId);
                                }
                            }
                            yield this.gdService.getGdId(holdGdIdFiles[0], gdStoreName);
                            let gdDownloadResult = yield this.gdService.gDDownloadFromNode();
                            console.log("gdDownloadResult " + gdDownloadResult);
                            yield this.dpService.dPUploadFromNode();
                        }
                        if (this.service1 === 1 && this.service2 === 2) {
                            this.apiFound = true;
                            console.log("this.files2[0] " + this.files2[0]);
                            let gdStoreName = (this.files2[0]).toString();
                            let holdGdIdFiles = [];
                            let keys = Object.keys(holdClientFilesToDisplay);
                            for (let index = 0; index < keys.length; index++) {
                                if (holdClientFilesToDisplay[index].gdClName === gdStoreName.toString()) {
                                    console.log("inside the loop");
                                    holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId);
                                }
                            }
                            yield this.gdService.getGdId(holdGdIdFiles[0], gdStoreName);
                            let gdDownloadResult = yield this.gdService.gDDownloadFromNode();
                            console.log("gdDownloadResult " + gdDownloadResult);
                            yield this.odService.odUploadFile(gdStoreName);
                        }
                        if (this.service1 === 1 && this.service2 === 3) {
                            this.apiFound = true;
                            console.log("this.files2[0] " + this.files2[0]);
                            let gdStoreName = (this.files2[0]).toString();
                            let holdGdIdFiles = [];
                            let keys = Object.keys(holdClientFilesToDisplay);
                            for (let index = 0; index < keys.length; index++) {
                                if (holdClientFilesToDisplay[index].gdClName === gdStoreName.toString()) {
                                    console.log("inside the loop");
                                    holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId);
                                }
                            }
                            yield this.gdService.getGdId(holdGdIdFiles[0], gdStoreName);
                            let gdDownloadResult = yield this.gdService.gDDownloadFromNode();
                            console.log("gdDownloadResult " + gdDownloadResult);
                            yield this.bxService.boxUpload(gdStoreName);
                        }
                        if (this.service1 === 1 && this.service2 === 4) {
                            this.apiFound = true;
                            console.log("this.files2[0] " + this.files2[0]);
                            let gdStoreName = (this.files2[0]).toString();
                            let holdGdIdFiles = [];
                            let keys = Object.keys(holdClientFilesToDisplay);
                            for (let index = 0; index < keys.length; index++) {
                                if (holdClientFilesToDisplay[index].gdClName === gdStoreName.toString()) {
                                    console.log("inside the loop");
                                    holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId);
                                }
                            }
                            yield this.gdService.getGdId(holdGdIdFiles[0], gdStoreName);
                            let gdDownloadResult = yield this.gdService.gDDownloadLocalFromNode();
                            console.log("gdDownloadResult " + gdDownloadResult);
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfDownlodToLocalPath();
                        }
                        if (this.service1 === 2 && this.service2 === 0) {
                            this.apiFound = true;
                            let holdOdFile = this.files2[0];
                            console.log("holdodFile " + holdOdFile);
                            let keys = Object.keys(odFile);
                            for (let i = 0; i < keys.length; i++) {
                                if (odFile[i].odFileName === holdOdFile.toString()) {
                                    holdOdSelectedFile.push(odFile[i].odFileUrl, odFile[i].odFileName);
                                }
                            }
                            console.log("holdOdSelectedFile " + holdOdSelectedFile);
                            yield this.odService.odDownloadFile(holdOdSelectedFile[0], holdOdSelectedFile[1]);
                            yield this.dpService.dPUploadFromNode();
                        }
                        if (this.service1 === 2 && this.service2 === 1) {
                            this.apiFound = true;
                            let holdOdFile = this.files2[0];
                            console.log("holdodFile " + holdOdFile);
                            let keys = Object.keys(odFile);
                            for (let i = 0; i < keys.length; i++) {
                                if (odFile[i].odFileName === holdOdFile.toString()) {
                                    holdOdSelectedFile.push(odFile[i].odFileUrl, odFile[i].odFileName);
                                }
                            }
                            console.log("holdOdSelectedFile " + holdOdSelectedFile);
                            yield this.odService.odDownloadFile(holdOdSelectedFile[0], holdOdSelectedFile[1]);
                            yield this.gdService.gDUploadFromNode();
                            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.gdService.gDUpdateFileName(); }), 5000);
                        }
                        if (this.service1 === 2 && this.service2 === 3) {
                            this.apiFound = true;
                            let holdOdFile = this.files2[0];
                            console.log("holdodFile " + holdOdFile);
                            let keys = Object.keys(odFile);
                            for (let i = 0; i < keys.length; i++) {
                                if (odFile[i].odFileName === holdOdFile.toString()) {
                                    holdOdSelectedFile.push(odFile[i].odFileUrl, odFile[i].odFileName);
                                }
                            }
                            console.log("holdOdSelectedFile " + holdOdSelectedFile);
                            yield this.odService.odDownloadFile(holdOdSelectedFile[0], holdOdSelectedFile[1]);
                            yield this.bxService.boxUpload(holdOdFile);
                        }
                        if (this.service1 === 2 && this.service2 === 4) {
                            this.apiFound = true;
                            let holdOdFile = this.files2[0];
                            console.log("holdodFile " + holdOdFile);
                            let keys = Object.keys(odFile);
                            for (let i = 0; i < keys.length; i++) {
                                if (odFile[i].odFileName === holdOdFile.toString()) {
                                    holdOdSelectedFile.push(odFile[i].odFileUrl, odFile[i].odFileName);
                                }
                            }
                            console.log("holdOdSelectedFile " + holdOdSelectedFile);
                            yield this.odService.odDownloadFile(holdOdSelectedFile[0], holdOdSelectedFile[1]);
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfDownlodToLocalPath();
                        }
                        if (this.service1 === 3 && this.service2 === 0) {
                            this.apiFound = true;
                            let holdBoxFile = this.files2[0];
                            console.log("holdBoxFile " + holdBoxFile);
                            let keys = Object.keys(boxFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (boxFiles[i].bxFileName === holdBoxFile.toString()) {
                                    holdBoxSelectedFile.push(boxFiles[i].bxFileId, boxFiles[i].bxFileName);
                                }
                            }
                            console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
                            yield this.bxService.boxDownload(holdBoxSelectedFile[0], holdBoxSelectedFile[1]);
                            yield this.dpService.dPUploadFromNode();
                        }
                        if (this.service1 === 3 && this.service2 === 1) {
                            this.apiFound = true;
                            let holdBoxFile = this.files2[0];
                            console.log("holdBoxFile " + holdBoxFile);
                            let keys = Object.keys(boxFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (boxFiles[i].bxFileName === holdBoxFile.toString()) {
                                    holdBoxSelectedFile.push(boxFiles[i].bxFileId, boxFiles[i].bxFileName);
                                }
                            }
                            console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
                            yield this.bxService.boxDownload(holdBoxSelectedFile[0], holdBoxSelectedFile[1]);
                            yield this.gdService.gDUploadFromNode();
                            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.gdService.gDUpdateFileName(); }), 5000);
                        }
                        if (this.service1 === 3 && this.service2 === 2) {
                            this.apiFound = true;
                            let holdBoxFile = this.files2[0];
                            console.log("holdBoxFile " + holdBoxFile);
                            let keys = Object.keys(boxFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (boxFiles[i].bxFileName === holdBoxFile.toString()) {
                                    holdBoxSelectedFile.push(boxFiles[i].bxFileId, boxFiles[i].bxFileName);
                                }
                            }
                            console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
                            yield this.bxService.boxDownload(holdBoxSelectedFile[0], holdBoxSelectedFile[1]);
                            yield this.odService.odUploadFile(holdBoxFile);
                        }
                        if (this.service1 === 3 && this.service2 === 4) {
                            this.apiFound = true;
                            let holdBoxFile = this.files2[0];
                            console.log("holdBoxFile " + holdBoxFile);
                            let keys = Object.keys(boxFiles);
                            for (let i = 0; i < keys.length; i++) {
                                if (boxFiles[i].bxFileName === holdBoxFile.toString()) {
                                    holdBoxSelectedFile.push(boxFiles[i].bxFileId, boxFiles[i].bxFileName);
                                }
                            }
                            console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
                            yield this.bxService.boxDownload(holdBoxSelectedFile[0], holdBoxSelectedFile[1]);
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfDownlodToLocalPath();
                        }
                        if (this.service1 === 4 && this.service2 === 0) {
                            this.apiFound = true;
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfFromLocalPathToServer(this.files2[0]);
                            yield this.dpService.dPUploadLocalFromNode(this.files2[0]);
                        }
                        if (this.service1 === 4 && this.service2 === 1) {
                            this.apiFound = true;
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfFromLocalPathToServer(this.files2[0]);
                            yield this.gdService.gDUploadLocal(this.files2[0]);
                            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { yield this.gdService.gDUpdateLocalFileName(); }), 5000);
                        }
                        if (this.service1 === 4 && this.service2 === 2) {
                            this.apiFound = true;
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfFromLocalPathToServer(this.files2[0]);
                            yield this.odService.odUploadLocalFile(this.files2[0]);
                        }
                        if (this.service1 === 4 && this.service2 === 3) {
                            this.apiFound = true;
                            yield this.lfService.sendLfFilePath();
                            yield this.lfService.lfFromLocalPathToServer(this.files2[0]);
                            yield this.bxService.boxLocalUpload(this.files2[0]);
                        }
                        if (this.apiFound == false) {
                            alert("Please choose a right api to drop & transfer your file");
                        }
                    }
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    clientEmailValue(v) {
        try {
            if (v !== undefined || v !== null || v !== "") {
                if (sessionStorage.getItem('gdUserEmail') == null) {
                    this.gdEmail = v;
                    sessionStorage.setItem('gdUserEmail', this.gdEmail);
                    console.log('the value from set2 ' + this.gdEmail);
                }
                else if (sessionStorage.getItem('gdUserEmail') !== v) {
                    sessionStorage.removeItem('gdUserEmail');
                    this.gdEmail = v;
                    sessionStorage.setItem('gdUserEmail', this.gdEmail);
                    console.log('the value from set2 ' + this.gdEmail);
                }
                else
                    this.gdEmail = sessionStorage.getItem('gdUserEmail');
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    getClientEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.clientEmailValue(this.gdcl.holdDataClient[0]);
        });
    }
    getFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("getFiles called");
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("getFiles called two");
                let displayItems = yield this.gdService.listGoogleDriveFiles();
                return resolve(displayItems);
            }));
        });
    }
    gdProcessFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            holdClientFilesToDisplay = yield this.getFiles();
            let filterName = this.filterList(this.filters, this.service1);
            console.log("googledrive filter " + filterName);
            if (filterName === null || filterName === "") {
                console.log("there is not google drive filter");
                let keys = Object.keys(holdClientFilesToDisplay);
                for (let i = 0; i < keys.length; i++) {
                    this.files1.push((holdClientFilesToDisplay[i].gdClName));
                }
                ;
            }
            else {
                console.log("there is google drive filter");
                let storedGdFiles = [];
                let keys = Object.keys(holdClientFilesToDisplay);
                for (let i = 0; i < keys.length; i++) {
                    storedGdFiles.push((holdClientFilesToDisplay[i].gdClName));
                }
                ;
                let newDpFilteredFiles = Object(_filetransfer_filterByFileType_js__WEBPACK_IMPORTED_MODULE_3__["buildFileListByFilter"])(filterName, storedGdFiles);
                for (let i = 0; i < newDpFilteredFiles.length; i++) {
                    this.files1.push((newDpFilteredFiles[i]));
                }
                ;
            }
            return this.files1;
        });
    }
    dpProcessFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if ("dpAccessToken" in sessionStorage) {
                    let displayResult = sessionStorage.getItem("dpAccessToken");
                    this.dpService.dpGetClientInfo(displayResult);
                    retreiveDpFiles = yield this.dpService.dpGetFilesList(displayResult);
                    let filterName = this.filterList(this.filters, this.service1);
                    console.log("filterName is" + filterName);
                    let holdArrayRetrieved = [];
                    if (filterName === null || filterName === "") {
                        let keys = Object.keys(retreiveDpFiles);
                        for (let i = 0; i < keys.length; i++) {
                            holdArrayRetrieved.push(retreiveDpFiles[i].dpClName);
                            this.files1.push((holdArrayRetrieved[i]));
                        }
                    }
                    else {
                        let keys = Object.keys(retreiveDpFiles);
                        for (let i = 0; i < keys.length; i++) {
                            holdArrayRetrieved.push(retreiveDpFiles[i].dpClName);
                        }
                        let storedFiles = holdArrayRetrieved.filter(element => element.indexOf('.') !== -1);
                        let newDpFilteredFiles = Object(_filetransfer_filterByFileType_js__WEBPACK_IMPORTED_MODULE_3__["buildFileListByFilter"])(filterName, storedFiles);
                        for (let i = 0; i < newDpFilteredFiles.length; i++) {
                            this.files1.push((newDpFilteredFiles[i]));
                        }
                        ;
                        let intersection = holdArrayRetrieved.filter(element => !newDpFilteredFiles.includes(element) && !storedFiles.includes(element));
                        console.log("intersection " + intersection);
                        for (let index = 0; index < intersection.length; index++) {
                            this.folders.push(intersection[index]);
                        }
                    }
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    removeGDFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                return gapi.client
                    .request({
                    method: 'DELETE',
                    path: 'https://www.googleapis.com/upload/drive/v3/files/',
                })
                    .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log('Removed');
                }))
                    .catch(err => this.errorService.handleError(err));
            });
        });
    }
    removeUrlParams() {
        return window.history.replaceState(null, null, window.location.pathname);
    }
    bxProcessFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let storeBxInfo = yield this.bxService.getBoxClientInfo();
            let hlBxClName = storeBxInfo[0];
            let hlBxClEmail = storeBxInfo[1];
            let formathlBxClName = hlBxClName.split(",")[0];
            sessionStorage.setItem("boxClientEmail", hlBxClEmail);
            let mongoDbUserId = sessionStorage.getItem('userMnId');
            this.bxService.sendBoxClientInfo(formathlBxClName.replace(/['"]+/g, '').toString(), hlBxClEmail.toString(), mongoDbUserId);
            holdBoxAllFlsFl = yield this.bxService.boxAllFoldersFiles();
            this.boxDisplayFoldersFiles();
        });
    }
    boxDisplayFoldersFiles() {
        let filterName = this.filterList(this.filters, this.service1);
        let savedFlsFolders = JSON.parse(holdBoxAllFlsFl);
        let storeFlsFolders = savedFlsFolders.item_collection.entries;
        if (filterName === null || filterName === "") {
            for (let index = 0; index < storeFlsFolders.length; index++) {
                let holdBoxItems = {};
                if (storeFlsFolders[index].type === "folder") {
                    this.folders.push(storeFlsFolders[index].name);
                }
                else {
                    holdBoxItems["bxFileName"] = storeFlsFolders[index].name;
                    holdBoxItems["bxFileId"] = storeFlsFolders[index].id;
                    console.log("holdBoxItems bxFileId " + holdBoxItems["bxFileId"]);
                    boxFiles.push(holdBoxItems);
                    this.files1.push(storeFlsFolders[index].name);
                }
            }
        }
        else {
            for (let index = 0; index < storeFlsFolders.length; index++) {
                let holdBoxItems = {};
                if (storeFlsFolders[index].type === "folder") {
                    this.folders.push(storeFlsFolders[index].name);
                }
                else {
                    holdBoxItems["bxFileName"] = storeFlsFolders[index].name;
                    holdBoxItems["bxFileId"] = storeFlsFolders[index].id;
                    let holdStoredBoxNames = [];
                    holdStoredBoxNames.push(storeFlsFolders[index].name);
                    boxFiles.push(holdBoxItems);
                    let newBxFilteredFiles = Object(_filetransfer_filterByFileType_js__WEBPACK_IMPORTED_MODULE_3__["buildFileListByFilter"])(filterName, holdStoredBoxNames);
                    for (let i = 0; i < newBxFilteredFiles.length; i++) {
                        this.files1.push(newBxFilteredFiles[i]);
                    }
                }
            }
        }
    }
    odProcessFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let showAllOdFlsFiles = yield this.odService.odDisplayFilesFlsProcess();
            let runAllOdFlsFiles = yield this.odFilesFls(showAllOdFlsFiles);
        });
    }
    odFilesFls(odFlsFiles) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let filterName = this.filterList(this.filters, this.service1);
            return yield new Promise((resolve, reject) => {
                let storeOdItemsInArray = [];
                if (filterName === null || filterName === "") {
                    let key = Object.values(odFlsFiles);
                    for (let index = 0; index < key.length; index++) {
                        odFile.push(odFlsFiles[index]);
                        storeOdItemsInArray.push(odFlsFiles[index].odFileName);
                    }
                    let odFilesStored = storeOdItemsInArray.filter(el => el.indexOf('.') != -1);
                    let odFolderStored = storeOdItemsInArray.filter(el => el.indexOf('.') === -1);
                    console.log("odFilesStored is " + odFilesStored + "odFolderStored " + odFolderStored);
                    for (let index = 0; index < odFilesStored.length; index++) {
                        this.files1.push(odFilesStored[index]);
                    }
                    for (let index = 0; index < odFolderStored.length; index++) {
                        this.folders.push(odFolderStored[index]);
                    }
                }
                else {
                    let key = Object.values(odFlsFiles);
                    for (let index = 0; index < key.length; index++) {
                        odFile.push(odFlsFiles[index]);
                        storeOdItemsInArray.push(odFlsFiles[index].odFileName);
                    }
                    let odFilesStored = storeOdItemsInArray.filter(el => el.indexOf('.') != -1);
                    let odFolderStored = storeOdItemsInArray.filter(el => el.indexOf('.') === -1);
                    let newOdFilteredFiles = Object(_filetransfer_filterByFileType_js__WEBPACK_IMPORTED_MODULE_3__["buildFileListByFilter"])(filterName, odFilesStored);
                    let uniqueArray = newOdFilteredFiles.filter(function (item, pos) {
                        return newOdFilteredFiles.indexOf(item) == pos;
                    });
                    for (let index = 0; index < uniqueArray.length; index++) {
                        this.files1.push(uniqueArray[index]);
                    }
                    for (let index = 0; index < odFolderStored.length; index++) {
                        this.folders.push(odFolderStored[index]);
                    }
                }
                return resolve(this.files1);
            });
        });
    }
    lfProcessFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if ("localFilePath" in sessionStorage) {
                    let filePath = sessionStorage.getItem("localFilePath");
                    console.log("filePath is " + filePath);
                    const files = yield fetch('/api/Files', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                        body: JSON.stringify({
                            path: filePath
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                        console.log("data " + data);
                        data.names.forEach((name) => {
                            if (this.service1 === 4) {
                                this.files1.push(name);
                                console.log(this.files1);
                            }
                        });
                        data.files.forEach((file) => {
                            if (this.service1 === 4) {
                                this.files1Data.push(file);
                            }
                        });
                    })
                        .catch(err => this.errorService.handleError(err));
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
}
FiletransferComponent.ɵfac = function FiletransferComponent_Factory(t) { return new (t || FiletransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gd_cloud_service__WEBPACK_IMPORTED_MODULE_5__["GdCloudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dp_cloud_service__WEBPACK_IMPORTED_MODULE_6__["DpCloudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gdClientCredentials__WEBPACK_IMPORTED_MODULE_7__["GDClientCredentials"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bx_cloud_service__WEBPACK_IMPORTED_MODULE_8__["BxCloudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_od_cloud_service__WEBPACK_IMPORTED_MODULE_9__["OdCloudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_local_files_service__WEBPACK_IMPORTED_MODULE_10__["LocalFilesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandelersService"])); };
FiletransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FiletransferComponent, selectors: [["app-filetransfer"]], decls: 39, vars: 19, consts: [[1, "trBar"], [2, "position", "absolute", "margin-left", "515px", "margin-top", "200px", "float", "left", "margin-bottom", "150px"], [2, "font-size", "12px", "font-weight", "bold"], ["src", "https://www.freeiconspng.com/uploads/arrow-icon-jpg-arrow-58-icon-free-orange-arrow-icons-arrow-right-icon--9.png", "width", "130", "height", "50", "alt", "icon-arrow"], [2, "margin-top", "40px", "margin-left", "100px", "width", "100%", "overflow", "hidden", "align-content", "center"], [2, "width", "600px", "float", "left"], ["class", "frImg", "width", "64", "height", "62", 3, "src", 4, "ngIf"], ["class", "services-button", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "services"], [1, "boxes"], ["cdkDropList", "", "id", "left", 1, "example-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["file1List", "cdkDropList"], ["src", "assets/images/folder.png", "width", "70", "height", "70", 1, "folder"], [1, "folder-text"], [2, "margin-left", "620px"], ["class", "frImg", "width", "66", "height", "69", 3, "src", 4, "ngIf"], ["cdkDropList", "", "id", "right", 1, "example-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["file2List", "cdkDropList"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["width", "64", "height", "62", 1, "frImg", 3, "src"], [1, "services-button", 3, "click"], ["width", "64", "height", "64", 3, "src"], [1, "services-button", 3, "disabled", "click"], ["cdkDrag", "", 1, "example-box"], ["src", "assets/images/file.png", "width", "60", "height", "60", 1, "file"], [1, "file-text"], ["src", "assets/images/folder.png", "width", "60", "height", "60", 1, "file"], ["width", "66", "height", "69", 1, "frImg", 3, "src"]], template: function FiletransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Drag and Drop Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FiletransferComponent_img_7_Template, 1, 1, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FiletransferComponent_button_8_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FiletransferComponent_div_9_Template, 30, 20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Filters: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function FiletransferComponent_Template_div_cdkDropListDropped_16_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, FiletransferComponent_div_21_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, FiletransferComponent_div_22_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FiletransferComponent_img_24_Template, 1, 1, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FiletransferComponent_button_25_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FiletransferComponent_div_26_Template, 30, 20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Filters: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function FiletransferComponent_Template_div_cdkDropListDropped_33_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, FiletransferComponent_div_38_Template, 4, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.leftServiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.leftServiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leftServiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.filterList(ctx.filters, ctx.service1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.files1)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, _r9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.files1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.folders.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.rightServiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.rightServiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rightServiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.filterList(ctx.filters, ctx.service2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.files2)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, _r3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]], styles: [".services[_ngcontent-%COMP%], .services-button[_ngcontent-%COMP%] {\n    margin: 10px 20px;\n    text-align: left;\n    vertical-align: middle;\n}\n\n.services-button[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    outline: 0;\n}\n\n.services-button[_ngcontent-%COMP%]:hover {\n    background: rgb(220, 235, 255);\n}\n\n.frImg[_ngcontent-%COMP%]{\n  border-radius: 10px;\n}\n\n.boxes[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    width: 400px;\n    background:white;\n    border-radius:40px;\n    border:2px solid rgb(207, 207, 207);\n}\n\n.folder[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n\n.folder-text[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\n.file[_ngcontent-%COMP%] {\n    margin-left: 40px;\n}\n\n.file-text[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\nli[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-left: 20px;\n}\n\n.filesandfolderstext[_ngcontent-%COMP%] {\n    margin: 0 20px;\n}\n\n\n\n.example-list[_ngcontent-%COMP%] {\n    border: solid 1px #ccc;\n    min-height: 60px;\n    background: white;\n    border-radius: 40px;\n    overflow: hidden;\n    display: block;\n  }\n\n.example-box[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-align: left;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n  }\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 40px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n\n.example-box[_ngcontent-%COMP%]:last-child {\n    border: none;\n  }\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n\n.trBar[_ngcontent-%COMP%]{\n    margin-top: 100px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXRyYW5zZmVyL2ZpbGV0cmFuc2Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQjs7a0RBRThDO0VBQ2hEOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0Usc0RBQXNEO0VBQ3hEOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0Usc0RBQXNEO0VBQ3hEOztBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmlsZXRyYW5zZmVyL2ZpbGV0cmFuc2Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2VzLCAuc2VydmljZXMtYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zZXJ2aWNlcy1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5zZXJ2aWNlcy1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjAsIDIzNSwgMjU1KTtcbn1cbi5mckltZ3tcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ib3hlcyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjA3LCAyMDcsIDIwNyk7XG59XG4uZm9sZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5mb2xkZXItdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZmlsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4uZmlsZS10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxubGl7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmZpbGVzYW5kZm9sZGVyc3RleHQge1xuICAgIG1hcmdpbjogMCAyMHB4O1xufVxuXG4vKiBkcmFnIGFuZCBkcm9wICovXG4uZXhhbXBsZS1saXN0IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZXhhbXBsZS1ib3gge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIFxuICAuY2RrLWRyYWctcHJldmlldyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gIFxuICAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIFxuICAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbiAgLnRyQmFye1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FiletransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-filetransfer',
                templateUrl: './filetransfer.component.html',
                styleUrls: ['./filetransfer.component.css']
            }]
    }], function () { return [{ type: _filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] }, { type: _gd_cloud_service__WEBPACK_IMPORTED_MODULE_5__["GdCloudService"] }, { type: _dp_cloud_service__WEBPACK_IMPORTED_MODULE_6__["DpCloudService"] }, { type: _gdClientCredentials__WEBPACK_IMPORTED_MODULE_7__["GDClientCredentials"] }, { type: _bx_cloud_service__WEBPACK_IMPORTED_MODULE_8__["BxCloudService"] }, { type: _od_cloud_service__WEBPACK_IMPORTED_MODULE_9__["OdCloudService"] }, { type: _local_files_service__WEBPACK_IMPORTED_MODULE_10__["LocalFilesService"] }, { type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/filetransfer/filterByFileType.js":
/*!**************************************************!*\
  !*** ./src/app/filetransfer/filterByFileType.js ***!
  \**************************************************/
/*! exports provided: buildFileListByFilter, CheckCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFileListByFilter", function() { return buildFileListByFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckCategories", function() { return CheckCategories; });
const errorHandler = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
let findAllErrors = (error) => errorHandler.handleError(error);

const DOCS = [
	'doc',
	'docx',
	'txt',
    'odt',
	'pdf',
    'xls',
    'xlsx',
    'pdf',
	'pptx'
]
const IMAGES = [
	'bmp',
    'gif',
	'jpg',
	'jpeg',
    'tiff',
    'svg',
	'png'
]
const AUDIO = [
	'au',
    'midi',
	'mp3',
	'm4a',
	'ogg',
	'ra',
	'ram',
	'wav'
]
const VIDEO = [
	'avi',
	'mpeg',
	'mp4',
	'mov',
	'wmv'	
]
let holdSelectedFiles = [];
let definedIT = '';

function buildFileListByFilter(filterName, masterFileList ) {
	try {
	 if(filterName !== undefined || filterName !== null || filterName !== ""
	 || masterFileList.length !== 0 || masterFileList !== undefined){
	   
		let newFilterName = filterName.toUpperCase();
		
		findFileExtension(newFilterName,"IMAGES",IMAGES,masterFileList);
		findFileExtension(newFilterName,"DOCS",DOCS,masterFileList);
		findFileExtension(newFilterName,"VIDEO",VIDEO,masterFileList);
		findFileExtension(newFilterName,"AUDIO",AUDIO,masterFileList);
		
		console.log("holdSelectedFiles " + holdSelectedFiles);
		return (holdSelectedFiles);
		}
	} catch (error) {
		findAllErrors(error);
	}
}
function findFileExtension(fltName,str,ExtArray,masterArray){
  try {
	if(fltName === str){
		console.log(`inside ${str}`)
		
	for (let index = 0; index < ExtArray.length; index++) {
		 definedIT += masterArray.filter(data => 
			data.indexOf(ExtArray[index]) !== -1 && data != null && data != "" && data != ",") + ',';
	 }
	 holdSelectedFiles = definedIT.split(',').filter(Boolean);
	 return holdSelectedFiles;
   }
  } catch (error) {
	  findAllErrors(error);
  }
	
}
function CheckCategories(filter) {
  try {
	  if(filter !== undefined || filter !== null || filter !== ""){
        if(DOCS.includes(filter))
		return true;
		if(IMAGES.includes(filter))
			return true;
		if(AUDIO.includes(filter))
			return true;
		if(VIDEO.includes(filter))
			return true;
		else return false;
	  }
  } catch (error) {
	  findAllErrors(error);
  }
	
}

/***/ }),

/***/ "./src/app/filter.service.ts":
/*!***********************************!*\
  !*** ./src/app/filter.service.ts ***!
  \***********************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterService {
    constructor() {
        this.filters = [
        //'Images to Dropbox',
        //'Documents to Google Drive'
        ];
    }
    add(filter) {
        this.filters.push(filter);
    }
    getFilters() {
        return this.filters;
    }
    clear() {
        this.filters = [];
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/finalproject.service.ts":
/*!*****************************************!*\
  !*** ./src/app/finalproject.service.ts ***!
  \*****************************************/
/*! exports provided: FinalprojectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalprojectService", function() { return FinalprojectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FinalprojectService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('https://stormy-headland-33273.herokuapp.com/users');
    }
    getuser(id) {
        return this.http.get(`https://stormy-headland-33273.herokuapp.com/users/${id}`);
    }
}
FinalprojectService.ɵfac = function FinalprojectService_Factory(t) { return new (t || FinalprojectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FinalprojectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FinalprojectService, factory: FinalprojectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalprojectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/finalproject/finalproject.component.ts":
/*!********************************************************!*\
  !*** ./src/app/finalproject/finalproject.component.ts ***!
  \********************************************************/
/*! exports provided: FinalprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalprojectComponent", function() { return FinalprojectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _finalproject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finalproject.service */ "./src/app/finalproject.service.ts");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-handelers.service */ "./src/app/error-handelers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function FinalprojectComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usr_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usr_r1.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usr_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usr_r1.password);
} }
class FinalprojectComponent {
    constructor(fp, errorService) {
        this.fp = fp;
        this.errorService = errorService;
    }
    ngOnInit() {
        this.fp.getUsers().subscribe(users => { this.users = users; }, error => { this.errorService.handleError(error); });
    }
}
FinalprojectComponent.ɵfac = function FinalprojectComponent_Factory(t) { return new (t || FinalprojectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_finalproject_service__WEBPACK_IMPORTED_MODULE_1__["FinalprojectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"])); };
FinalprojectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinalprojectComponent, selectors: [["app-finalproject"]], decls: 4, vars: 1, consts: [[1, "users"], [4, "ngFor", "ngForOf"], ["routerLink", "/users"], [1, "badge"]], template: function FinalprojectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "finalproject works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FinalprojectComponent_li_3_Template, 10, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".users[_ngcontent-%COMP%] {\n    background-color: aquamarine;\n}\n.badge[_ngcontent-%COMP%]{\n   margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWxwcm9qZWN0L2ZpbmFscHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7R0FDRyxpQkFBaUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9maW5hbHByb2plY3QvZmluYWxwcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG4uYmFkZ2V7XG4gICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalprojectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-finalproject',
                templateUrl: './finalproject.component.html',
                styleUrls: ['./finalproject.component.css']
            }]
    }], function () { return [{ type: _finalproject_service__WEBPACK_IMPORTED_MODULE_1__["FinalprojectService"] }, { type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gd-cloud.service.ts":
/*!*************************************!*\
  !*** ./src/app/gd-cloud.service.ts ***!
  \*************************************/
/*! exports provided: GdCloudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GdCloudService", function() { return GdCloudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gdClientCredentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gdClientCredentials */ "./src/app/gdClientCredentials.ts");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handelers.service */ "./src/app/error-handelers.service.ts");





let holdClientEmail = [];
let holdClientFiles = [];
let holdClientFileId = [];
let allClientFiles = [];
let getEmailValue = false;
class GdCloudService {
    constructor(gdkh, errorService) {
        this.gdkh = gdkh;
        this.errorService = errorService;
        this.gdkh.holdDataClient = holdClientEmail;
        this.gdkh.holdFilesClient = holdClientFiles;
        console.log("gdkh.holdDataClient " + this.gdkh.holdDataClient);
    }
    googleImplementCallBack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                gapi.load('client:auth2', () => {
                    gapi.client
                        .init({
                        apiKey: 'AIzaSyCoO79P9OtAYVmr6PUSNqRF69PmAMwyuiA',
                        discoveryDocs: [
                            'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
                        ],
                        clientId: '160810936655-90na0qia4bkvqrsljk6acttn60tru758.apps.googleusercontent.com',
                        scope: 'profile email https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata',
                    })
                        .then(function () {
                        console.log("client initialized...");
                        let showClient = gapi.auth2.getAuthInstance();
                        showClient.signIn({ prompt: 'consent' })
                            .then((googleUser) => {
                            let clientaccessToken = googleUser.getAuthResponse().access_token;
                            let clientEmail = googleUser.getBasicProfile().getEmail();
                            let clientName = googleUser.getBasicProfile().getName();
                            let InstantiateClient = showClient.isSignedIn.get();
                            getEmailValue = true;
                            let mongoDbUserId = sessionStorage.getItem('userMnId');
                            sendGdClientInfo(clientName, clientEmail, mongoDbUserId);
                            holdClientEmail.push(clientEmail, clientaccessToken);
                            accessTokenGoogleDrive(clientaccessToken);
                            return resolve(holdClientEmail);
                        });
                    })
                        .catch((err) => {
                        this.errorService.handleError(err);
                        return reject(err);
                    });
                });
            });
        });
    }
    listGoogleDriveFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('listGoogleDriveFiles called');
            return yield new Promise((resolve, reject) => {
                return gapi.client.drive.files
                    .list({
                    fields: 'nextPageToken, files(id, name, mimeType, modifiedTime, size, webContentLink)',
                    q: "'root' in parents and trashed = false",
                })
                    .then((res) => {
                    console.log('listGoogleDriveFiles called2');
                    let holdGdClientFiles = res.result.files;
                    for (let index = 0; index < holdGdClientFiles.length; index++) {
                        {
                            let holdDpObj = {};
                            holdDpObj["gdClId"] = holdGdClientFiles[index].id;
                            holdDpObj["gdClName"] = holdGdClientFiles[index].name;
                            allClientFiles[index] = holdDpObj;
                        }
                    }
                    return resolve(allClientFiles);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    gDUploadFromNode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                fetch('/api/UploadGd', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then((response) => {
                    console.log(response);
                    return resolve(response);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    gDUpdateFileName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                fetch('/api/GDUpdateFile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then((response) => {
                    console.log(response);
                    return (resolve(response));
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    gDUploadLocal(fileName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (fileName !== undefined || fileName !== null || fileName !== "") {
                    return yield new Promise((resolve, reject) => {
                        fetch('/api/UploadGdLocal', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                            },
                            body: JSON.stringify({
                                fileName: fileName
                            })
                        })
                            .then((response) => {
                            console.log(response);
                            return resolve(response);
                        })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    gDUpdateLocalFileName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                fetch('/api/GDUpdateLocalFile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then((response) => {
                    console.log(response);
                    return (resolve(response));
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    getGdId(fileId, fileGdName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (fileId !== undefined || fileId !== null || fileId !== ""
                    || fileGdName !== undefined || fileGdName !== null || fileGdName !== "") {
                    console.log("fileGdName from gd-service " + fileGdName);
                    return new Promise((resolve, reject) => {
                        let myHeaders = new Headers();
                        myHeaders.append('Accept', '/');
                        myHeaders.append('Origin', 'x-requested-with');
                        myHeaders.append('Content-Type', 'application/json');
                        let raw = JSON.stringify({
                            title: 'codefromAngular',
                            gdSaveId: fileId,
                            gdSaveFileName: fileGdName
                        });
                        let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw
                        };
                        fetch('/api/GdId', requestOptions)
                            .then((response) => { return response.text(); })
                            .then(response => { return resolve(response); })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            return reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    gDDownloadFromNode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                fetch('/api/DownloadGd', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then((response) => {
                    console.log(response);
                    return resolve(response);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
    gDDownloadLocalFromNode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                fetch('/api/DownloadGdLocal', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then((response) => {
                    console.log(response);
                    return resolve(response);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    return reject(err);
                });
            });
        });
    }
}
GdCloudService.ɵfac = function GdCloudService_Factory(t) { return new (t || GdCloudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_gdClientCredentials__WEBPACK_IMPORTED_MODULE_2__["GDClientCredentials"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandelersService"])); };
GdCloudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GdCloudService, factory: GdCloudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GdCloudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _gdClientCredentials__WEBPACK_IMPORTED_MODULE_2__["GDClientCredentials"] }, { type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandelersService"] }]; }, null); })();
function sendGdClientInfo(getGdName, getgdEmail, getUserMongoId) {
    try {
        if (getGdName !== undefined || getGdName !== null || getGdName !== ""
            || getgdEmail !== undefined || getgdEmail !== null || getgdEmail !== ""
            || getUserMongoId !== undefined || getUserMongoId !== null || getUserMongoId !== "") {
            let gdClientValue = JSON.stringify({
                gdname: getGdName,
                gdemail: getgdEmail,
                usermongoid: getUserMongoId,
            });
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            return fetch('/api/MCGdClient', {
                method: 'POST',
                headers: myHeaders,
                body: gdClientValue
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => this.errorService.handleError(err));
        }
    }
    catch (error) {
        this.errorService.handleError(error);
    }
}
function accessTokenGoogleDrive(saveDg) {
    console.log('I am in features GDAccessToken Post ' + saveDg);
    try {
        if (saveDg !== undefined || saveDg !== null || saveDg !== "") {
            return new Promise((resolve, reject) => {
                let myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                let raw = JSON.stringify({
                    title: 'accessTokenfromAngular',
                    accessTokenDg: saveDg
                });
                let requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                };
                fetch('/api/GDAcessToken', requestOptions)
                    .then((response) => {
                    return response.json();
                })
                    .then((result) => {
                    console.log('the acces_token is ', result[Object.keys(result)[0]]);
                    let resultAccessToken = result[Object.keys(result)[0]];
                    resolve(resultAccessToken);
                })
                    .catch((error) => {
                    this.errorService.handleError(error);
                    return reject(error);
                });
            });
        }
    }
    catch (error) {
        this.errorService.handleError(error);
    }
}


/***/ }),

/***/ "./src/app/gdClientCredentials.ts":
/*!****************************************!*\
  !*** ./src/app/gdClientCredentials.ts ***!
  \****************************************/
/*! exports provided: GDClientCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GDClientCredentials", function() { return GDClientCredentials; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GDClientCredentials {
    constructor() { }
}
GDClientCredentials.ɵfac = function GDClientCredentials_Factory(t) { return new (t || GDClientCredentials)(); };
GDClientCredentials.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GDClientCredentials, factory: GDClientCredentials.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GDClientCredentials, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error-handelers.service */ "./src/app/error-handelers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HomeComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to our team, Multicloud dear new customer! Hope you enjoy our app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome back to Multicloud, dear customer! Hope you enjoy our app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to Multicloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_button_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_button_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_3_div_1_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_3_div_2_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_div_3_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "label_important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "With Multicloud, you can manage files between multiple cloud storage services, such as DropBox, Google Drive, OneDrive, and Box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "label_important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "To begin, click on the Sign Up button to create an account. If you already have an account, click on the Sign In button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "label_important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "To associate services with your account, click on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " button, and navigate to the Cloud Management page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enter your cloud account details. You must be signed into the Multicloud app to do this.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "label_important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "To manage or transfer files, click on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " button, and navigate to the File Transfer Page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "You must be signed into the Multicloud app, and have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "two");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " cloud account configured and added.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HomeComponent_div_3_button_39_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HomeComponent_div_3_button_40_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.readsessionStorageValue("userSignedUp") == "SignedUpUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.readsessionStorageValue("userSignedIn") == "SignedUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.readsessionStorageValue("userSignedIn") !== "SignedUser" && ctx_r0.readsessionStorageValue("userSignedUp") !== "SignedUpUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.readsessionStorageValue("userSignedIn") !== "SignedUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.readsessionStorageValue("userSignedIn") !== "SignedUser" && ctx_r0.readsessionStorageValue("userSignedIn") !== "SignedUpUser");
} }
class HomeComponent {
    constructor(errorService) {
        this.errorService = errorService;
        this.textToAppear = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.textToAppear = true;
        }, 10000);
    }
    readsessionStorageValue(key) {
        try {
            if (key !== undefined || key !== null || key !== "") {
                return sessionStorage.getItem(key);
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandelersService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 1, consts: [[1, "stBkImage", "container-fluid"], [1, "hmBar"], [1, "centerImg"], ["class", "homeMsm", 4, "ngIf"], [1, "homeMsm"], [4, "ngIf"], [1, "homeTxt"], [1, "mtIcon"], ["type", "submit", "routerLink", "/sign-in", "class", "btn-danger btn-lg siHome", 4, "ngIf"], ["type", "submit", "routerLink", "/sign-up", "class", "btn-info btn-lg spHome", 4, "ngIf"], ["type", "submit", "routerLink", "/sign-in", 1, "btn-danger", "btn-lg", "siHome"], ["type", "submit", "routerLink", "/sign-up", 1, "btn-info", "btn-lg", "spHome"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 41, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.textToAppear);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".homeMsm[_ngcontent-%COMP%]{\n    margin-left: 100px;\n    width: 1000px;\n    height: 750px;\n    margin-top: 160px;\n    text-align: center;\n    position: absolute;\n    -webkit-animation-name: textAnime;\n            animation-name: textAnime;\n    -webkit-animation-duration: 7s;\n            animation-duration: 7s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1; \n}\n.centerImg[_ngcontent-%COMP%]::before, .centerImg[_ngcontent-%COMP%]::after{\n      transform-origin:center bottom;\n      transform-style:preserve-3d;\n      position:absolute; \n      content: url('multicloud.png');  \n      display:block; \n      border-radius:50%;\n}\n.centerImg[_ngcontent-%COMP%]::before {\n      background-image: url('multicloud.png');\n      background-size: contain;\n      display: block;\n      background-repeat: no-repeat;\n      width: 250px;\n      height: 250px;\n      margin-top: 10px;\n      margin-left: 500px;\n      border-radius:50%;\n      transform-style:preserve-3d;\n      transform-origin:center bottom;\n      -webkit-animation:f 10s both;\n              animation:f 10s both; \n      content: '';\n}\n.centerImg[_ngcontent-%COMP%]::after {\n      background-image: url('multicloud.png');\n      background-size: contain;\n      display: block;\n      background-repeat: no-repeat;\n      width: 250px;\n      height: 250px; \n      margin-top: 10px;\n      margin-left: 500px; \n      filter:brightness(0.2);\n      transform:rotateY(-180deg);\n      -webkit-animation:g 10s both;\n              animation:g 10s both;  \n      content: '';\n}\n.homeTxt[_ngcontent-%COMP%]{\n    width: 100%;\n    border-radius: 15px;\n    text-align: left;\n    padding-left: 0;\n    background-color: rgba(141, 162, 192, 0.664);\n}\n.hmBar[_ngcontent-%COMP%]{\n  margin-top: 150px;\n}\n.stBkImage[_ngcontent-%COMP%]{\n  height: 1000px;\n  width:180%;\n  z-index: 2;\n  bottom: 0;\n  left: 0;\n  right:0;\n  overflow: hidden;\n  margin-right:0;\n  margin-left:0;\n  padding-right:0;\n  padding-left:0;\n  background-image: url('homeBackground.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\np[_ngcontent-%COMP%]{\n  font-size: 25px;\n}\n.mtIcon[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  size: 24px;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\n  margin-top: 30px;\n  font-size: 35px;\n  color: rgb(30, 61, 121);\n  margin-bottom: 30px;\n}\n.siHome[_ngcontent-%COMP%]{\n  margin-left: 400px;\n  margin-bottom: 30px;\n  font-size: 15px;\n  border-radius: 5px;\n  min-width: 150px;\n}\n.spHome[_ngcontent-%COMP%]{\n margin-left: 70px;\n margin-bottom: 30px;\n font-size: 15px;\n border-radius: 5px;\n min-width: 150px;\n}\n@-webkit-keyframes textAnime {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n  to {\n      margin-left: 100px;\n      width: 100%;\n  }\n}\n@keyframes textAnime {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n  to {\n      margin-left: 100px;\n      width: 100%;\n  }\n}\n@-webkit-keyframes f {\n  from {-webkit-clip-path:inset(0 80% 0 0);clip-path:inset(0 80% 0 0);}\n  50%, to {-webkit-clip-path:inset(0 0% 0 0);clip-path:inset(0 0% 0 0);}\n}\n@keyframes f {\n  from {-webkit-clip-path:inset(0 80% 0 0);clip-path:inset(0 80% 0 0);}\n  50%, to {-webkit-clip-path:inset(0 0% 0 0);clip-path:inset(0 0% 0 0);}\n}\n@-webkit-keyframes g {\n  from {-webkit-clip-path:inset(0 0 0 20%);clip-path:inset(0 0 0 20%);transform-origin:20% 0;}\n  50%, to {-webkit-clip-path:inset(0 0 0 100%);clip-path:inset(0 0 0 100%);transform-origin:100% 0;}\n}\n@keyframes g {\n  from {-webkit-clip-path:inset(0 0 0 20%);clip-path:inset(0 0 0 20%);transform-origin:20% 0;}\n  50%, to {-webkit-clip-path:inset(0 0 0 100%);clip-path:inset(0 0 0 100%);transform-origin:100% 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQztBQUNBO01BQ00sOEJBQThCO01BQzlCLDJCQUEyQjtNQUMzQixpQkFBaUI7TUFDakIsOEJBQWtEO01BQ2xELGFBQWE7TUFDYixpQkFBaUI7QUFDdkI7QUFDQztNQUNLLHVDQUEyRDtNQUMzRCx3QkFBd0I7TUFDeEIsY0FBYztNQUNkLDRCQUE0QjtNQUM1QixZQUFZO01BQ1osYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLDJCQUEyQjtNQUMzQiw4QkFBOEI7TUFDOUIsNEJBQW9CO2NBQXBCLG9CQUFvQjtNQUNwQixXQUFXO0FBQ2pCO0FBQ0U7TUFDSSx1Q0FBMkQ7TUFDM0Qsd0JBQXdCO01BQ3hCLGNBQWM7TUFDZCw0QkFBNEI7TUFDNUIsWUFBWTtNQUNaLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsNEJBQW9CO2NBQXBCLG9CQUFvQjtNQUNwQixXQUFXO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNENBQTRDO0FBQ2hEO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFNBQVM7RUFDVCxPQUFPO0VBQ1AsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkNBQStEO0VBQy9ELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjtFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFdBQVc7RUFDZjtBQUNGO0FBVEE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQixXQUFXO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsTUFBTSxrQ0FBMEIsQ0FBMUIsMEJBQTBCLENBQUM7RUFDakMsU0FBUyxpQ0FBeUIsQ0FBekIseUJBQXlCLENBQUM7QUFDckM7QUFIQTtFQUNFLE1BQU0sa0NBQTBCLENBQTFCLDBCQUEwQixDQUFDO0VBQ2pDLFNBQVMsaUNBQXlCLENBQXpCLHlCQUF5QixDQUFDO0FBQ3JDO0FBQ0E7RUFDRSxNQUFNLGtDQUEwQixDQUExQiwwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQztFQUN4RCxTQUFTLG1DQUEyQixDQUEzQiwyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQztBQUMvRDtBQUhBO0VBQ0UsTUFBTSxrQ0FBMEIsQ0FBMUIsMEJBQTBCLENBQUMsc0JBQXNCLENBQUM7RUFDeEQsU0FBUyxtQ0FBMkIsQ0FBM0IsMkJBQTJCLENBQUMsdUJBQXVCLENBQUM7QUFDL0QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lTXNte1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGhlaWdodDogNzUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogdGV4dEFuaW1lO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgXG59XG4uY2VudGVySW1nOjpiZWZvcmUsLmNlbnRlckltZzo6YWZ0ZXJ7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgXG4gICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbXVsdGljbG91ZC5wbmcnKTsgIFxuICAgICAgZGlzcGxheTpibG9jazsgXG4gICAgICBib3JkZXItcmFkaXVzOjUwJTtcbn0gIFxuIC5jZW50ZXJJbWc6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbXVsdGljbG91ZC5wbmcnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207XG4gICAgICBhbmltYXRpb246ZiAxMHMgYm90aDsgXG4gICAgICBjb250ZW50OiAnJztcbn0gICAgIFxuICAuY2VudGVySW1nOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbXVsdGljbG91ZC5wbmcnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGhlaWdodDogMjUwcHg7IFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MDBweDsgXG4gICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjIpO1xuICAgICAgdHJhbnNmb3JtOnJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgICBhbmltYXRpb246ZyAxMHMgYm90aDsgIFxuICAgICAgY29udGVudDogJyc7XG59ICBcbi5ob21lVHh0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDEsIDE2MiwgMTkyLCAwLjY2NCk7XG59XG4uaG1CYXJ7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xufVxuLnN0QmtJbWFnZXtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHdpZHRoOjE4MCU7XG4gIHotaW5kZXg6IDI7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6MDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OjA7XG4gIG1hcmdpbi1sZWZ0OjA7XG4gIHBhZGRpbmctcmlnaHQ6MDtcbiAgcGFkZGluZy1sZWZ0OjA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lQmFja2dyb3VuZC5wbmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxucHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLm10SWNvbntcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBzaXplOiAyNHB4O1xufVxuaDEsaDIsaDN7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6IHJnYigzMCwgNjEsIDEyMSk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2lIb21le1xuICBtYXJnaW4tbGVmdDogNDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLnNwSG9tZXtcbiBtYXJnaW4tbGVmdDogNzBweDtcbiBtYXJnaW4tYm90dG9tOiAzMHB4O1xuIGZvbnQtc2l6ZTogMTVweDtcbiBib3JkZXItcmFkaXVzOiA1cHg7XG4gbWluLXdpZHRoOiAxNTBweDtcbn1cbkBrZXlmcmFtZXMgdGV4dEFuaW1lIHtcbiAgZnJvbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gICAgd2lkdGg6IDMwMCU7XG4gIH1cbiAgdG8ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZiB7XG4gIGZyb20ge2NsaXAtcGF0aDppbnNldCgwIDgwJSAwIDApO31cbiAgNTAlLCB0byB7Y2xpcC1wYXRoOmluc2V0KDAgMCUgMCAwKTt9XG59ICBcbkBrZXlmcmFtZXMgZyB7XG4gIGZyb20ge2NsaXAtcGF0aDppbnNldCgwIDAgMCAyMCUpO3RyYW5zZm9ybS1vcmlnaW46MjAlIDA7fVxuICA1MCUsIHRvIHtjbGlwLXBhdGg6aW5zZXQoMCAwIDAgMTAwJSk7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/local-files.service.ts":
/*!****************************************!*\
  !*** ./src/app/local-files.service.ts ***!
  \****************************************/
/*! exports provided: LocalFilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFilesService", function() { return LocalFilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handelers.service */ "./src/app/error-handelers.service.ts");




class LocalFilesService {
    constructor(errorService) {
        this.errorService = errorService;
    }
    sendLfFilePath() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let localFilePath = sessionStorage.getItem("localFilePath");
            console.log(localFilePath);
            return yield new Promise((resolve, reject) => {
                fetch('/api/LfFilePath', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify({
                        lfStorePath: localFilePath
                    })
                })
                    .then((result) => {
                    return result.json();
                })
                    .then(response => {
                    let msgDisplay = response[Object.keys(response)[1]];
                    resolve(msgDisplay);
                })
                    .catch((err) => {
                    this.errorService.handleError(err);
                    reject(err);
                });
            });
        });
    }
    lfDownlodToLocalPath() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                let myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                let requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                };
                fetch('/api/LfDownload', requestOptions)
                    .then((response) => {
                    return response.json();
                })
                    .then((result) => {
                    let holdResult = result[Object.keys(result)[1]];
                    resolve(holdResult);
                })
                    .catch(err => {
                    this.errorService.handleError(err);
                    reject(err);
                });
            });
        });
    }
    lfFromLocalPathToServer(lfTrs) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (lfTrs !== undefined || lfTrs !== null || lfTrs !== "") {
                    return yield new Promise((resolve, reject) => {
                        let myHeaders = new Headers();
                        myHeaders.append('Content-Type', 'application/json');
                        let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: JSON.stringify({
                                lfTranfer: lfTrs
                            })
                        };
                        fetch('/api/LfileServer', requestOptions)
                            .then((response) => {
                            return response.json();
                        })
                            .then((result) => {
                            let holdResult = result[Object.keys(result)[1]];
                            resolve(holdResult);
                        })
                            .catch(err => {
                            this.errorService.handleError(err);
                            reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
}
LocalFilesService.ɵfac = function LocalFilesService_Factory(t) { return new (t || LocalFilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"])); };
LocalFilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalFilesService, factory: LocalFilesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalFilesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MessagesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2, " ");
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.messageService.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
} }
class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.css']
            }]
    }], function () { return [{ type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/od-cloud.service.ts":
/*!*************************************!*\
  !*** ./src/app/od-cloud.service.ts ***!
  \*************************************/
/*! exports provided: OdCloudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdCloudService", function() { return OdCloudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handelers.service */ "./src/app/error-handelers.service.ts");




class OdCloudService {
    constructor(errorService) {
        this.errorService = errorService;
        this.storeOdFiles = [];
    }
    login() {
        let odUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=token&client_id=266792a9-b745-45e2-a76d-494d6720ebb8&redirect_uri=https://stormy-headland-33273.herokuapp.com/cloudmanagement/&scope=https://graph.microsoft.com/Files.ReadWrite.All https://graph.microsoft.com/User.ReadWrite&state=null";
        let link = document.createElement('a');
        link.href = odUrl;
        link.click();
    }
    odCodeFromUri() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                const uriLink = location.href;
                let findParam = uriLink.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
                try {
                    if (findParam !== undefined || findParam !== null || findParam !== "") {
                        return resolve(findParam);
                    }
                }
                catch (error) {
                    this.errorService.handleError(error);
                    return reject(error);
                }
            });
        });
    }
    odDisplayFilesFlsProcess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let profileClientInfo = yield getProfile();
                console.log("profileClientInfo " + profileClientInfo);
                let hlOdName = profileClientInfo[1];
                console.log("hlOdName " + hlOdName);
                let formatlClName = hlOdName.split(",")[0];
                console.log("formatlClName " + formatlClName);
                let hlOdEmail = profileClientInfo[0];
                console.log("hlOdEmail " + hlOdEmail);
                sessionStorage.setItem("odClientEmail", profileClientInfo[0]);
                let mongoDbUserId = sessionStorage.getItem('userMnId');
                sendOdClientInfo(formatlClName.replace(/['"]+/g, '').toString(), hlOdEmail.toString(), mongoDbUserId);
                let odAallFiles = yield this.odGetFiles();
                let holdOdItems = this.storeOdFlsFiles(odAallFiles);
                try {
                    if (holdOdItems != undefined || holdOdItems !== null || holdOdItems !== "") {
                        return resolve(holdOdItems);
                    }
                }
                catch (error) {
                    this.errorService.handleError(error);
                    return reject(error);
                }
            }));
        });
    }
    storeOdFlsFiles(odFilesFls) {
        try {
            if (odFilesFls !== undefined || odFilesFls !== null) {
                let savedOdFlsFolders = JSON.parse(odFilesFls);
                let storeOdFlsFolders = savedOdFlsFolders.value;
                for (let index = 0; index < storeOdFlsFolders.length; index++) {
                    let holdOdItems = {};
                    let getOdUrl = "@microsoft.graph.downloadUrl";
                    holdOdItems["odFileName"] = storeOdFlsFolders[index].name;
                    holdOdItems["odFileUrl"] = storeOdFlsFolders[index]["@microsoft.graph.downloadUrl"];
                    this.storeOdFiles.push(holdOdItems);
                }
                return this.storeOdFiles;
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    odGetFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                let myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                let requestOptions = {
                    method: 'GET',
                    headers: myHeaders
                };
                fetch('/api/OdGetFiles', requestOptions)
                    .then((response) => {
                    return response.json();
                })
                    .then((result) => {
                    let holdOdAllFlsFils = result[Object.keys(result)[1]];
                    resolve(holdOdAllFlsFils);
                })
                    .catch(err => {
                    this.errorService.handleError(err);
                    reject(err);
                });
            });
        });
    }
    odDownloadFile(odUrl, odFl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (odUrl !== undefined || odUrl !== null || odUrl !== ""
                    || odFl !== undefined || odFl !== null || odFl !== "") {
                    return yield new Promise((resolve, reject) => {
                        fetch('/api/OdDownload', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                            },
                            body: JSON.stringify({
                                odFileUrl: odUrl,
                                odFileName: odFl
                            })
                        })
                            .then((result) => {
                            return result.json();
                        })
                            .then(response => {
                            let msgDisplay = response[Object.keys(response)[1]];
                            resolve(msgDisplay);
                        })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    odUploadFile(odFl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (odFl !== undefined || odFl !== null || odFl !== "") {
                    return yield new Promise((resolve, reject) => {
                        fetch('/api/OdUpload', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                            },
                            body: JSON.stringify({
                                odUpFileName: odFl
                            })
                        })
                            .then((result) => {
                            return result.json();
                        })
                            .then(response => {
                            let msgDisplay = response[Object.keys(response)[1]];
                            resolve(msgDisplay);
                        })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    odUploadLocalFile(odFl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (odFl !== undefined || odFl !== null || odFl !== "") {
                    return yield new Promise((resolve, reject) => {
                        fetch('/api/OdLocalUpload', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                            },
                            body: JSON.stringify({
                                odUpFileName: odFl
                            })
                        })
                            .then((result) => {
                            return result.json();
                        })
                            .then(response => {
                            let msgDisplay = response[Object.keys(response)[1]];
                            resolve(msgDisplay);
                        })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
    odAccessToken(odToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (odToken !== undefined || odToken !== null || odToken !== "") {
                    return yield new Promise((resolve, reject) => {
                        fetch('/api/OdAccessToken', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                            },
                            body: JSON.stringify({
                                odCode: odToken
                            })
                        })
                            .then((result) => {
                            return result.json();
                        })
                            .then(response => {
                            let msgDisplay = response[Object.keys(response)[1]];
                            resolve(msgDisplay);
                        })
                            .catch((err) => {
                            this.errorService.handleError(err);
                            reject(err);
                        });
                    });
                }
            }
            catch (error) {
                this.errorService.handleError(error);
            }
        });
    }
}
OdCloudService.ɵfac = function OdCloudService_Factory(t) { return new (t || OdCloudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"])); };
OdCloudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OdCloudService, factory: OdCloudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OdCloudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"] }]; }, null); })();
function getProfile() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            fetch('/api/OdProfile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
                .then((result) => {
                return result.json();
            })
                .then(response => {
                let msgDisplay = response[Object.keys(response)[1]];
                let msgBxNameDisplay = response[Object.keys(response)[2]];
                let holdBxClInfo = [];
                holdBxClInfo.push(msgDisplay, msgBxNameDisplay);
                console.log("holdBxClInfo " + holdBxClInfo);
                resolve(holdBxClInfo);
            })
                .catch((err) => {
                this.errorService.handleError(err);
                reject(err);
            });
        });
    });
}
function sendOdClientInfo(getOdName, getOdEmail, getUserMongoId) {
    try {
        if (getOdName !== undefined || getOdName !== null || getOdName !== ""
            || getOdEmail !== undefined || getOdEmail !== null || getOdEmail !== ""
            || getUserMongoId !== undefined || getUserMongoId !== null || getUserMongoId !== "") {
            let odClientValue = JSON.stringify({
                odname: getOdName,
                odemail: getOdEmail,
                usermongoid: getUserMongoId,
            });
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            return fetch('/api/MCOdClient', {
                method: 'POST',
                headers: myHeaders,
                body: odClientValue
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => this.errorService.handleError(err));
        }
    }
    catch (error) {
        this.errorService.handleError(error);
    }
}


/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-login.service */ "./src/app/user-login.service.ts");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-handelers.service */ "./src/app/error-handelers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SignInComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.signedInName);
} }
function SignInComponent_h3_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.signInName);
} }
function SignInComponent_h4_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dear customer, you are already logged in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.customerLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_h3_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dear customer,do you like to delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.customerDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_23_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_div_23_pre_1_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.required);
} }
function SignInComponent_div_30_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_div_30_pre_1_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);
} }
const _c0 = function () { return { standalone: true }; };
let clientIdValue = [];
class SignInComponent {
    constructor(usrLogin, errorService) {
        this.usrLogin = usrLogin;
        this.errorService = errorService;
        this.sInisSingedIn = false;
        this.signInName = "Sign In";
        this.signedInName = "Logged In";
    }
    ngOnInit() {
    }
    readsessionStorageValue(key) {
        try {
            if (key !== undefined || key !== null || key !== "")
                return sessionStorage.getItem(key);
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    customerLogOut() {
        this.usrLogin.logOutMnCustomer();
        sessionStorage.removeItem('userSignedIn');
    }
    sendUserInfo() {
        let userValue = JSON.stringify({
            username: this.username,
            password: this.password
        });
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        return fetch('/api/MCUserInfo', {
            method: 'POST',
            headers: myHeaders,
            body: userValue
        })
            .then(response => response.json())
            .then(data => {
            console.log(data);
            this.signedin();
        })
            .catch(err => this.errorService.handleError(err));
    }
    signedin() {
        console.log('signedin');
        if (sessionStorage.getItem('userSignedIn') === null) {
            this.usrLogin.userSignIn()
                .then(res => {
                console.log("All from app comp " + JSON.stringify(res));
                let userNameFound = false;
                let passwordFound = false;
                let keys = Object.keys(res);
                let userNamevalue = [];
                let passwordvalue = [];
                for (var i = 0; i < keys.length; i++) {
                    userNamevalue.push(res[i].clientUserName);
                    passwordvalue.push(res[i].clientPassword);
                    clientIdValue.push(res[i].clientId);
                }
                if (userNamevalue.includes(this.username) && passwordvalue.includes(this.password)) {
                    userNameFound = true;
                    passwordFound = true;
                }
                if (userNamevalue.includes(this.username) && !passwordvalue.includes(this.password)) {
                    userNameFound = true;
                    passwordFound = false;
                }
                if (!userNamevalue.includes(this.username) && !passwordvalue.includes(this.password)) {
                    userNameFound = false;
                    passwordFound = false;
                }
                if (!userNamevalue.includes(this.username) && passwordvalue.includes(this.password)) {
                    userNameFound = false;
                    passwordFound = true;
                }
                if (userNameFound && passwordFound) {
                    this.sInisSingedIn = true;
                    this.signInName = this.signedInName;
                    if (sessionStorage.getItem('userSignedUp') == 'SignedUpUser') {
                        sessionStorage.removeItem('userSignedUp');
                    }
                    sessionStorage.setItem('userSignedIn', 'SignedUser');
                    sessionStorage.setItem('userMnId', clientIdValue[0]);
                    window.location.replace("https://stormy-headland-33273.herokuapp.com/home");
                    alert('user name and password found user is signed in');
                    return this.usrLogin.isSingedIn = true;
                }
                if (userNameFound && passwordFound == false) {
                    alert('password doesnot match up, try again');
                }
                if (userNameFound == false && passwordFound == false) {
                    alert('account doesnot exist try again or sign up');
                }
                if (userNameFound == false && passwordFound) {
                    alert('user name doesnot match up, try again');
                }
            })
                .catch(err => this.errorService.handleError(err));
        }
    }
    customerDelete() {
        this.usrLogin.deleteCustomer();
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 34, vars: 19, consts: [[1, "siBar", "container-fluid"], ["src", "../../assets/images/multicloud.png", "alt", "multicloud Logo", 1, "multicloudImg"], [1, "signIn"], ["ngDefaultControl", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "sI-class", 4, "ngIf"], [4, "ngIf"], ["class", "btn btn-info dlLgBtn", 3, "click", 4, "ngIf"], ["class", "btn btn-danger dlLgBtn", 3, "click", 4, "ngIf"], [1, "row", 3, "hidden"], [1, "column"], [1, "form-group"], ["for", "uname"], ["type", "text", "id", "userNameSiInput", "name", "userNameSiInput", "placeholder", "jdoe", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["userNameSiInput", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "pword"], ["type", "password", "id", "pswSiInput", "name", "pswSiInput", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["pswSiInput", "ngModel"], ["type", "submit", 1, "btn", "btn-info", "sbSubmit", 3, "disabled", "click"], [1, "sI-class"], [1, "btn", "btn-info", "dlLgBtn", 3, "click"], [1, "btn", "btn-danger", "dlLgBtn", 3, "click"], [1, "alert", "alert-danger"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_div_ngModelChange_3_listener($event) { return ctx.sInisSingedIn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignInComponent_h3_4_Template, 2, 1, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignInComponent_h3_5_Template, 2, 1, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignInComponent_h4_8_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignInComponent_button_10_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignInComponent_h3_12_Template, 2, 0, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignInComponent_button_14_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_21_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignInComponent_div_23_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_28_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignInComponent_div_30_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_32_listener() { return ctx.sendUserInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign in to Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sInisSingedIn)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readsessionStorageValue("userSignedIn") == "SignedUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readsessionStorageValue("userSignedIn") === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sInisSingedIn || ctx.readsessionStorageValue("userSignedIn") == "SignedUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sInisSingedIn || ctx.readsessionStorageValue("userSignedIn") == "SignedUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sInisSingedIn || ctx.readsessionStorageValue("userSignedIn") == "SignedUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sInisSingedIn || ctx.readsessionStorageValue("userSignedIn") == "SignedUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.sInisSingedIn || ctx.readsessionStorageValue("userSignedIn") == "SignedUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r6.valid || !_r8.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]], styles: [".multicloudImg[_ngcontent-%COMP%] {\n  margin-left: 150px;\n  margin-top: 50px;\n  width: 180px;\n  float: left;\n}\n.sI-class[_ngcontent-%COMP%]{\n  margin-left: 40px;\n  margin-top: 30px;\n  font-size: 35px;\n  color: rgb(30, 61, 121);\n  margin-bottom: 30px;\n}\n.signIn[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 50px;\n  margin-left: 150px;\n}\n.row[_ngcontent-%COMP%] {\n    display: flex;\n    margin-left: 50px;\n    margin-top: 50px;\n}\n.container-fluid[_ngcontent-%COMP%] {\n    background-color: hsla(219, 69%, 35%, 0.884);\n    width:180%;\n    z-index: 2;\n    bottom: 0;\n    left: 0;\n    right:0;\n    overflow: hidden;\n    margin-right:0;\n    margin-left:0;\n    padding-right:0;\n    padding-left:0;\n}\n.column[_ngcontent-%COMP%] {\n    flex: 50%;\n  }\n.form-group[_ngcontent-%COMP%]{\n    width: 300px;\n  }\n.siBar[_ngcontent-%COMP%]{\n   margin-top: 100px;\n   margin-bottom: 50px; \n}\n.sbSubmit[_ngcontent-%COMP%]{\n    margin-bottom: 50px; \n}\nh3[_ngcontent-%COMP%]{\n    font-size: 25px;\n    color: rgb(30, 61, 121);\n}\nh4[_ngcontent-%COMP%]{\n  margin-top: 30px;\n  font-size: 25px;\n  color: rgb(30, 61, 121);\n  margin-bottom: 30px;\n}\n.dlLgBtn[_ngcontent-%COMP%]{\n  width: 95px;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLFVBQVU7SUFDVixVQUFVO0lBQ1YsU0FBUztJQUNULE9BQU87SUFDUCxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFNBQVM7RUFDWDtBQUNGO0lBQ0ksWUFBWTtFQUNkO0FBQ0Y7R0FDRyxpQkFBaUI7R0FDakIsbUJBQW1CO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11bHRpY2xvdWRJbWcge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc0ktY2xhc3N7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiByZ2IoMzAsIDYxLCAxMjEpO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNpZ25JbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIxOSwgNjklLCAzNSUsIDAuODg0KTtcbiAgICB3aWR0aDoxODAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6MDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1yaWdodDowO1xuICAgIG1hcmdpbi1sZWZ0OjA7XG4gICAgcGFkZGluZy1yaWdodDowO1xuICAgIHBhZGRpbmctbGVmdDowO1xufVxuLmNvbHVtbiB7XG4gICAgZmxleDogNTAlO1xuICB9XG4uZm9ybS1ncm91cHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbi5zaUJhcntcbiAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgbWFyZ2luLWJvdHRvbTogNTBweDsgXG59XG4uc2JTdWJtaXR7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDsgXG59XG5oM3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IHJnYigzMCwgNjEsIDEyMSk7XG59XG5oNHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogcmdiKDMwLCA2MSwgMTIxKTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5kbExnQnRue1xuICB3aWR0aDogOTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css']
            }]
    }], function () { return [{ type: _user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"] }, { type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-login.service */ "./src/app/user-login.service.ts");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-handelers.service */ "./src/app/error-handelers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SignUpComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.signedUpName);
} }
function SignUpComponent_h3_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.signUpName);
} }
function SignUpComponent_h4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dear customer, you are already signed up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_15_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_15_pre_1_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function SignUpComponent_div_22_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_22_pre_1_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
} }
function SignUpComponent_div_29_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_29_pre_1_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
} }
function SignUpComponent_div_36_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_36_pre_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_36_pre_1_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_36_pre_2_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
} }
function SignUpComponent_div_43_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_43_pre_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min Length 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_43_pre_1_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_43_pre_2_Template, 2, 0, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.minlength);
} }
const _c0 = function () { return { standalone: true }; };
class SignUpComponent {
    constructor(usrLogin, errorService) {
        this.usrLogin = usrLogin;
        this.errorService = errorService;
        this.signedUpName = "Signed Up";
        this.signUpName = "Sign Up";
        this.sUpisSingedUp = false;
    }
    ngOnInit() {
    }
    readsessionStorageValue(key) {
        try {
            if (key !== undefined || key !== null || key !== "") {
                return sessionStorage.getItem(key);
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
    signedup() {
        try {
            if (sessionStorage.getItem('userSignedUp') === null) {
                let newName = this.name;
                let newlastName = this.lastname;
                let newUserName = this.username;
                let newEmail = this.email;
                let newPassword = this.password;
                let newSignedup = [];
                newSignedup.push(newName, newlastName, newUserName, newEmail, newPassword);
                console.log('signedup array is ' + newEmail + ' ' + newPassword);
                this.usrLogin.userSiginUp(newName, newlastName, newUserName, newEmail, newPassword);
                this.sUpisSingedUp = true;
                this.usrLogin.isSingedUp = true;
                sessionStorage.setItem('userSignedUp', 'SignedUpUser');
                window.location.replace("https://stormy-headland-33273.herokuapp.com/home");
                return this.usrLogin.isSingedUp;
            }
        }
        catch (error) {
            this.errorService.handleError(error);
        }
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 48, vars: 28, consts: [[1, "spBar", "container-fluid"], ["src", "../../assets/images/multicloud.png", "alt", "multicloud Logo", 1, "multicloudImg"], [1, "signUp"], ["ngDefaultControl", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "sP-class", 4, "ngIf"], [4, "ngIf"], [1, "row", 3, "hidden"], [1, "column"], [1, "form-group"], ["for", "fname"], ["type", "text", "id", "nameInput", "name", "nameInput", "placeholder", "John", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nameInput", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "lname"], ["type", "text", "id", "lastNameInput", "name", "lastNameInput", "placeholder", "Doe", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["lastNameInput", "ngModel"], ["for", "uname"], ["type", "text", "id", "userNameInput", "name", "userNameInput", "placeholder", "jdoe", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["userNameInput", "ngModel"], ["for", "uemail"], ["type", "email", "id", "emailInput", "name", "emailInput", "placeholder", "john@doe.com", "required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["emailInput", "ngModel"], ["for", "pword"], ["type", "password", "id", "pswInput", "name", "pswInput", "placeholder", "Password", "required", "", "minlength", "4", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["pswInput", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "sbSubmit", 3, "disabled", "click"], [1, "sP-class"], [1, "alert", "alert-danger"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_div_ngModelChange_3_listener($event) { return ctx.sUpisSingedUp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignUpComponent_h3_4_Template, 2, 1, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignUpComponent_h3_5_Template, 2, 1, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignUpComponent_h4_6_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_13_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignUpComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_20_listener($event) { return ctx.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignUpComponent_div_22_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_27_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignUpComponent_div_29_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_34_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SignUpComponent_div_36_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_41_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignUpComponent_div_43_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_45_listener() { return ctx.signedup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sUpisSingedUp)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readsessionStorageValue("userSignedUp") == "SignedUpUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readsessionStorageValue("userSignedUp") === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sUpisSingedUp || ctx.readsessionStorageValue("userSignedUp") == "SignedUpUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.sUpisSingedUp || ctx.readsessionStorageValue("userSignedUp") == "SignedUpUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid || !_r5.valid || !_r7.valid || !_r9.valid || !_r11.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]], styles: [".multicloudImg[_ngcontent-%COMP%] {\n  margin-left: 150px;\n  margin-top: 50px;\n  width: 180px;\n  float: left;\n}\n.signUp[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 50px;\n  margin-left: 150px;\n}\n.row[_ngcontent-%COMP%] {\n    display: flex;\n    margin-left: 50px;\n    margin-top: 50px;\n  }\n.container-fluid[_ngcontent-%COMP%] {\n    background-color: hsla(219, 69%, 35%, 0.884);\n    width:180%;\n    z-index: 2;\n    bottom: 0;\n    left: 0;\n    right:0;\n    overflow: hidden;\n    margin-right:0;\n    margin-left:0;\n    padding-right:0;\n    padding-left:0;\n}\n.column[_ngcontent-%COMP%] {\n    flex: 20%;\n  }\n.form-group[_ngcontent-%COMP%]{\n    width: 300px;\n  }\nh3[_ngcontent-%COMP%]{\n    margin-left: 40px;\n  }\n.spBar[_ngcontent-%COMP%]{\n    margin-top: 100px;\n    margin-bottom: 50px; \n  }\n.sbSubmit[_ngcontent-%COMP%]{\n    margin-bottom: 50px; \n  }\n.sP-class[_ngcontent-%COMP%]{\n    margin-left: 40px;\n    margin-top: 30px;\n    font-size: 35px;\n    color: rgb(30, 61, 121);\n    margin-bottom: 30px;\n  }\nh4[_ngcontent-%COMP%]{\n  margin-top: 30px;\n  font-size: 25px;\n  color: rgb(30, 61, 121);\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixVQUFVO0lBQ1YsU0FBUztJQUNULE9BQU87SUFDUCxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtBQUNGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXVsdGljbG91ZEltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5zaWduVXAge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjE5LCA2OSUsIDM1JSwgMC44ODQpO1xuICAgIHdpZHRoOjE4MCU7XG4gICAgei1pbmRleDogMjtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDowO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXJpZ2h0OjA7XG4gICAgbWFyZ2luLWxlZnQ6MDtcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgcGFkZGluZy1sZWZ0OjA7XG59XG4gIC5jb2x1bW4ge1xuICAgIGZsZXg6IDIwJTtcbiAgfVxuICAuZm9ybS1ncm91cHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgaDN7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLnNwQmFye1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7IFxuICB9XG4gIC5zYlN1Ym1pdHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyBcbiAgfVxuICAuc1AtY2xhc3N7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6IHJnYigzMCwgNjEsIDEyMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuaDR7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHJnYigzMCwgNjEsIDEyMSk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return [{ type: _user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"] }, { type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-login.service.ts":
/*!***************************************!*\
  !*** ./src/app/user-login.service.ts ***!
  \***************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_handelers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handelers.service */ "./src/app/error-handelers.service.ts");



class UserLoginService {
    constructor(errorService) {
        this.errorService = errorService;
        this.isSingedUp = false;
        this.isSingedIn = false;
    }
    userSiginUp(userName, userlastName, userUserName, userEmail, userPassword) {
        let userValue = JSON.stringify({
            name: userName,
            lastname: userlastName,
            username: userUserName,
            email: userEmail,
            password: userPassword
        });
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        return fetch('/api/MCUser', {
            method: 'POST',
            headers: myHeaders,
            body: userValue
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => this.errorService.handleError(err));
    }
    userSignIn() {
        return new Promise((resolve, reject) => {
            let userValue = JSON.stringify({
                usrResult: "value posted"
            });
            fetch('/api/MCUserByUsrNmPwd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: userValue
            })
                .then(response => { return response.json(); })
                .then(getdata => {
                console.log("getdata from Service " + JSON.stringify(getdata));
                let findAllMongoData = [];
                let newUserMongoData = {};
                newUserMongoData['clientUserName'] = getdata.username;
                newUserMongoData['clientPassword'] = getdata.password;
                newUserMongoData['clientId'] = getdata._id;
                findAllMongoData.push(newUserMongoData);
                console.log("elementEmail from Service " + JSON.stringify(findAllMongoData));
                resolve(findAllMongoData);
            })
                .catch((err) => this.errorService.handleError(err));
        });
    }
    logOutMnCustomer() {
        fetch('/api/LogOutMCUser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) => { return console.log(response); })
            .catch((err) => this.errorService.handleError(err));
    }
    deleteCustomer() {
        sessionStorage.clear();
        fetch('/api/DeleteMCUser', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) => { return console.log(response); })
            .catch((err) => this.errorService.handleError(err));
    }
}
UserLoginService.ɵfac = function UserLoginService_Factory(t) { return new (t || UserLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handelers_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandelersService"])); };
UserLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserLoginService, factory: UserLoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _error_handelers_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandelersService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: true
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bcuser/Git/angularPrj/isit422-testproject/angular-multiclouds/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map