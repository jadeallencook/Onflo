webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p#error-message {\n  color: red;\n  text-align: left;\n}\n\ndiv#content {\n  background-color: #F5F5F5;\n}\ndiv.login-box {\n  text-align: center;\n}\n\nimg#onflo-logo {\n  width: 50%;\n  margin: 25px auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<app-js-warning></app-js-warning>\n\n<div id=\"content\">\n  <app-breadcrum></app-breadcrum>\n\n  <!-- dashboard outlet -->\n  <router-outlet *ngIf=\"this.FirebaseAuthService.ActiveUser\" id=\"angular-content\"></router-outlet>\n\n  <!-- signin outlet -->\n  <div *ngIf=\"!this.FirebaseAuthService.ActiveUser\" id=\"login-wrapper\">\n    <div class=\"login-box\">\n      <img src=\"http://onflo.io/images/onflo-black-logo.png\" alt=\"Onflo Logo\" id=\"onflo-logo\"><br />\n      Automated Online Workflow\n      <form class=\"form-horizontal\" action=\"index.html\" method=\"post\">\n        <fieldset>\n\n          <div class=\"input-prepend\" title=\"Username\">\n            <span class=\"add-on\"><i class=\"halflings-icon user\"></i></span>\n            <input [(ngModel)]=\"email\" class=\"input-large span10\" name=\"email\" id=\"email\" type=\"text\" placeholder=\"email\">\n          </div>\n          <div class=\"clearfix\"></div>\n\n          <div class=\"input-prepend\" title=\"Password\">\n            <span class=\"add-on\"><i class=\"halflings-icon lock\"></i></span>\n            <input [(ngModel)]=\"password\" class=\"input-large span10\" name=\"password\" id=\"password\" type=\"password\" placeholder=\"password\">\n          </div>\n\n          <p id=\"error-message\" *ngIf=\"this.FirebaseAuthService.errorMsg\">{{ this.FirebaseAuthService.errorMsg }}</p>\n\n          <div class=\"clearfix\"></div>\n\n          <div class=\"button-login\">\n            <button type=\"submit\" (click)=\"this.FirebaseAuthService.login(this.email, this.password)\" routerLink=\"home\" class=\"btn btn-primary\">Login</button>\n            <button type=\"submit\" (click)=\"this.FirebaseAuthService.createAccount(this.email, this.password)\" routerLink=\"home\" class=\"btn btn-default\">Create Account</button>\n          </div>\n\n          <div class=\"clearfix\"></div>\n\n          <hr>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__ = __webpack_require__("../../../../../src/app/services/firebase-auth/firebase-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.FirebaseAuthService.errorMsg = '';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_solutions_solutions_component__ = __webpack_require__("../../../../../src/app/pages/solutions/solutions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_analytics_analytics_component__ = __webpack_require__("../../../../../src/app/pages/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_learn_learn_component__ = __webpack_require__("../../../../../src/app/pages/learn/learn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_breadcrum_breadcrum_component__ = __webpack_require__("../../../../../src/app/components/breadcrum/breadcrum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_js_warning_js_warning_component__ = __webpack_require__("../../../../../src/app/components/js-warning/js-warning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_solutions_form_solutions_form_component__ = __webpack_require__("../../../../../src/app/components/solutions-form/solutions-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_window_ref_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'solutions', component: __WEBPACK_IMPORTED_MODULE_10__pages_solutions_solutions_component__["a" /* SolutionsComponent */] },
    { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_11__pages_analytics_analytics_component__["a" /* AnalyticsComponent */] },
    { path: 'learn', component: __WEBPACK_IMPORTED_MODULE_12__pages_learn_learn_component__["a" /* LearnComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin_component__["a" /* AdminComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_solutions_solutions_component__["a" /* SolutionsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_analytics_analytics_component__["a" /* AnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_learn_learn_component__["a" /* LearnComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_breadcrum_breadcrum_component__["a" /* BreadcrumComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_js_warning_js_warning_component__["a" /* JsWarningComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_solutions_form_solutions_form_component__["a" /* SolutionsFormComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin_component__["a" /* AdminComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_window_ref_window_ref_service__["a" /* WindowRefService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/breadcrum/breadcrum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li#current-page {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/breadcrum/breadcrum.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n  <li>\n    <i class=\"icon-home\"></i>\n    <a routerLink=\"/home\">Dashboard</a>\n    <i class=\"icon-angle-right\"></i>\n  </li>\n  <li id=\"current-page\">{{ this.currentPage }}</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/breadcrum/breadcrum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumComponent = (function () {
    function BreadcrumComponent(router) {
        var _this = this;
        this.router = router;
        this.currentPage = 'home';
        router.events.subscribe(function (url) {
            _this.currentPage = url.url.substr(1);
            if (url.url.length === 1)
                _this.currentPage = 'home';
        });
    }
    BreadcrumComponent.prototype.ngOnInit = function () {
    };
    return BreadcrumComponent;
}());
BreadcrumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-breadcrum',
        template: __webpack_require__("../../../../../src/app/components/breadcrum/breadcrum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/breadcrum/breadcrum.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], BreadcrumComponent);

var _a;
//# sourceMappingURL=breadcrum.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/js-warning/js-warning.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/js-warning/js-warning.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript>\n  <div class=\"alert alert-block span10\">\n    <h4 class=\"alert-heading\">Warning!</h4>\n    <p>You need to have <a href=\"http://en.wikipedia.org/wiki/JavaScript\" target=\"_blank\">JavaScript</a> enabled to use this site.</p>\n  </div>\n</noscript>\n"

/***/ }),

