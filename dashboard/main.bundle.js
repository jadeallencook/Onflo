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

module.exports = "<app-navigation></app-navigation>\n<app-js-warning></app-js-warning>\n\n<div id=\"content\">\n  <app-breadcrum></app-breadcrum>\n\n  <!-- dashboard outlet -->\n  <router-outlet *ngIf=\"this.FirebaseAuthService.ActiveUser\" id=\"angular-content\"></router-outlet>\n\n  <!-- signin outlet -->\n  <div *ngIf=\"!this.FirebaseAuthService.ActiveUser\" id=\"login-wrapper\">\n    <div class=\"login-box\">\n      <img src=\"http://onflo.io/images/onflo-black-logo.png\" alt=\"Onflo Logo\" id=\"onflo-logo\"><br />\n      Automated Online Workflow\n      <div class=\"form-horizontal\">\n        <fieldset>\n\n          <div class=\"input-prepend\" title=\"Username\">\n            <span class=\"add-on\"><i class=\"halflings-icon user\"></i></span>\n            <input [(ngModel)]=\"email\" class=\"input-large span10\" name=\"email\" id=\"email\" type=\"text\" placeholder=\"email\">\n          </div>\n          <div class=\"clearfix\"></div>\n\n          <div class=\"input-prepend\" title=\"Password\">\n            <span class=\"add-on\"><i class=\"halflings-icon lock\"></i></span>\n            <input [(ngModel)]=\"password\" class=\"input-large span10\" name=\"password\" id=\"password\" type=\"password\" placeholder=\"password\">\n          </div>\n\n          <p id=\"error-message\" *ngIf=\"this.FirebaseAuthService.errorMsg\">{{ this.FirebaseAuthService.errorMsg }}</p>\n\n          <div class=\"clearfix\"></div>\n\n          <div class=\"button-login\">\n            <button type=\"submit\" (click)=\"this.FirebaseAuthService.login(this.email, this.password)\" routerLink=\"home\" class=\"btn btn-primary\">Login</button>\n            <button type=\"submit\" (click)=\"this.FirebaseAuthService.createAccount(this.email, this.password)\" routerLink=\"home\" class=\"btn btn-default\">Create Account</button>\n          </div>\n\n          <div class=\"clearfix\"></div>\n\n          <hr>\n        </fieldset>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        this.email = '';
        this.password = '';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_example_solutions_example_solutions_component__ = __webpack_require__("../../../../../src/app/components/example-solutions/example-solutions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_custom_solutions_custom_solutions_component__ = __webpack_require__("../../../../../src/app/components/custom-solutions/custom-solutions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_window_ref_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_stripe_checkout__ = __webpack_require__("../../../../ng-stripe-checkout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_customer_customer_component__ = __webpack_require__("../../../../../src/app/pages/customer/customer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// stripe


var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'solutions', component: __WEBPACK_IMPORTED_MODULE_10__pages_solutions_solutions_component__["a" /* SolutionsComponent */] },
    { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_11__pages_analytics_analytics_component__["a" /* AnalyticsComponent */] },
    { path: 'learn', component: __WEBPACK_IMPORTED_MODULE_12__pages_learn_learn_component__["a" /* LearnComponent */] },
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_23__pages_customer_customer_component__["a" /* CustomerComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_18__pages_admin_admin_component__["a" /* AdminComponent */] },
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
            __WEBPACK_IMPORTED_MODULE_18__pages_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_example_solutions_example_solutions_component__["a" /* ExampleSolutionsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_custom_solutions_custom_solutions_component__["a" /* CustomSolutionsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_customer_customer_component__["a" /* CustomerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_22_ng_stripe_checkout__["b" /* StripeCheckoutModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__services_window_ref_window_ref_service__["a" /* WindowRefService */]],
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

module.exports = "<ul class=\"breadcrumb\">\n  <li>\n    <i class=\"icon-home\"></i>\n    <a class=\"mobile-home\" href=\"../pages/home/\">Home</a>\n    <i class=\"icon-angle-right mobile-home\"></i>\n    <a routerLink=\"/home\">Dashboard</a>\n    <i class=\"icon-angle-right\"></i>\n  </li>\n  <li id=\"current-page\">{{ this.currentPage }}</li>\n</ul>\n"

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