/***/ "../../../../../src/app/components/js-warning/js-warning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsWarningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JsWarningComponent = (function () {
    function JsWarningComponent() {
    }
    JsWarningComponent.prototype.ngOnInit = function () {
    };
    return JsWarningComponent;
}());
JsWarningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-js-warning',
        template: __webpack_require__("../../../../../src/app/components/js-warning/js-warning.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/js-warning/js-warning.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JsWarningComponent);

//# sourceMappingURL=js-warning.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-left\" class=\"span2\">\n  <div class=\"nav-collapse sidebar-nav\">\n    <ul class=\"nav nav-tabs nav-stacked main-menu\" *ngIf=\"this.FirebaseAuthService.ActiveUser\">\n      <li><a href=\"../pages/home\" id=\"navbar-logo\">\n        <img src=\"http://onflo.io/images/onflo-white-logo.png\" />\n      </a></li>\n\n      <!-- main navigation -->\n      <li><a routerLink=\"/home\"><i class=\"icon-bar-chart\"></i><span class=\"hidden-tablet\"> Dashboard</span></a></li>\n      <li><a routerLink=\"/solutions\"><i class=\"icon-list-alt\"></i><span class=\"hidden-tablet\"> Solutions</span></a></li>\n      <li><a routerLink=\"/analytics\"><i class=\"icon-dashboard\"></i><span class=\"hidden-tablet\"> Analytics</span></a></li>\n      <!-- <li><a routerLink=\"/learn\"><i class=\"icon-facetime-video\"></i><span class=\"hidden-tablet\"> Learn</span></a></li> -->\n      <li><a routerLink=\"/settings\"><i class=\"icon-edit\"></i><span class=\"hidden-tablet\"> Settings</span></a></li>\n      <li><a (click)=\"this.FirebaseAuthService.logout()\"><i class=\"icon-off\"></i><span class=\"hidden-tablet\"> Logout</span></a></li>\n\n      <!-- admin -->\n      <li *ngIf=\"this.FirebaseAuthService.ActiveUser.email === 'hello@onflo.io'\">\n        <a routerLink=\"/admin\"><i class=\"icon-unlock\"></i><span class=\"hidden-tablet\"> Admin</span></a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__ = __webpack_require__("../../../../../src/app/services/firebase-auth/firebase-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/solutions-form/solutions-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#solutions-form {\n  margin-bottom: 25px;\n}\n\ntextarea {\n  width: 75%;\n  max-width: 500px;\n}\n\n.date {\n  font-size: .5em;\n}\n\ndiv.desc a {\n  cursor: pointer;\n}\n\ndiv.alert {\n  width: 75%;\n  max-width: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/solutions-form/solutions-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"solutions-form\">\n  <div *ngIf=\"!this.submitted\">\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"prependedInput\">What can we help you with?</label>\n      <textarea id=\"prependedInput\" size=\"32\" type=\"text\" placeholder=\"Tell us a little more...\" [(ngModel)]=\"issue\"></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"this.submitIssue()\">Get Started</button>\n    <button class=\"btn\" (click)=\"this.issue = ''\">Cancel</button>\n  </div>\n  <div class=\"alert alert-success\" *ngIf=\"this.submitted\">\n    <strong>Success!</strong> We will be getting back to you with a solution ASAP.<br /><br />\n    <a><strong (click)=\"this.reset()\">Click here to submit another</strong></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/solutions-form/solutions-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionsFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__ = __webpack_require__("../../../../../src/app/services/firebase-auth/firebase-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolutionsFormComponent = (function () {
    function SolutionsFormComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
        this.issue = '';
        this.submitted = false;
    }
    SolutionsFormComponent.prototype.ngOnInit = function () {
    };
    SolutionsFormComponent.prototype.reset = function () {
        this.submitted = false;
        this.issue = '';
    };
    SolutionsFormComponent.prototype.submitIssue = function () {
        var uid = this.FirebaseAuthService.ActiveUser.uid;
        var date = new Date().toString();
        if (this.issue.length > 1) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('issues').push({
                uid: uid,
                msg: this.issue,
                date: date
            });
            this.submitted = true;
        }
    };
    return SolutionsFormComponent;
}());
SolutionsFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-solutions-form',
        template: __webpack_require__("../../../../../src/app/components/solutions-form/solutions-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/solutions-form/solutions-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], SolutionsFormComponent);

var _a;
//# sourceMappingURL=solutions-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.box-content {\n  width: 75%;\n  max-width: 500px;\n}\n\nul.dashboard-list li {\n  padding-bottom: 5px;\n  display: block;\n}\n\n.box-content textarea {\n  width: 75%;\n  max-width: 500px;\n  min-width: 250px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Admin</h1>\n<br />\n\n<!-- read deals -->\n<div class=\"box-content\" *ngIf=\"!activeDeal\">\n  <ul class=\"dashboard-list\">\n    <li *ngFor=\"let deal of this.deals\">\n      <img class=\"avatar\" src=\"../../assets/img/avatar.png\">\n      <strong>User:</strong> {{ deal.uid }}<br>\n      <strong>Since:</strong> {{ deal.date }}<br>\n      <strong>Status:</strong> <span class=\"label label-warning\">Pending...</span>\n      <br /><br />\n      <strong>Details:</strong> {{ deal.msg }}<br>\n      <a (click)=\"showDeal(deal.dealUID)\">Reply</a> or <a (click)=\"removeDeal(deal.dealUID)\">Delete</a> ({{ deal.dealUID }})\n    </li>\n  </ul>\n</div>\n\n<!-- reply to deals -->\n<div class=\"box-content\" *ngIf=\"activeDeal\">\n  <h2>Reply to deal</h2>\n  <br />\n  <strong>UID:</strong> {{ activeDeal.uid }}<br />\n  <strong>Since:</strong> {{ activeDeal.date }}<br>\n  <strong>Status:</strong> <span class=\"label label-warning\">Pending...</span>\n  <br /><br />\n  <div *ngIf=\"client\">\n    <span *ngIf=\"client.business\"><strong>Business:</strong> {{ client.business }}<br></span>\n    <span *ngIf=\"client.website\"><strong>Website:</strong> {{ client.website }}<br></span>\n    <span *ngIf=\"client.slack\"><strong>Slack:</strong> {{ client.slack }}<br></span>\n    <span *ngIf=\"client.phone\"><strong>Phone:</strong> {{ client.phone }}<br></span>\n    <br />\n  </div>\n  <strong>Details:</strong> {{ activeDeal.msg }}\n  <br /><br />\n  <input placeholder=\"What's The Goal?\" type=\"text\" /><br />\n  <textarea placeholder=\"How are we going to do it?\" size=\"32\" type=\"text\"></textarea><br />\n  <input placeholder=\"How Much?\" type=\"number\" /><br />\n  <input placeholder=\"How Many Days?\" type=\"number\" />\n  <br /><br />\n  <a (click)=\"activeDeal=false\">Back To All Deals</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent() {
        this.activeDeal = false;
        this.client = false;
    }
    AdminComponent.prototype.showDeal = function (uid) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('issues/' + uid).once('value').then(function (snapshot) {
            _this.activeDeal = snapshot.val();
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + _this.activeDeal.uid).once('value').then(function (snapshot) {
                _this.client = snapshot.val();
            });
        });
    };
    AdminComponent.prototype.removeDeal = function (uid) {
        console.log(uid);
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('issues/').once('value').then(function (snapshot) {
            _this.deals = Object.keys(snapshot.val()).map(function (key) {
                var deal = snapshot.val()[key];
                deal.dealUID = key;
                return deal;
            });
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/pages/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/analytics/analytics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  margin-top: 25px;\n}\n\n.analytics-chart {\n  width: 45%;\n  margin-right: 5px;\n  display: inline-block;\n}\n\n@media only screen and (max-width: 767px) {\n\n\t.analytics-chart {\n\t\twidth: 75%;\n\t}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Analytics</h1>\n<section id=\"view-selector\"></section>\n<section class=\"analytics-chart\" id=\"timeline\"></section>\n<div class=\"analytics-chart\" id=\"chart-1-container\"></div>\n<section id=\"auth-button\"></section><br />\n<p><b>If your analytics don't load, please refesh</b></p>\n<br />\n<p>Don't have Google Analytics installed?</p>\n<a routerLink=\"/solutions\">Click here to tell us what you need help with!</a>\n"

/***/ }),

/***/ "../../../../../src/app/pages/analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_ref_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref/window-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsComponent = (function () {
    function AnalyticsComponent(windowRef) {
        this.windowRef = windowRef;
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        // reference window {}
        var window = this.windowRef.nativeWindow;
        // init connection with ga
        window.gapi.analytics.ready(function () {
            // authorize the user
            var CLIENT_ID = '952694402859-ciaj7o98qkqjj5mmdbiros5v99labv0g.apps.googleusercontent.com';
            window.gapi.analytics.auth.authorize({
                container: 'auth-button',
                clientid: CLIENT_ID,
            });
            // create the view selectors
            var viewSelector = new window.gapi.analytics.ViewSelector({
                container: 'view-selector'
            });
            var dataChart1 = new window.gapi.analytics.googleCharts.DataChart({
                query: {
                    metrics: 'ga:sessions',
                    dimensions: 'ga:city',
                    'start-date': '30daysAgo',
                    'end-date': 'yesterday',
                    'max-results': 6,
                    sort: '-ga:sessions'
                },
                chart: {
                    container: 'chart-1-container',
                    type: 'PIE',
                    options: {
                        width: '100%',
                        pieHole: 4 / 9,
                        backgroundColor: '#F5F5F5'
                    }
                }
            });
            // create the timeline chart.
            var timeline = new window.gapi.analytics.googleCharts.DataChart({
                reportType: 'ga',
                query: {
                    metrics: 'ga:sessions',
                    dimensions: 'ga:date'
                },
                chart: {
                    type: 'LINE',
                    container: 'timeline',
                    options: {
                        title: 'Sessions over the past week.',
                        fontSize: 12,
                        backgroundColor: '#F5F5F5'
                    }
                }
            });
            // hook up the components to work together
            viewSelector.execute();
            viewSelector.on('change', function (ids) {
                var newIds = {
                    query: {
                        ids: ids
                    }
                };
                timeline.set(newIds).execute();
                dataChart1.set({ query: { ids: ids } }).execute();
            });
        });
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-analytics',
        template: __webpack_require__("../../../../../src/app/pages/analytics/analytics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/analytics/analytics.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_window_ref_window_ref_service__["a" /* WindowRefService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_window_ref_window_ref_service__["a" /* WindowRefService */]) === "function" && _a || Object])
], AnalyticsComponent);

var _a;
//# sourceMappingURL=analytics.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<h1>Dashboard</h1>\n<br />\n<h2>Welcome to your Onflo dashboard!</h2>\n<br />\n\n<!-- features break down -->\n<p><i>Features are under construction and will be available soon.</i></p>\n<br />\n<ul>\n  <!-- solutions -->\n  <li><a routerLink=\"/solutions\">Solutions</a></li>\n  <ul>\n    <li>Connect with our team to solve your problems.</li>\n    <li>Submit issues and receive quotes on fixes.</li>\n    <li>Need an upcoming promotion? We can help!</li>\n    <li>Website have bugs? Don't worry, we have solutions!</li>\n  </ul>\n  <!-- analytics -->\n  <li><a routerLink=\"/analytics\">Analytics</a></li>\n  <ul>\n    <li>Import your Google Analytics to our Dashboard.</li>\n    <li>Don't understand something? Ask us questions!</li>\n    <li>Receive advice for growing your online presence.</li>\n  </ul>\n  <!-- learn -->\n  <li><a routerLink=\"/home\">Learn (Coming Soon)</a></li>\n  <ul>\n    <li>Custom videos to help you get things done!</li>\n    <li>Step by step instructions for running an online business.</li>\n  </ul>\n  <!-- learn -->\n  <li><a routerLink=\"/home\">Automation (Coming Soon)</a></li>\n  <ul>\n    <li>Get things done while you're sleeping with these automation tools.</li>\n    <li>Instagram, Twitter, Facebook - advanced tagging options.</li>\n    <li>Add your own settings to the bot so it's personalized.</li>\n  </ul>\n  <!-- markter -->\n  <li><a routerLink=\"/home\">Customers (Coming Soon)</a></li>\n  <ul>\n    <li>Keep track of your customers and their rewards.</li>\n    <li>Customizable pipeline for sales.</li>\n  </ul>\n  <!-- markter -->\n  <li><a routerLink=\"/home\">Reviews (Coming Soon)</a></li>\n  <ul>\n    <li>Read all your reviews in one place.</li>\n  </ul>\n</ul>\n\n<p><i>Please hold tight until features are available!</i></p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/learn/learn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/learn/learn.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Learn</h1>\n<br />\n<h2>Coming soon...</h2>\n"

/***/ }),

/***/ "../../../../../src/app/pages/learn/learn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnComponent = (function () {
    function LearnComponent() {
    }
    LearnComponent.prototype.ngOnInit = function () {
    };
    return LearnComponent;
}());
LearnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-learn',
        template: __webpack_require__("../../../../../src/app/pages/learn/learn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/learn/learn.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LearnComponent);

//# sourceMappingURL=learn.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.input-group label {\n  padding-top: 5px;\n  margin-right: 25px;\n  width: 50px;\n  float: left;\n  font-weight: bold;\n}\n\ndiv.input-group {\n  display: block;\n  padding: 0px;\n  margin: -10px 0px;\n}\n\ndiv.alert {\n  width: 75%;\n  max-width: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\n\n<br /><br />\n\n<div class=\"input-group\">\n  <label class=\"control-label\" for=\"focusedInput\">Business</label>\n  <input class=\"input-xlarge focused\" type=\"text\" [(ngModel)]=\"business\" placeholder=\"Business Name\">\n</div><br />\n<div class=\"input-group\">\n  <label class=\"control-label\" for=\"focusedInput\">Phone</label>\n  <input class=\"input-xlarge focused\" type=\"text\" [(ngModel)]=\"phone\" placeholder=\"(555) 555-5555\">\n</div><br />\n<div class=\"input-group\">\n  <label class=\"control-label\" for=\"focusedInput\">Website</label>\n  <input class=\"input-xlarge focused\" type=\"text\" [(ngModel)]=\"website\" placeholder=\"mybusiness.com\">\n</div><br /><div class=\"input-group\">\n  <label class=\"control-label\" for=\"focusedInput\">Slack</label>\n  <input class=\"input-xlarge focused\" type=\"text\" [(ngModel)]=\"slack\" placeholder=\"Slack Channel\">\n</div><br /><div class=\"input-group\">\n  <label class=\"control-label\" for=\"focusedInput\">Email</label>\n  <input class=\"input-xlarge focused\" type=\"text\" placeholder=\"{{ this.FirebaseAuthService.ActiveUser.email }}\" disabled>\n</div><br />\n<div class=\"alert alert-success\" *ngIf=\"this.changesSaved\">\n  <strong>Success!</strong> Your changes were successfully saved.\n</div>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"this.saveChanges()\">Save Changes</button>\n<br /><br />\n<p>Don't have a Slack channel setup for your team?</p>\n<a routerLink=\"/solutions\">Click here to tell us what you need help with!</a>\n"

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__ = __webpack_require__("../../../../../src/app/services/firebase-auth/firebase-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(FirebaseAuthService) {
        var _this = this;
        this.FirebaseAuthService = FirebaseAuthService;
        this.business = '';
        this.phone = '';
        this.website = '';
        this.slack = '';
        this.changesSaved = false;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('users/' + this.FirebaseAuthService.ActiveUser.uid).on('value', function (snapshot) {
            var user = snapshot.val();
            if (user.business)
                _this.business = user.business;
            if (user.phone)
                _this.phone = user.phone;
            if (user.website)
                _this.website = user.website;
            if (user.slack)
                _this.slack = user.slack;
        });
    }
    SettingsComponent.prototype.saveChanges = function () {
        var _this = this;
        var date = new Date().toString();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('users/' + this.FirebaseAuthService.ActiveUser.uid).set({
            updated: date,
            business: this.business,
            phone: this.phone,
            website: this.website,
            slack: this.slack
        }).then(function () {
            _this.changesSaved = true;
            var successMsgOn = setInterval(function () {
                _this.changesSaved = false;
                clearInterval(successMsgOn);
            }, 5000);
        });
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/pages/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/solutions/solutions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#solutions-container {\n  display: block;\n  float: none;\n  position: relative;\n}\n\np {\n  width: 100%;\n  max-width: 750px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/solutions/solutions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Solutions</h1>\n<br />\n<h2>Need Help? We're Here For You!</h2>\n<br />\n\n\n<app-solutions-form></app-solutions-form>\n\n<h2>Example (No Submissions Yet)</h2>\n<p>Once you start submitting projects, they will start to populate like this below.</p>\n\n<br />\n\n<div class=\"span7\" id=\"solutions-container\">\n\n  <div class=\"priority high\"><span>Needs Approval</span></div>\n\n  <div class=\"task high\">\n    <div class=\"desc\">\n      <div class=\"title\">Install Google Analytics</div>\n      <div>Let's get you started with Google Analytics! Once you approve this request we will get started installing GA onto your website. From there we can help you learn more about your web presence.</div>\n      <br />\n      <a>Approve</a> or <a>Remove</a>\n    </div>\n    <div class=\"time\">\n      <div class=\"date\">$75</div>\n      <div>Est. 1 day</div>\n    </div>\n  </div>\n\n  <div class=\"priority medium\"><span>In Progress</span></div>\n\n  <div class=\"task medium\">\n    <div class=\"desc\">\n      <div class=\"title\">Brand Social Media</div>\n      <div>After redoing your website, it's always a good idea to make sure your social media matches (avatar and header)!</div>\n    </div>\n    <div class=\"time\">\n      <div class=\"date\">Sep 28, 2017</div>\n      <div>1 Day Left</div>\n    </div>\n  </div>\n\n  <div class=\"priority low\"><span>Complete!</span></div>\n\n  <div class=\"task low\">\n    <div class=\"desc\">\n      <div class=\"title\">Modernize Your Current Website</div>\n      <div>Bring your website up to date to current web standards. Everything from the look and feel all the way down to the SEO.</div>\n    </div>\n    <div class=\"time\">\n      <div class=\"date\">Sep 25, 2017</div>\n      <div>Completed</div>\n    </div>\n  </div>\n\n</div>\n\n<br />\n<h2>What To Do Next</h2>\n<p>After you have submit a project and someone from our team looks it over, you will receive a proposal in the 'Needs Approval' section. After you select 'approve' you will be prompted with a checkout screen to get started!</p>\n<br />\n"

/***/ }),