/***/ "../../../../../src/app/components/custom-solutions/custom-solutions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/custom-solutions/custom-solutions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"span7\" id=\"solutions-container\">\n\n  <div *ngIf=\"solutions.length > 0\">\n    <div *ngFor=\"let solution of solutions\">\n      <div *ngIf=\"solution.status === 'pending'\" class=\"priority high\"><span>Needs Approval</span></div>\n      <div *ngIf=\"solution.status === 'pending'\" class=\"task high\">\n\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t<div class=\"title\">{{ solution.title }}</div>\n\t\t\t\t\t\t\t<div>{{ solution.objective }}</div><br />\n              <a (click)=\"approveDeal(solution)\">Approve</a> or <a (click)=\"removeDeal(solution)\">Remove</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"time\">\n\t\t\t\t\t\t\t<div class=\"date\">${{ solution.amount }}</div>\n\t\t\t\t\t\t\t<div>Est. {{ solution.days }} day(s)</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n      <div *ngIf=\"solution.status === 'production'\" class=\"priority medium\"><span>In Progress</span></div>\n      <div *ngIf=\"solution.status === 'production'\" class=\"task medium\">\n\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t<div class=\"title\">{{ solution.title }}</div>\n\t\t\t\t\t\t\t<div>{{ solution.objective }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"time\">\n\t\t\t\t\t\t\t<div class=\"date\">{{ this.formatSubmittedDate(solution.date) }}</div>\n\t\t\t\t\t\t\t<div> 1 day</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n      <div *ngIf=\"solution.status === 'complete'\" class=\"priority low\"><span>Complete!</span></div>\n      <div *ngIf=\"solution.status === 'complete'\" class=\"task low\">\n\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t<div class=\"title\">{{ solution.title }}</div>\n\t\t\t\t\t\t\t<div>{{ solution.objective }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"time\">\n\t\t\t\t\t\t\t<div class=\"date\">{{ this.formatSubmittedDate(solution.date) }}</div>\n\t\t\t\t\t\t\t<div> 1 day</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/custom-solutions/custom-solutions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSolutionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_stripe_checkout__ = __webpack_require__("../../../../ng-stripe-checkout/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomSolutionsComponent = (function () {
    function CustomSolutionsComponent(stripeCheckoutLoader) {
        this.stripeCheckoutLoader = stripeCheckoutLoader;
        this.solutions = [];
    }
    CustomSolutionsComponent.prototype.formatSubmittedDate = function (date) {
        date = new Date(date);
        date = date.toDateString();
        date = date.substr(4);
        return date;
    };
    // charge user after 'approve' is clicked
    CustomSolutionsComponent.prototype.approveDeal = function (deal) {
        this.selectedDeal = deal;
        this.stripeCheckoutHandler.open({
            amount: (deal.amount * 100),
            name: deal.title,
            description: deal.objective,
            currency: 'USD',
            image: 'http://www.onflo.io/images/onflo-avatar.jpg'
        });
    };
    // delete deal from database
    CustomSolutionsComponent.prototype.removeDeal = function (deal) {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + deal.userUID + '/deals/' + deal.dealUID).remove();
        var updatedDeal = deal;
        updatedDeal.status = 'removed';
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('deals/' + deal.dealUID).set(updatedDeal);
    };
    CustomSolutionsComponent.prototype.ngOnChanges = function () {
        for (var x = 0, max = this.solutions.length; x < max; x++) {
            var solution = this.solutions[x];
        }
    };
    CustomSolutionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stripeCheckoutLoader.createHandler({
            key: 'pk_live_LCkKum9lsW57QiO8sHq2a2am',
            email: __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email,
            token: function (token) {
                // after deal is paid...
                var deal = _this.selectedDeal;
                deal.stripeID = token.id;
                deal.status = 'production';
                deal.started = new Date().toString();
                // update deal in firebase
                __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('deals/' + _this.selectedDeal.dealUID).set(deal).then(function () {
                    console.log('Complete!');
                });
            },
        }).then(function (handler) {
            _this.stripeCheckoutHandler = handler;
        });
    };
    return CustomSolutionsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CustomSolutionsComponent.prototype, "solutions", void 0);
CustomSolutionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-custom-solutions',
        template: __webpack_require__("../../../../../src/app/components/custom-solutions/custom-solutions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/custom-solutions/custom-solutions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_stripe_checkout__["a" /* StripeCheckoutLoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_stripe_checkout__["a" /* StripeCheckoutLoader */]) === "function" && _a || Object])
], CustomSolutionsComponent);

var _a;
//# sourceMappingURL=custom-solutions.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/example-solutions/example-solutions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/example-solutions/example-solutions.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Example Solutions</h2><br />\n\n<div class=\"span7\" id=\"solutions-container\">\n\n  <div class=\"priority high\"><span>Needs Approval</span></div>\n\n  <div class=\"task high\">\n    <div class=\"desc\">\n      <div class=\"title\">Install Google Analytics</div>\n      <div>Let's get you started with Google Analytics! Once you approve this request we will get started installing GA onto your website. From there we can help you learn more about your web presence.</div>\n      <br />\n      <a>Approve</a> or <a>Remove</a>\n    </div>\n    <div class=\"time\">\n      <div class=\"date\">$75</div>\n      <div>Est. 1 day</div>\n    </div>\n  </div>\n\n  <div class=\"priority medium\"><span>In Progress</span></div>\n\n  <div class=\"task medium\">\n    <div class=\"desc\">\n      <div class=\"title\">Brand Social Media</div>\n      <div>After redoing your website, it's always a good idea to make sure your social media matches (avatar and header)!</div>\n    </div>\n    <div class=\"time\">\n      <div class=\"date\">Sep 28, 2017</div>\n      <div>1 Day Left</div>\n    </div>\n  </div>\n\n  <div class=\"priority low\"><span>Complete!</span></div>\n\n  <div class=\"task low\">\n    <div class=\"desc\">\n      <div class=\"title\">Modernize Your Current Website</div>\n      <div>Bring your website up to date to current web standards. Everything from the look and feel all the way down to the SEO.</div>\n    </div>\n    <div class=\"time\">\n      <div class=\"date\">Sep 25, 2017</div>\n      <div>Completed</div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/example-solutions/example-solutions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleSolutionsComponent; });
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