/***/ "../../../../../src/app/pages/solutions/solutions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SolutionsComponent = (function () {
    function SolutionsComponent() {
    }
    SolutionsComponent.prototype.ngOnInit = function () {
    };
    return SolutionsComponent;
}());
SolutionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-solutions',
        template: __webpack_require__("../../../../../src/app/pages/solutions/solutions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/solutions/solutions.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SolutionsComponent);

//# sourceMappingURL=solutions.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase-auth/firebase-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseAuthService = (function () {
    function FirebaseAuthService(AngularFireAuth) {
        var _this = this;
        this.AngularFireAuth = AngularFireAuth;
        this.ActiveUser = false;
        this.errorMsg = '';
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user)
                _this.ActiveUser = user;
            else
                _this.ActiveUser = false;
        });
    }
    // firebase
    FirebaseAuthService.prototype.createAccount = function (email, password) {
        var _this = this;
        this.AngularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(function () {
            _this.login(email, password);
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
                var date = new Date().toString();
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('users/' + user.uid).set({
                    created: date
                });
            });
        }).catch(function (error) {
            _this.errorMsg = error.message;
        });
    };
    FirebaseAuthService.prototype.login = function (email, password) {
        var _this = this;
        this.AngularFireAuth.auth.signInWithEmailAndPassword(email, password).catch(function (error) {
            _this.errorMsg = error.message;
        });
    };
    FirebaseAuthService.prototype.logout = function () {
        var _this = this;
        this.AngularFireAuth.auth.signOut().catch(function (error) {
            _this.errorMsg = error.message;
        });
    };
    return FirebaseAuthService;
}());
FirebaseAuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], FirebaseAuthService);

var _a;
//# sourceMappingURL=firebase-auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/window-ref/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function getWindow() {
    return window;
}
var WindowRefService = (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRefService;
}());
WindowRefService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WindowRefService);

//# sourceMappingURL=window-ref.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCI4gfl_qtz2wML8MUSQdg0ATPQPXxXB5I",
        authDomain: "onflo-c28e2.firebaseapp.com",
        databaseURL: "https://onflo-c28e2.firebaseio.com",
        projectId: "onflo-c28e2",
        storageBucket: "",
        messagingSenderId: "952694402859"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map