var ExampleSolutionsComponent = (function () {
    function ExampleSolutionsComponent() {
    }
    ExampleSolutionsComponent.prototype.ngOnInit = function () {
    };
    return ExampleSolutionsComponent;
}());
ExampleSolutionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-example-solutions',
        template: __webpack_require__("../../../../../src/app/components/example-solutions/example-solutions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/example-solutions/example-solutions.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExampleSolutionsComponent);

//# sourceMappingURL=example-solutions.component.js.map

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

module.exports = "<div id=\"sidebar-left\" class=\"span2\">\n  <div class=\"nav-collapse sidebar-nav\">\n    <ul class=\"nav nav-tabs nav-stacked main-menu\">\n      <li><a href=\"../pages/home\" id=\"navbar-logo\">\n        <img src=\"http://onflo.io/images/onflo-white-logo.png\" />\n      </a></li>\n\n      <!-- main navigation -->\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" routerLink=\"/home\"><i class=\"icon-home\"></i><span class=\"hidden-tablet\"> Dashboard</span></a></li>\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" routerLink=\"/solutions\"><i class=\"icon-list-alt\"></i><span class=\"hidden-tablet\"> Solutions</span></a></li>\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" routerLink=\"/analytics\"><i class=\"icon-dashboard\"></i><span class=\"hidden-tablet\"> Analytics</span></a></li>\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" routerLink=\"/customer\"><i class=\"icon-user\"></i><span class=\"hidden-tablet\"> Customers</span></a></li>\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" routerLink=\"/learn\"><i class=\"icon-facetime-video\"></i><span class=\"hidden-tablet\"> Learn</span></a></li>\n      <!--\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" routerLink=\"/automation\"><i class=\"icon-cog\"></i><span class=\"hidden-tablet\"> Automation</span></a></li>\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" routerLink=\"/reviews\"><i class=\"icon-bullhorn\"></i><span class=\"hidden-tablet\"> Reviews</span></a></li>\n      -->\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" routerLink=\"/settings\"><i class=\"icon-edit\"></i><span class=\"hidden-tablet\"> Settings</span></a></li>\n      <li><a *ngIf=\"this.FirebaseAuthService.ActiveUser\" (click)=\"this.FirebaseAuthService.logout()\"><i class=\"icon-off\"></i><span class=\"hidden-tablet\"> Logout</span></a></li>\n\n      <!-- admin -->\n      <li *ngIf=\"this.FirebaseAuthService.ActiveUser && this.FirebaseAuthService.ActiveUser.email === 'hello@onflo.io'\">\n        <a routerLink=\"/admin\"><i class=\"icon-unlock\"></i><span class=\"hidden-tablet\"> Admin</span></a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

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

module.exports = "<div id=\"solutions-form\">\n  <div *ngIf=\"!this.submitted\">\n    <div class=\"control-group\">\n      <textarea id=\"prependedInput\" size=\"32\" type=\"text\" placeholder=\"Tell us a little more...\" [(ngModel)]=\"issue\"></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"this.submitIssue()\">Submit</button>\n    <button class=\"btn\" (click)=\"this.issue = ''\">Cancel</button>\n  </div>\n  <div class=\"alert alert-success\" *ngIf=\"this.submitted\">\n    <strong>Success!</strong> Please give at least two business days for a response and make sure your business infomation is updated in your settings (we might need to contact you for further questions).<br /><br />\n    <a><strong (click)=\"this.reset()\">Click here to submit another</strong></a>\n  </div>\n</div>\n"

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
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('deals').push({
                userUID: uid,
                issue: this.issue,
                submitted: date,
                status: 'submitted'
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
exports.push([module.i, "div.box-content {\n  width: 94%;\n  max-width: 500px;\n}\n\nul.dashboard-list li {\n  padding-bottom: 5px;\n  display: block;\n}\n\n.box-content textarea {\n  width: 75%;\n  max-width: 500px;\n  min-width: 250px;\n}\n\nspan.label-danger {\n  background-color: red;\n}\n\nspan.label {\n  text-transform: capitalize;\n}\n\ndiv#add-video-container {\n  margin-top: 15px;\n}\n\ndiv.lesson-alert {\n  display: block;\n  width: 260px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Admin</h1>\n<br />\n\n<!-- read deals -->\n<div class=\"box-content\" *ngIf=\"!activeDeal && this.deals.length > 0\">\n  <ul class=\"dashboard-list\">\n    <div *ngFor=\"let deal of this.deals\">\n      <li *ngIf=\"deal.status !== 'removed'\">\n        <img class=\"avatar\" src=\"http://onflo.io/images/default-user.jpg\">\n        <strong>User:</strong> {{ deal.userUID }}<br>\n        <strong>Since:</strong> {{ deal.submitted }}<br>\n        <strong>Status:</strong>\n        <span class=\"label\" *ngIf=\"deal.status === 'submitted'\">{{ deal.status }}</span>\n        <span class=\"label label-info\" *ngIf=\"deal.status === 'pending'\">{{ deal.status }}</span>\n        <span class=\"label label-danger\" *ngIf=\"deal.status === 'removed'\">{{ deal.status }}</span>\n        <span class=\"label label-warning\" *ngIf=\"deal.status === 'production'\">{{ deal.status }}</span>\n        <br /><br />\n        <strong>Issue:</strong> {{ deal.issue }}<br />\n        <a (click)=\"showDeal(deal.dealUID)\">Reply</a> or <a (click)=\"removeDeal(deal.dealUID, deal.userUID)\">Delete</a> ({{\n        deal.dealUID }})\n      </li>\n    </div>\n  </ul>\n</div>\n\n<!-- reply to deals -->\n<div class=\"box-content\" *ngIf=\"activeDeal\">\n  <h2>Reply to deal</h2>\n  <br />\n  <strong>UID:</strong> {{ activeDeal.userUID }}<br />\n  <strong>Since:</strong> {{ activeDeal.submitted }}<br>\n  <strong>Status:</strong>\n  <span class=\"label\" *ngIf=\"activeDeal.status === 'submitted'\">{{ activeDeal.status }}</span>\n  <span class=\"label label-info\" *ngIf=\"activeDeal.status === 'pending'\">{{ activeDeal.status }}</span>\n  <span class=\"label label-warning\" *ngIf=\"activeDeal.status === 'production'\">{{ activeDeal.status }}</span>\n  <br /><br />\n  <div *ngIf=\"client\">\n    <span *ngIf=\"client.business\"><strong>Business:</strong> {{ client.business }}<br></span>\n    <span *ngIf=\"client.website\"><strong>Website:</strong> {{ client.website }}<br></span>\n    <span *ngIf=\"client.slack\"><strong>Slack:</strong> {{ client.slack }}<br></span>\n    <span *ngIf=\"client.phone\"><strong>Phone:</strong> {{ client.phone }}<br></span>\n    <br />\n  </div>\n  <strong>Details:</strong> {{ activeDeal.issue }}\n  <br /><br />\n  <input [(ngModel)]=\"dealTitle\" placeholder=\"What's the goal?\" type=\"text\" /><br />\n  <textarea [(ngModel)]=\"dealMsg\" placeholder=\"How are we going to do it?\" size=\"32\" type=\"text\"></textarea><br />\n  <input [(ngModel)]=\"dealAmount\" placeholder=\"How much?\" type=\"number\" /><br />\n  <input [(ngModel)]=\"dealDays\" placeholder=\"How many days?\" type=\"number\" />\n  <br />\n  <button class=\"btn btn-primary\" (click)=\"sendDeal()\">Update</button>\n  <br /><br />\n  <a (click)=\"activeDeal=false && addingVideo=true\">Back To All Deals</a>\n</div>\n\n<!-- add new video -->\n<div *ngIf=\"addingVideo\" id=\"add-video-container\">\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"focusedInput\">Lesson Title</label>\n    <input [(ngModel)]=\"learningVideo.title\" class=\"input-xlarge focused\" type=\"text\" placeholder=\"How To Brand Social Media\">\n  </div><div class=\"control-group\">\n    <label class=\"control-label\" for=\"focusedInput\">Video Link</label>\n    <input [(ngModel)]=\"learningVideo.video\" class=\"input-xlarge focused\" type=\"text\" placeholder=\"https://www.youtube.com/watch?v=id\">\n  </div><div class=\"control-group\">\n    <label class=\"control-label\">Keywords</label>\n    <input [(ngModel)]=\"learningVideo.keywords\" class=\"input-xlarge focused\" type=\"text\" placeholder=\"social, marketing, online, etc.\">\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"selectError3\">Category</label>\n    <select [(ngModel)]=\"learningVideo.category\" id=\"selectError3\">\n      <option value=\"social\">Social</option>\n      <option value=\"email\">Email</option>\n      <option value=\"data\">Data</option>\n      <option value=\"web\">Web</option>\n      <option value=\"design\">Design</option>\n      <option value=\"photo\">Photo</option>\n      <option value=\"video\">Video</option>\n      <option value=\"mind\">Mind</option>\n    </select>\n  </div>\n  <div class=\"alert alert-success lesson-alert\" *ngIf=\"lessonAddedSuccess\">\n    <strong>Complete!</strong> You've successfully added a lesson.\n  </div>\n  <div class=\"alert alert-error lesson-alert\" *ngIf=\"lessonAddedFailure\">\n    <strong>Error!</strong> Looks like you forgot something.\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addVideo()\">Add Lesson</button>\n  <button class=\"btn\" (click)=\"resetLessonDetails()\">Cancel</button>\n</div>\n"

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
        this.deals = [];
        this.activeDeal = false;
        this.client = false;
        this.dealTitle = '';
        this.dealMsg = '';
        this.dealAmount = null;
        this.dealDays = null;
        this.addingVideo = true;
        this.learningVideo = {
            video: '',
            title: '',
            keywords: '',
            category: 'social'
        };
        this.lessonAddedSuccess = false;
        this.lessonAddedFailure = false;
    }
    AdminComponent.prototype.showDeal = function (uid) {
        var _this = this;
        this.addingVideo = false;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('deals/' + uid).once('value').then(function (snapshot) {
            _this.activeDeal = snapshot.val();
            if (_this.activeDeal.title) {
                _this.dealTitle = _this.activeDeal.title;
            }
            if (_this.activeDeal.objective) {
                _this.dealMsg = _this.activeDeal.objective;
            }
            if (_this.activeDeal.amount) {
                _this.dealAmount = _this.activeDeal.amount;
            }
            if (_this.activeDeal.days) {
                _this.dealDays = _this.activeDeal.days;
            }
            _this.activeDeal.dealUID = uid;
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + _this.activeDeal.userUID).once('value').then(function (snapshot) {
                _this.client = snapshot.val();
            });
        });
    };
    AdminComponent.prototype.removeDeal = function (dealUID, userUID) {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('deals/' + dealUID).remove();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + userUID + '/deals/' + dealUID).remove();
    };
    AdminComponent.prototype.sendDeal = function () {
        var _this = this;
        var today = new Date().toString();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('deals/' + this.activeDeal.dealUID).set({
            title: this.dealTitle,
            objective: this.dealMsg,
            amount: this.dealAmount,
            days: this.dealDays,
            date: today,
            userUID: this.activeDeal.userUID,
            dealUID: this.activeDeal.dealUID,
            submitted: this.activeDeal.submitted,
            issue: this.activeDeal.issue,
            status: 'pending'
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + _this.activeDeal.userUID + '/deals/' + _this.activeDeal.dealUID).set({
                active: true
            });
            _this.activeDeal = false;
        });
    };
    AdminComponent.prototype.resetLessonDetails = function () {
        this.learningVideo = {
            video: '',
            title: '',
            keywords: '',
            category: 'social'
        };
    };
    AdminComponent.prototype.addVideo = function () {
        var _this = this;
        if (this.learningVideo.video && this.learningVideo.title && this.learningVideo.keywords) {
            this.learningVideo.keywords = this.learningVideo.keywords.split(',');
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('lessons').push(this.learningVideo).then(function () {
                _this.lessonAddedSuccess = true;
                _this.resetLessonDetails();
            });
        }
        else {
            this.lessonAddedFailure = true;
        }
        var showMsg = setInterval(function () {
            _this.lessonAddedFailure = false;
            _this.lessonAddedSuccess = false;
            clearInterval(showMsg);
        }, 3000);
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('deals/').on('value', function (snapshot) {
            if (snapshot.val()) {
                _this.deals = Object.keys(snapshot.val()).map(function (key) {
                    var deal = snapshot.val()[key];
                    deal.dealUID = key;
                    return deal;
                });
            }
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

module.exports = "<h1>Analytics</h1>\n<section id=\"view-selector\"></section>\n<section class=\"analytics-chart\" id=\"timeline\"></section>\n<div class=\"analytics-chart\" id=\"chart-1-container\"></div>\n<section id=\"auth-button\"></section>\n<br />\n<div class=\"btn default-btn\" *ngIf=\"!this.gettingStarted\" (click)=\"displayAnalytics()\">Generate Reports</div>\n<br /><br />\n<p>Don't have Google Analytics installed?</p>\n<a routerLink=\"/solutions\">Click here to tell us what you need help with!</a>\n"

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
        this.gettingStarted = false;
    }
    AnalyticsComponent.prototype.displayAnalytics = function () {
        this.gettingStarted = true;
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
    AnalyticsComponent.prototype.ngOnInit = function () {
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

/***/ "../../../../../src/app/pages/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#add-new-customer {\n  margin-bottom: 25px;\n}\n\ndiv#add-new-customer input {\n  background-color: #F5F5F5;\n  border: none;\n  border-bottom: solid #333 medium;\n  width: 30%;\n}\n\ntable#DataTables_Table_0 {\n  background-color: #fff;\n}\n\ntbody tr {\n  cursor: pointer;\n  opacity: 0.75;\n}\n\na#delete-customer {\n  color: red;\n}\n\n@media only screen and (max-width: 600px) {\n  div#add-new-customer input {\n    width: 75%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Customers</h1>\n<br />\n\n<!-- add new customer -->\n<div class=\"control-group\" id=\"add-new-customer\" *ngIf=\"!this.showingCustomer\">\n  <div class=\"controls\">\n    <input class=\"input-xlarge focused\" [(ngModel)]=\"customerFirstName\" type=\"text\" placeholder=\"First Name\" />\n    <input class=\"input-xlarge focused\" [(ngModel)]=\"customerLastName\" type=\"text\" placeholder=\"Last Name\" />\n    <input class=\"input-xlarge focused\" [(ngModel)]=\"customerEmail\" type=\"email\" placeholder=\"Email\" />\n    <br />\n    <button class=\"btn btn-primary\" (click)=\"addNewCustomer()\">Add New</button>\n    <button class=\"btn btn-default\" (click)=\"refineCustomers()\">Find Customer</button>\n  </div>\n</div>\n\n<!-- search customers -->\n<div *ngIf=\"!this.showingCustomer\">\n  <div id=\"DataTables_Table_0_wrapper\" class=\"dataTables_wrapper\" role=\"grid\">\n    <table class=\"table table-striped table-bordered bootstrap-datatable datatable dataTable\" id=\"DataTables_Table_0\" aria-describedby=\"DataTables_Table_0_info\">\n      <thead>\n        <tr role=\"row\">\n          <th class=\"sorting_asc\" role=\"columnheader\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\" aria-label=\"Username: activate to sort column descending\" style=\"width: 142px;\">Name</th>\n          <th class=\"sorting\" role=\"columnheader\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Date registered: activate to sort column ascending\" style=\"width: 207px;\">Email</th>\n          <th class=\"sorting\" role=\"columnheader\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Role: activate to sort column ascending\" style=\"width: 112px;\">Signed Up</th>\n          <th class=\"sorting\" role=\"columnheader\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Status: activate to sort column ascending\" style=\"width: 128px;\">Points</th>\n        </tr>\n      </thead>\n      <tbody role=\"alert\" aria-live=\"polite\" aria-relevant=\"all\">\n        <tr *ngFor=\"let contact of this.allCustomers\" (click)=\"openCustomer(contact.uid)\">\n          <td class=\"center\">{{ contact.first + ' ' + contact.last }}</td>\n          <td class=\"center\">{{ contact.email }}</td>\n          <td class=\"center\">{{ formatDate(contact.signup) }}</td>\n          <td class=\"center\">{{ contact.points }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"row-fluid\">\n      <div class=\"span12 center\">\n        <div class=\"dataTables_paginate paging_bootstrap pagination\">\n          <ul>\n            <li class=\"prev disabled\"><a>← Previous</a></li>\n            <li class=\"next disabled\"><a>Next → </a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- edit customer -->\n<div *ngIf=\"this.showingCustomer\">\n  <div class=\"input-group\">\n    <label class=\"control-label\" for=\"focusedInput\">First Name</label>\n    <input class=\"input-xlarge focused\" type=\"text\" [(ngModel)]=\"this.selectedCustomer.first\" placeholder=\"John\">\n  </div><div class=\"input-group\">\n    <label class=\"control-label\" for=\"focusedInput\">Last Name</label>\n    <input class=\"input-xlarge focused\" type=\"text\" [(ngModel)]=\"this.selectedCustomer.last\" placeholder=\"Doe\">\n  </div><div class=\"input-group\">\n    <label class=\"control-label\" for=\"focusedInput\">Email</label>\n    <input class=\"input-xlarge focused\" type=\"email\" [(ngModel)]=\"this.selectedCustomer.email\" placeholder=\"johndoe@gmail.com\">\n  </div><div class=\"input-group\">\n    <label class=\"control-label\" for=\"focusedInput\">Points</label>\n    <input class=\"input-xlarge focused\" type=\"number\" [(ngModel)]=\"this.selectedCustomer.points\" placeholder=\"0\">\n  </div><div class=\"input-group\">\n    <label class=\"control-label\" for=\"focusedInput\">Phone</label>\n    <input class=\"input-xlarge focused\" type=\"text\" [(ngModel)]=\"this.selectedCustomer.phone\" placeholder=\"(555) 555-5555\">\n  </div><div class=\"input-group\">\n    <label class=\"control-label\" for=\"focusedInput\">Signed Up</label>\n    <input class=\"input-xlarge focused\" type=\"text\" value=\"{{ this.formatDate(this.selectedCustomer.signup) }}\" disabled>\n  </div>\n  <br />\n  <button class=\"btn btn-primary\" (click)=\"updateCustomer(this.openCustomerUID)\">Save Changes</button>\n  <button (click)=\"this.showingCustomer = false;\" class=\"btn btn-default\">Cancel</button>\n  <br /><br />\n  <a id=\"delete-customer\" (click)=\"this.deleteCustomer(this.openCustomerUID)\">Delete Customer</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
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


var CustomerComponent = (function () {
    function CustomerComponent() {
        this.userUID = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
        this.usersCustomerDB = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('customers/' + this.userUID);
        this.allCustomerData = [];
        this.allCustomers = [];
        this.showingCustomer = false;
        this.openCustomerUID = '';
        this.customerFirstName = '';
        this.customerLastName = '';
        this.customerEmail = '';
        this.selectedCustomer = {
            first: null,
            last: null,
            email: null,
            signup: null,
            points: null,
            updated: null,
            phone: null,
            link: null,
        };
    }
    CustomerComponent.prototype.addNewCustomer = function () {
        var _this = this;
        var date = new Date().toString();
        this.usersCustomerDB.push({
            first: this.customerFirstName,
            last: this.customerLastName,
            email: this.customerEmail,
            signup: date,
            points: 0,
            updated: date,
            phone: null,
            link: null
        }).then(function () {
            _this.customerFirstName = '';
            _this.customerLastName = '';
            _this.customerEmail = '';
        });
    };
    CustomerComponent.prototype.refineCustomers = function () {
        this.allCustomers = [];
        for (var x = 0, max = this.allCustomerData.length; x < max; x++) {
            var customer = this.allCustomerData[x];
            var valid = true;
            if (this.customerFirstName && customer.first.toLowerCase().indexOf(this.customerFirstName.toLowerCase()) === -1) {
                valid = false;
            }
            if (this.customerLastName && customer.last.toLowerCase().indexOf(this.customerLastName.toLowerCase()) === -1) {
                valid = false;
            }
            if (this.customerEmail && customer.email.toLowerCase().indexOf(this.customerEmail.toLowerCase()) === -1) {
                valid = false;
            }
            if (valid) {
                this.allCustomers.push(customer);
            }
        }
    };
    CustomerComponent.prototype.formatDate = function (date) {
        date = new Date(date);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        monthIndex++;
        var year = date.getFullYear();
        return monthIndex + '/' + day + '/' + year;
    };
    CustomerComponent.prototype.openCustomer = function (uid) {
        var _this = this;
        this.showingCustomer = true;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('customers/' + this.userUID + '/' + uid).on('value', function (snapshot) {
            _this.selectedCustomer = snapshot.val();
            _this.openCustomerUID = uid;
        });
    };
    CustomerComponent.prototype.updateCustomer = function (uid) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('customers/' + this.userUID + '/' + uid).set(this.selectedCustomer).then(function () {
            _this.showingCustomer = false;
        });
    };
    CustomerComponent.prototype.deleteCustomer = function (uid) {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('customers/' + this.userUID + '/' + uid).remove();
        this.getAllCustomers();
        this.showingCustomer = false;
    };
    CustomerComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.usersCustomerDB.on('value', function (snapshot) {
            var customers = snapshot.val();
            if (customers) {
                var objectToArray = Object.keys(customers).map(function (key) {
                    customers[key].uid = key;
                    return customers[key];
                });
                _this.allCustomerData = objectToArray;
                _this.allCustomers = objectToArray;
            }
            else {
                _this.allCustomerData = [];
                _this.allCustomers = [];
            }
        });
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.getAllCustomers();
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/pages/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/customer/customer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomerComponent);

//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.dash-icon {\n  padding: 25px 15px;\n  width: 72.5px;\n  background-color: #1C1D22;\n  color: #fff;\n  display: inline-block;\n  font-size: 3em;\n  cursor: pointer;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\ndiv.dash-icon:hover {\n  opacity: 0.75;\n}\n\ndiv.dash-icon span {\n  font-size: 0.25em;\n}\n\n@media only screen and (max-width: 539px) {\n  div#home-wrapper {\n    width: 100%;\n    text-align: center;\n  }\n  div.dash-icon {\n    width: 25%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<div id=\"home-wrapper\">\n  <h1>Welcome!</h1>\n  <br />\n\n  <!-- features break down -->\n  <div routerLink=\"/solutions\" class=\"dash-icon\">\n    <i class=\"icon-list-alt\"></i><br />\n    <span>Solutions</span>\n  </div>\n\n  <div routerLink=\"/analytics\" class=\"dash-icon\">\n    <i class=\"icon-dashboard\"></i><br />\n    <span>Analytics</span>\n  </div>\n\n  <div routerLink=\"/customer\" class=\"dash-icon\">\n    <i class=\"icon-user\"></i><br />\n    <span>Customers</span>\n  </div>\n\n  <div routerLink=\"/learn\" class=\"dash-icon\">\n    <i class=\"icon-facetime-video\"></i><br />\n    <span>Learn</span>\n  </div>\n\n  <br />\n<!--\n  <div routerLink=\"/automation\" class=\"dash-icon\">\n    <i class=\"icon-cog\"></i><br />\n    <span>Automation</span>\n  </div>\n\n  <div routerLink=\"/reviews\" class=\"dash-icon\">\n    <i class=\"icon-bullhorn\"></i><br />\n    <span>Reviews</span>\n  </div>\n\n-->\n\n  <div routerLink=\"/settings\" class=\"dash-icon\">\n    <i class=\"icon-edit\"></i><br />\n    <span>Settings</span>\n  </div>\n  \n  <div (click)=\"this.FirebaseAuthService.logout()\" class=\"dash-icon\">\n    <i class=\"icon-off\"></i><br />\n    <span>Logout</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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


var HomeComponent = (function () {
    function HomeComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/learn/learn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#video-category-container {\n  width: 95%;\n  background-color: #F5F5F5!important;\n  padding: 0px;\n  padding-bottom: 10px;\n  overflow-x: scroll;\n  white-space: nowrap;\n  display: inline-block;\n  padding-top: 7px;\n}\n\ntr.list-video:hover {\n  opacity: 0.5;\n}\n\ntable.table {\n  max-width: 750px;\n}\n\ndiv#video-category-container a {\n  width: 75px;\n  margin-right: 10px;\n  display: inline-block;\n  white-space: nowrap;\n}\n\n.notification {\n  background-color: #1C1D22;\n  color: #fff;\n  border: none;\n}\n\ndiv#video-container {\n  padding-bottom: 25px;\n}\n\ndiv#video-container iframe {\n  max-width: 560px;\n}\n\n\n/* labels */\n\n.label {\n  text-transform: capitalize;\n}\n\n.list-video {\n  cursor: pointer;\n}\n\n.label {\n  background-color: #1C1D22;\n}\n\nspan.notification {\n  position: absolute;\n  border-radius: 25px;\n  margin-top: -7px;\n  margin-right: -7px;\n}\n\na.quick-button i {\n  margin-top: -15px;\n}\n\ndiv#video-preview-container {\n  position: absolute;\n  top: 227px;\n  right: 0px;\n  overflow: hidden;\n  background-color: #000;\n  display: inline-block;\n  height: 65px;\n  border-left: solid thick #FF0000;\n\n}\n\ndiv#video-preview-container img {\n    margin-top: -13px;\n}\n\n\n@media only screen and (max-width: 767px) {\n  div#video-preview-container {\n    display: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/learn/learn.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Learn</h1>\n<br />\n\n<!-- btns container -->\n<div id=\"video-category-container\">\n\n    <a class=\"quick-button\" (click)=\"refineResults('social')\">\n        <i class=\"icon-thumbs-up\"></i>\n        <p>Social</p>\n        <span class=\"notification\">{{ this.videoNumbers.social }}</span>\n    </a>\n\n    <a class=\"quick-button\" (click)=\"refineResults('email')\">\n        <i class=\"icon-envelope\"></i>\n        <p>Email</p>\n        <span class=\"notification\">{{ this.videoNumbers.email }}</span>\n    </a>\n\n    <a class=\"quick-button\" (click)=\"refineResults('data')\">\n        <i class=\"icon-bar-chart\"></i>\n        <p>Data</p>\n        <span class=\"notification\">{{ this.videoNumbers.data }}</span>\n    </a>\n\n    <a class=\"quick-button\" (click)=\"refineResults('web')\">\n        <i class=\"icon-laptop\"></i>\n        <p>&lt;dev&gt;</p>\n        <span class=\"notification\">{{ this.videoNumbers.web }}</span>\n    </a>\n\n    <a class=\"quick-button\" (click)=\"refineResults('design')\">\n        <i class=\"icon-picture\"></i>\n        <p>Design</p>\n        <span class=\"notification\">{{ this.videoNumbers.design }}</span>\n    </a>\n\n    <a class=\"quick-button\" (click)=\"refineResults('photo')\">\n        <i class=\"icon-camera-retro\"></i>\n        <p>Photo</p>\n        <span class=\"notification\">{{ this.videoNumbers.photo }}</span>\n    </a>\n\n    <a class=\"quick-button\" (click)=\"refineResults('video')\">\n        <i class=\"icon-film\"></i>\n        <p>Video</p>\n        <span class=\"notification\">{{ this.videoNumbers.video }}</span>\n    </a>\n\n    <a class=\"quick-button\" (click)=\"refineResults('mind')\">\n        <i class=\"icon-leaf\"></i>\n        <p>Mind</p>\n        <span class=\"notification\">{{ this.videoNumbers.mind }}</span>\n    </a>\n</div>\n\n<div id=\"video-container\">\n    <iframe id=\"video-player\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/RBTiTcHm_ac?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n    <br /><br />\n    <h2 id=\"video-title\">{{ this.currentVideoTitle }}</h2>\n</div>\n\n<!-- videos -->\n\n<div id=\"video-preview-container\">\n    <img id=\"video-preview\" src=\"#\" />\n</div>\n\n<table class=\"table table-bordered table-striped table-condensed\">\n    <thead>\n        <tr>\n            <th>Title</th>\n            <th>Category</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let lesson of this.allLessons\" class=\"list-video\" (click)=\"changeVideo(lesson.title, lesson.video)\" (mouseover)=\"changePreview(lesson.video)\" (mouseleave)=\"hidePreview()\">\n            <td>{{ lesson.title }}</td>\n            <td class=\"center\">\n                <span class=\"label {{ lesson.category }}-label\">{{ lesson.category }}</span>\n            </td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/pages/learn/learn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnComponent; });
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


var LearnComponent = (function () {
    function LearnComponent() {
        this.allLessons = [];
        this.videoNumbers = {
            social: 0,
            email: 0,
            data: 0,
            web: 0,
            design: 0,
            photo: 0,
            video: 0,
            mind: 0
        };
        this.currentVideoTitle = 'What Makes A Truly Great Logo';
        this.currentCategory = '';
        this.getAllVideos();
    }
    LearnComponent.prototype.refineResults = function (category) {
        this.currentCategory = category;
        this.getAllVideos();
        var tempVideoArray = [];
        for (var x = 0, max = this.allLessons.length; x < max; x++) {
            var lesson = this.allLessons[x];
            if (lesson.category === category) {
                tempVideoArray.push(lesson);
            }
        }
        this.allLessons = tempVideoArray;
        var lastLesson = this.allLessons[0];
    };
    LearnComponent.prototype.getAllVideos = function () {
        var _this = this;
        // reset video numbers
        this.videoNumbers = {
            social: 0,
            email: 0,
            data: 0,
            web: 0,
            design: 0,
            photo: 0,
            video: 0,
            mind: 0
        };
        // get all lessons from firebase
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/lessons').on('value', function (snapshot) {
            // cache lessons snapshot value
            var lessons = snapshot.val();
            if (lessons) {
                // turn [] into {} and add uid
                var objectToArray = Object.keys(lessons).map(function (key) {
                    _this.videoNumbers[lessons[key].category]++;
                    lessons[key].uid = key;
                    return lessons[key];
                });
                if (!_this.currentCategory) {
                    // reverse results
                    objectToArray = objectToArray.reverse();
                    // return all lessons
                    _this.allLessons = objectToArray;
                    _this.allLessons = _this.allLessons.slice(0, 10).map(function (i) {
                        return i;
                    });
                }
                else {
                    _this.allLessons = objectToArray;
                }
            }
            else {
                // no lessons available
                _this.allLessons = [];
            }
        });
    };
    LearnComponent.prototype.changePreview = function (photoURL) {
        photoURL = 'https://img.youtube.com/vi/' + this.youtubeURLParser(photoURL) + '/default.jpg';
        document.getElementById('video-preview').style.display = 'block';
        document.getElementById('video-preview').setAttribute('src', photoURL);
    };
    LearnComponent.prototype.hidePreview = function () {
        document.getElementById('video-preview').style.display = 'none';
    };
    LearnComponent.prototype.youtubeURLParser = function (url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    };
    LearnComponent.prototype.changeVideo = function (title, video) {
        var videoURL = 'https://www.youtube.com/embed/' + this.youtubeURLParser(video) + '?rel=0&amp;showinfo=0&autoplay=true';
        var videoPlayer = document.getElementById('video-player');
        videoPlayer.setAttribute('src', videoURL);
        this.currentVideoTitle = title;
    };
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
exports.push([module.i, "#solutions-container {\n  display: block;\n  float: none;\n  position: relative;\n}\n\np {\n  width: 75%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/solutions/solutions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Solutions</h1>\n<br />\n<h2>What can we help you with?</h2>\n<br />\n<p><i>Example: I need content for an upcoming event I want to promote on social media.</i></p>\n<br />\n\n\n<app-solutions-form></app-solutions-form>\n\n<app-example-solutions *ngIf=\"!this.solutions\"></app-example-solutions>\n<app-custom-solutions *ngIf=\"this.solutions\" [solutions]=\"this.solutions\"></app-custom-solutions>\n"

/***/ }),

/***/ "../../../../../src/app/pages/solutions/solutions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_firebase_auth_service__ = __webpack_require__("../../../../../src/app/services/firebase-auth/firebase-auth.service.ts");
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
    function SolutionsComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
        this.solutions = [];
    }
    SolutionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get deals for user
        var userUID = this.FirebaseAuthService.ActiveUser.uid;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('users/' + userUID + '/deals').on('value', function (deals) {
            // add each deal
            if (deals.val()) {
                _this.solutions = [];
                deals = deals.val();
                Object.keys(deals).map(function (objectKey, index) {
                    // check if deal is active
                    var isActive = deals[objectKey].active;
                    if (isActive) {
                        // add deal to solutions
                        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('deals/' + objectKey).once('value').then(function (deal) {
                            deal = deal.val();
                            if (deal)
                                _this.solutions.push(deal);
                        });
                    }
                });
            }
            else {
                _this.solutions = false;
            }
        });
    };
    return SolutionsComponent;
}());
SolutionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-solutions',
        template: __webpack_require__("../../../../../src/app/pages/solutions/solutions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/solutions/solutions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], SolutionsComponent);

var _a;
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
        if (!email && !password) {
            this.errorMsg = 'Umm, you need both an email and password first before we go anywhere.';
        }
        else if (!email || !password) {
            this.errorMsg = 'So what, you just got half of it done and quit?';
        }
        else {
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
        }
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