webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_parties_parties_component__ = __webpack_require__("../../../../../src/app/components/parties/parties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_parties_party_party_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_parties_party_party_invoices_party_invoices_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_parties_party_party_bills_party_bills_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-bills/party-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_parties_party_party_jobs_party_jobs_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_parties_party_party_main_party_main_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-main/party-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_jobs_jobs_component__ = __webpack_require__("../../../../../src/app/components/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_jobs_job_job_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_jobs_job_job_main_job_main_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-main/job-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_jobs_job_job_comments_job_comments_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-comments/job-comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_jobs_job_job_schedule_job_schedule_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-schedule/job-schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_jobs_job_job_bills_job_bills_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-bills/job-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_jobs_job_job_field_work_job_field_work_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-field-work/job-field-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_jobs_job_job_costs_job_costs_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-costs/job-costs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_jobs_job_job_invoices_job_invoices_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', redirectTo: 'parties', pathMatch: 'full' },
    { path: 'parties', component: __WEBPACK_IMPORTED_MODULE_2__components_parties_parties_component__["a" /* PartiesComponent */] },
    { path: 'parties/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_parties_party_party_component__["a" /* PartyComponent */],
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_7__components_parties_party_party_main_party_main_component__["a" /* PartyMainComponent */] },
            { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_6__components_parties_party_party_jobs_party_jobs_component__["a" /* PartyJobsComponent */] },
            { path: 'bills', component: __WEBPACK_IMPORTED_MODULE_5__components_parties_party_party_bills_party_bills_component__["a" /* PartyBillsComponent */] },
            { path: 'invoices', component: __WEBPACK_IMPORTED_MODULE_4__components_parties_party_party_invoices_party_invoices_component__["a" /* PartyInvoicesComponent */] },
        ]
    },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_8__components_jobs_jobs_component__["a" /* JobsComponent */] },
    { path: 'jobs/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_jobs_job_job_component__["a" /* JobComponent */],
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_10__components_jobs_job_job_main_job_main_component__["a" /* JobMainComponent */] },
            { path: 'comments', component: __WEBPACK_IMPORTED_MODULE_11__components_jobs_job_job_comments_job_comments_component__["a" /* JobCommentsComponent */] },
            { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_12__components_jobs_job_job_schedule_job_schedule_component__["a" /* JobScheduleComponent */] },
            { path: 'field-work', component: __WEBPACK_IMPORTED_MODULE_14__components_jobs_job_job_field_work_job_field_work_component__["a" /* JobFieldWorkComponent */] },
            { path: 'bills', component: __WEBPACK_IMPORTED_MODULE_13__components_jobs_job_job_bills_job_bills_component__["a" /* JobBillsComponent */] },
            { path: 'costs', component: __WEBPACK_IMPORTED_MODULE_15__components_jobs_job_job_costs_job_costs_component__["a" /* JobCostsComponent */] },
            { path: 'invoices', component: __WEBPACK_IMPORTED_MODULE_16__components_jobs_job_job_invoices_job_invoices_component__["a" /* JobInvoicesComponent */] },
        ]
    },
    { path: '**', redirectTo: 'parties', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-nav-bar\" class=\"app-nav-bar\">\n  <div class=\"app-sidebar-style\">\n    <a href=\"#\" class=\"app-logo-wrapper\">\n      <img class=\"app-logo\" src=\"assets/img/logos/logo.png\">\n    </a>\n    <i (click)=\"toggleCollapse()\" class=\"fa fa-bars app-menu-icon\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n\n<div id=\"app-main-container\">\n  <ul id=\"app-sidebar\" class=\"padding\">\n    <li class=\"app-nav-list\" routerLinkActive=\"active\"><a routerLink=\"parties\" class=\"app-anchor\">\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n      <span class=\"app-sidebar-item\">Parties</span></a>\n    <li class=\"app-nav-list\" routerLinkActive=\"active\"><a routerLink=\"jobs\" class=\"app-anchor\">\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n      <span class=\"app-sidebar-item\">Jobs</span></a></li>\n  </ul>\n  <div id=\"app-main-content\" class=\"padding\" [@app-sidebar]=\"state\" (transitionend)=\"onTransitionEnd($event)\">\n    <div class=\"breadcrumb\">\n      <span class=\"breadcrumb-item\">\n        BreadCrumb\n      </span>\n    </div>\n    <div class=\"component-parent\">\n      <div>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-nav-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 66px;\n  background-color: black;\n  z-index: 10; }\n\n.app-logo-wrapper {\n  display: block;\n  padding: 8px; }\n\n.app-logo:hover {\n  -webkit-transform: scaleX(1.3);\n          transform: scaleX(1.3); }\n\n.app-logo {\n  height: 50px;\n  width: 100px;\n  transition: width 0.50s ease-in-out; }\n\n.app-sidebar-style {\n  width: 220px;\n  position: relative;\n  padding-left: 30px; }\n\n.app-menu-icon {\n  position: absolute;\n  display: block;\n  right: 0;\n  top: 0;\n  font-size: 40px;\n  color: white;\n  line-height: 40px;\n  padding: 13px; }\n\n#app-main-container {\n  display: block;\n  position: absolute;\n  top: 66px;\n  left: 0;\n  right: 0; }\n\n#app-sidebar {\n  position: fixed;\n  top: 66px;\n  left: 0;\n  white-space: nowrap;\n  min-height: 100vh;\n  width: 200px;\n  overflow: hidden;\n  z-index: 1;\n  background-color: #b1ebf8; }\n\n#app-main-content {\n  position: absolute;\n  left: 200px;\n  overflow-x: hidden;\n  background-color: white;\n  right: 0;\n  z-index: 2;\n  transition: left 0.5s ease-in-out;\n  padding-bottom: 100px; }\n\n.app-anchor {\n  display: block;\n  text-decoration: none;\n  color: black;\n  font-size: 1.2rem;\n  margin: 0.5rem;\n  padding: 0.5rem; }\n\n.app-nav-list {\n  border-radius: 5px;\n  list-style: none;\n  text-decoration: none; }\n\n.component-parent {\n  margin-top: 50px;\n  width: 100%; }\n\n.active, .active a, .app-nav-list:hover, .app-nav-list:hover a {\n  color: #b1ebf8;\n  background-color: black;\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(navBarService, changeDetectorRef) {
        this.navBarService = navBarService;
        this.changeDetectorRef = changeDetectorRef;
        this.title = 'Jobowit';
        this.state = 'expanded';
        this.isCollapsed = false;
        this.navBarSubject = this.navBarService.getNavBarSubject();
    }
    AppComponent.prototype.toggleCollapse = function () {
        if (this.state == 'expanded') {
            this.state = 'collapsed';
        }
        else {
            this.state = 'expanded';
            ("should expand");
            this.changeDetectorRef.detectChanges();
        }
    };
    AppComponent.prototype.onTransitionEnd = function ($event) {
        this.navBarSubject.next();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('app-sidebar', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    left: '200px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    left: '0'
                }))
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_nav_bar_service__["a" /* NavBarService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_parties_parties_component__ = __webpack_require__("../../../../../src/app/components/parties/parties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ag_grid_angular_main__ = __webpack_require__("../../../../ag-grid-angular/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_parties_party_party_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_parties_party_party_main_party_main_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-main/party-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_parties_party_party_jobs_party_jobs_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_parties_party_party_invoices_party_invoices_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_parties_party_party_bills_party_bills_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-bills/party-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_form_validation_service__ = __webpack_require__("../../../../../src/app/services/form-validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_jobs_jobs_component__ = __webpack_require__("../../../../../src/app/components/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_jobs_job_job_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_jobs_job_job_main_job_main_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-main/job-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_jobs_job_job_comments_job_comments_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-comments/job-comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_jobs_job_job_schedule_job_schedule_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-schedule/job-schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_jobs_job_job_field_work_job_field_work_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-field-work/job-field-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_jobs_job_job_bills_job_bills_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-bills/job-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_jobs_job_job_costs_job_costs_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-costs/job-costs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_jobs_job_job_invoices_job_invoices_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_parties_parties_component__["a" /* PartiesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_parties_party_party_component__["a" /* PartyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_parties_party_party_main_party_main_component__["a" /* PartyMainComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_parties_party_party_jobs_party_jobs_component__["a" /* PartyJobsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_parties_party_party_invoices_party_invoices_component__["a" /* PartyInvoicesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_parties_party_party_bills_party_bills_component__["a" /* PartyBillsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_jobs_jobs_component__["a" /* JobsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_jobs_job_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_jobs_job_job_main_job_main_component__["a" /* JobMainComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_jobs_job_job_comments_job_comments_component__["a" /* JobCommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_jobs_job_job_schedule_job_schedule_component__["a" /* JobScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_jobs_job_job_field_work_job_field_work_component__["a" /* JobFieldWorkComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_jobs_job_job_bills_job_bills_component__["a" /* JobBillsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_jobs_job_job_costs_job_costs_component__["a" /* JobCostsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_jobs_job_job_invoices_job_invoices_component__["a" /* JobInvoicesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9_ag_grid_angular_main__["AgGridModule"].withComponents([]),
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* JsonpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_15__services_form_validation_service__["a" /* FormValidationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-bills/job-bills.component.html":
/***/ (function(module, exports) {

module.exports = "Displays all the bills for the job in a tabular format <br>\n\nfor each bill in the job <br>\n\n[details or table] <br>\n\n@bill_ref | @party_name | @bill_date | @due_date <br>\n| @tax_inclusive | @total_amount | @total_sell_amount <br>\n\n[/details or table] <br>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-bills/job-bills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-bills/job-bills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobBillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobBillsComponent = (function () {
    function JobBillsComponent() {
    }
    JobBillsComponent.prototype.ngOnInit = function () {
    };
    return JobBillsComponent;
}());
JobBillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-bills',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-bills/job-bills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-bills/job-bills.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JobBillsComponent);

//# sourceMappingURL=job-bills.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-comments/job-comments.component.html":
/***/ (function(module, exports) {

module.exports = "Similar to what we have for Party; display all the comments <br>\nmade by the user for the job and simple form at the end to add more comments.<br>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-comments/job-comments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-comments/job-comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCommentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobCommentsComponent = (function () {
    function JobCommentsComponent() {
    }
    JobCommentsComponent.prototype.ngOnInit = function () {
    };
    return JobCommentsComponent;
}());
JobCommentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-comments',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-comments/job-comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-comments/job-comments.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JobCommentsComponent);

//# sourceMappingURL=job-comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-costs/job-costs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  job-costs works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-costs/job-costs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-costs/job-costs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobCostsComponent = (function () {
    function JobCostsComponent() {
    }
    JobCostsComponent.prototype.ngOnInit = function () {
    };
    return JobCostsComponent;
}());
JobCostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-costs',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-costs/job-costs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-costs/job-costs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JobCostsComponent);

//# sourceMappingURL=job-costs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-field-work/job-field-work.component.html":
/***/ (function(module, exports) {

module.exports = "Tabular data that lists all the field work for the job<br>\n\nfor each field work in the job<br>\n\n[details or table]<br>\n\n@staff_name | @start_date | @start_time | @finish_date | @finish_time | @hours_worked<br>\n\n[/details or table]<br>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-field-work/job-field-work.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-field-work/job-field-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobFieldWorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobFieldWorkComponent = (function () {
    function JobFieldWorkComponent() {
    }
    JobFieldWorkComponent.prototype.ngOnInit = function () {
    };
    return JobFieldWorkComponent;
}());
JobFieldWorkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-field-work',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-field-work/job-field-work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-field-work/job-field-work.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JobFieldWorkComponent);

//# sourceMappingURL=job-field-work.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.html":
/***/ (function(module, exports) {

module.exports = "Displays all the invoices for the job in a tabular format<br>\n\nfor each invoice linked to the job<br>\n\n[details or table]<br>\n\n@invoice_id | @invoice_date | @due_date | @total_amount<br>\n\n[/details or table]<br>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobInvoicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobInvoicesComponent = (function () {
    function JobInvoicesComponent() {
    }
    JobInvoicesComponent.prototype.ngOnInit = function () {
    };
    return JobInvoicesComponent;
}());
JobInvoicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-invoices',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JobInvoicesComponent);

//# sourceMappingURL=job-invoices.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-main/job-main.component.html":
/***/ (function(module, exports) {

module.exports = "This tab should have a form with the following fields:<br>\n\nCustomer (a lookup text-field see tradify for details) - this should have the name of the customer.<br>\n\nJob Type - this field is only for display and never editable (even when editing the Job or creating a<br>\nnew one - it will be set automatically; more on that later.<br>\n<br>\nAddress (verifiable by google)<br>\n\nReferral (plain text)<br>\n\nPriority (drop down with values: Normal, Urgent, Important)<br>\n\nDetails (text box)<br>\n\nStatus (this is a drop down with values linked to the job_status <br>\ntable in db: these values can be retrieved through the API at /API/jobStatuses - the values that can <br>\nbe selected in the drop down will depend on the Job Type - every status is linked to a JobType; <br>\ncheck the API and let me knoe if need aditional field to make your job easier)<br>\n<div class=\"app-form-container app-form-container-top\">\n  <h3 class=\"app-form-header\">Job</h3>\n  <form [formGroup]=\"jobForm\" (ngSubmit)=\"onSubmit()\">\n    <div formGroupName=\"userData\">\n      <div class=\"form-group\">\n        <label for=\"customer-name\" class=\"app-form-label\">Customer</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <div class=\"form-control-wrapper\">\n          <input type=\"text\" id=\"customer-name\" formControlName=\"customer-name\" class=\"form-control\">\n          <i\n            *ngIf=\"jobForm.get('userData.customer-name').valid\"\n            class=\"fa fa-check\" aria-hidden=\"true\">\n          </i>\n          <div class=\"app-auto-suggestion-wrapper\"\n               *ngIf=\"customersAutoSuggestion.length != 0\">\n            <ul>\n              <li *ngFor=\"let customer of customersAutoSuggestion\"\n                  (click)=\"onCustomerSelected(customer)\"\n                  (mouseover)=\"onCustomerHover($event, customer)\">\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                {{customer}}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"job-type\" class=\"app-form-label\">Job Type</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <input readonly class=\"form-control\"\n               id=\"job-type\"\n               formControlName=\"job-type\"\n               value=\"job-type\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"customer-name\" class=\"app-form-label\">Address</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <input type=\"text\"\n               id=\"job-physical-address\"\n               formControlName=\"customer-name\"\n               class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label class=\"app-form-label\">Priority</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <div class=\"job-priority-wrapper\">\n          <input type=\"text\"\n                 id=\"job-priority\"\n                 formControlName=\"job-priority\"\n                 class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"app-form-label\">Status</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <div id=\"job-status-dropdown\" class=\"dropdown new-job-dropdown form-control-wrapper\"\n             [ngClass]=\"{'show': showJobStatusDropdown }\">\n          <button class=\"btn btn-primary dropdown-toggle\"\n                  type=\"button\"\n                  id=\"job-status\"\n                  data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\"\n                  aria-expanded=\"false\"\n                  (click)=\"toggleJobStatus()\">\n            Select Status\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"job-status\">\n            <button class=\"dropdown-item btn btn-primary\"\n                    *ngFor=\"let status of jobsStatus\"\n                    (click)=\"onSelectJobStatus(status.title)\">{{status.title}}\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"job-detail\" class=\"app-form-label\">Details</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <input type=\"text\"\n               id=\"job-detail\"\n               formControlName=\"job-detail\"\n               class=\"form-control\">\n        <i *ngIf=\"jobForm.get('userData.job-detail').valid\"\n           class=\"fa fa-check\" aria-hidden=\"true\">\n        </i>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-main/job-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-job-main .app-form-container {\n  padding: 20px; }\n\napp-job-main .app-form-container-top {\n  border-top: none; }\n\napp-job-main .app-form-header, app-job-main .app-comments-header {\n  color: #5c5e5f;\n  background-color: white;\n  display: inline-block;\n  padding: 5px 0;\n  border-radius: 5px;\n  margin: 20px 0; }\n\napp-job-main .form-group {\n  position: relative;\n  min-height: 2.3rem;\n  z-index: auto; }\n\napp-job-main .app-form-label {\n  display: inline-block;\n  text-align: left;\n  width: 200px;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #464a4c;\n  background-color: #eceeef;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s; }\n\napp-job-main .app-form-label-colon {\n  text-align: right;\n  display: inline-block;\n  padding: 0 0.5rem; }\n\napp-job-main .app-address-input-wrapper, app-job-main .app-address-error-wrapper {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 229px;\n  width: 60%; }\n\napp-job-main .app-address-input-wrapper .form-control {\n  width: 100%; }\n\napp-job-main .app-form-control-right {\n  position: relative;\n  top: 10px;\n  left: 229px; }\n\napp-job-main .error-message {\n  top: -10px;\n  border: 1px solid red;\n  overflow: visible; }\n\napp-job-main .error-message-helper {\n  border-top: none; }\n\napp-job-main .app-address-error-wrapper {\n  border: 1px solid red; }\n\napp-job-main .required {\n  position: absolute;\n  right: -20px;\n  color: red; }\n\napp-job-main .app-google-logo {\n  position: absolute;\n  width: 8rem;\n  top: 0.75rem;\n  right: 0.5rem; }\n\napp-job-main .fa-check {\n  color: green; }\n\napp-job-main .fa-spinner {\n  -webkit-animation: spinner 3s linear infinite;\n          animation: spinner 3s linear infinite; }\n\napp-job-main .fa-check, app-job-main .fa-spinner {\n  position: absolute;\n  top: 0.75rem;\n  right: 9rem; }\n\napp-job-main .app-auto-suggestion-container > .form-control:focus {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\napp-job-main .app-auto-suggestion-wrapper {\n  position: absolute;\n  top: 2.5rem;\n  left: 0;\n  width: 100%;\n  overflow: visible;\n  border: 1px solid #5cb3fd;\n  border-top: none;\n  min-height: 70px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  z-index: 15;\n  background-color: white; }\n\napp-job-main .form-control, app-job-main .form-control-wrapper {\n  display: inline-block;\n  width: 60%;\n  overflow: visible;\n  position: absolute;\n  left: 229px;\n  min-height: 2.3rem; }\n\napp-job-main .form-control-wrapper {\n  display: block;\n  top: 0;\n  z-index: 10; }\n\napp-job-main .form-control-wrapper > .form-control {\n  left: 0;\n  top: 0;\n  width: 100%; }\n\napp-job-main .form-control-labeless {\n  width: 100%;\n  overflow: visible;\n  position: relative;\n  background-color: white;\n  min-height: 2.3rem; }\n\napp-job-main .app-auto-suggestion-wrapper > ul {\n  list-style: none;\n  padding: 0; }\n\napp-job-main .app-auto-suggestion-wrapper > ul > li {\n  cursor: pointer;\n  padding: 5px 5px 5px 0.5rem;\n  margin: 5px 5px 5px 0.5rem; }\n\napp-job-main .app-auto-suggestion-wrapper > ul > li:hover {\n  background-color: #5cb3fd;\n  color: black; }\n\napp-job-main .fa-map-marker {\n  color: #5cb3fd;\n  padding-right: 0.5rem; }\n\napp-job-main .app-auto-suggestion-wrapper > ul > li:hover .fa-map-marker {\n  color: black; }\n\napp-job-main .party-physical-address {\n  z-index: 10; }\n\napp-job-main .party-mailing-address {\n  z-index: 9; }\n\napp-job-main .app-comments-hr {\n  color: gray;\n  border-top: 2px solid gray;\n  height: 2px; }\n\napp-job-main .app-comment-detail {\n  display: inline-block;\n  padding-left: 0.5rem;\n  line-height: 1.2;\n  font-size: 1rem; }\n\napp-job-main .app-users-comments {\n  list-style: none;\n  font-size: 1.2rem;\n  line-height: 1.2;\n  padding: 0;\n  margin: 0; }\n\napp-job-main .app-comment-by, app-job-main .app-comment-on {\n  color: #0275d8; }\n\napp-job-main .app-new-comment {\n  display: block;\n  width: 80%;\n  overflow: auto; }\n\napp-job-main .app-update-comment {\n  display: block;\n  margin-top: 1rem; }\n\napp-job-main .app-comments-header {\n  margin: 0; }\n\napp-job-main .user-comment-hr {\n  margin: 10px 0; }\n\n@-webkit-keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\napp-job-main .job-priority-wrapper {\n  display: inline-block;\n  position: relative;\n  padding: 6px 10px;\n  margin: 0;\n  height: 2rem;\n  border: 1px solid #0275d8;\n  z-index: 10; }\n\napp-job-main .job-priority-input, app-job-main .job-priority-input:focus {\n  border: none;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  line-height: 1;\n  color: inherit;\n  width: 8rem;\n  display: inline-block; }\n\napp-job-main .fa-caret-down {\n  color: #0275d8; }\n\napp-job-main .job-priorities {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-main/job-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobMainComponent = (function () {
    function JobMainComponent(serverService, jobService) {
        this.serverService = serverService;
        this.jobService = jobService;
        this.customers = ["Aadsfsadf", "dafasdfasdf"];
        this.customersAutoSuggestion = []; // ['Aadsf'];
        this.showJobPriorityDropdown = false;
        this.showJobStatusDropdown = false;
        this.selectedPriority = "Select Priority";
        this.jobPriorities = [
            { title: "priorityA" },
            { title: "priorityB" },
            { title: "priorityC" }
        ];
        this.jobsStatus = [
            { title: "status A" },
            { title: "status B" },
            { title: "status C" }
        ];
    }
    JobMainComponent.prototype.hostClicked = function ($event) {
        console.log($event.target.id);
        if ($event.target.id != 'job-priority') {
            this.showJobPriorityDropdown = false;
        }
        if ($event.target.id != 'job-status') {
            this.showJobStatusDropdown = false;
        }
    };
    JobMainComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.keyCode === 27) {
            console.log('Escape!');
            console.log(event);
            this.showJobStatusDropdown = false;
            this.showJobPriorityDropdown = false;
        }
    };
    JobMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createJobForm();
        this.jobServiceSubscription = this.jobService.jobSourceObservable
            .subscribe(function (data) {
            console.log(data);
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */].TYPE_MAIN) {
                _this.paramsReceived = data.id;
                _this.serverService.getRequestByJobId(_this.paramsReceived)
                    .subscribe(function (response) {
                    console.log(response);
                    _this.job = response;
                    _this.setJobType();
                    _this.setJobForm();
                }, function (error) {
                    console.log(error);
                });
            }
        });
        this.initCustomersAutoSuggest();
    };
    JobMainComponent.prototype.ngAfterViewInit = function () {
        this.jobService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */].TYPE_MAIN });
    };
    JobMainComponent.prototype.createJobForm = function () {
        this.jobForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            'userData': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
                'customer-name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null),
                'job-address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null),
                'job-type': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null),
                'job-referral': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null),
                'job-priority': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null),
                'job-detail': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null)
            })
        });
    };
    JobMainComponent.prototype.setJobForm = function () {
        console.log(this.job);
        this.jobForm.setValue({
            'userData': {
                'customer-name': this.job._embedded.customer.name,
                'job-address': this.job.addressStr,
                'job-type': "Not yet Implemented",
                'job-referral': this.job.referral,
                'job-priority': this.job.priority,
                'job-detail': this.job.description
            }
        });
        console.log(this.jobForm.get('userData.job-priority').value);
    };
    JobMainComponent.prototype.setJobType = function () {
    };
    JobMainComponent.prototype.onSubmit = function () {
    };
    JobMainComponent.prototype.onCustomerSelected = function (customer) {
        console.log(customer);
    };
    JobMainComponent.prototype.onCustomerHover = function ($event, customer) {
        console.log(customer);
    };
    JobMainComponent.prototype.toggleJobPriority = function () {
        this.showJobPriorityDropdown = !this.showJobPriorityDropdown;
        this.showJobStatusDropdown = false;
    };
    JobMainComponent.prototype.onSelectJobPriority = function (title) {
        this.selectedPriority = title;
    };
    JobMainComponent.prototype.toggleJobStatus = function () {
        this.showJobStatusDropdown = !this.showJobStatusDropdown;
        this.showJobPriorityDropdown = false;
    };
    JobMainComponent.prototype.onSelectJobStatus = function (title) {
        console.log(title);
    };
    JobMainComponent.prototype.initCustomersAutoSuggest = function () {
        this.customersAutoSuggestSubscription = this.jobForm.get('userData.customer-name')
            .valueChanges.debounceTime(400)
            .subscribe(function (value) {
            console.log(value);
        }, function (error) {
            console.log(error);
        });
    };
    return JobMainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobMainComponent.prototype, "hostClicked", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobMainComponent.prototype, "handleKeyboardEvent", null);
JobMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-main',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-main/job-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-main/job-main.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */]) === "function" && _b || Object])
], JobMainComponent);

var _a, _b;
//# sourceMappingURL=job-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-schedule/job-schedule.component.html":
/***/ (function(module, exports) {

module.exports = "Tabular data that lists all the schedule for the job<br>\n\nfor each schedule for the job<br>\n\n[details or table]<br>\n\n@staff_name | @start_date | @start_time | @finish_date | @finish_time<br>\n\n[/details or table]<br>\n\nNote: start date & time and finish date & time are stored in single fields <br>\nstart_dtm and finish_dtm respectively; you will have to separate the date and <br>\ntime part. This is easy to do at the back-end - let me know if you want it separated.<br>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-schedule/job-schedule.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-schedule/job-schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobScheduleComponent = (function () {
    function JobScheduleComponent() {
    }
    JobScheduleComponent.prototype.ngOnInit = function () {
    };
    return JobScheduleComponent;
}());
JobScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-schedule',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-schedule/job-schedule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-schedule/job-schedule.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JobScheduleComponent);

//# sourceMappingURL=job-schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-tabs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jobTabs; });
var jobTabs = [
    { title: 'Main', path: 'main' },
    { title: 'Comments', path: 'comments' },
    { title: 'Schedule', path: 'schedule' },
    { title: 'Field Work', path: 'field-work' },
    { title: 'Bills', path: 'bills' },
    { title: 'Costs', path: 'costs' },
    { title: 'Invoices', path: 'invoices' }
];
//# sourceMappingURL=job-tabs.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\" *ngFor=\"let jobTab of jobTabs\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"{{jobTab.path}}\">{{jobTab.title}}</a>\n  </li>\n</ul>\n<div class=\"app-job-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-job .nav-item {\n  font-size: 1.3rem;\n  line-height: 1.5;\n  width: 150px;\n  text-align: center; }\n\napp-job .app-job-wrapper {\n  min-height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__job_tabs__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-tabs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobComponent = (function () {
    function JobComponent(serverService, activatedRoute, jobService) {
        this.serverService = serverService;
        this.activatedRoute = activatedRoute;
        this.jobService = jobService;
        this.jobTabs = __WEBPACK_IMPORTED_MODULE_1__job_tabs__["a" /* jobTabs */];
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.paramsReceived = params['id'];
            _this.makeMultipleRequests();
        }, function (error) {
            console.log(error);
        });
        this.childComponentSubscription = this.jobService.childComponentObservable
            .subscribe(function (data) {
            if (data.type === __WEBPACK_IMPORTED_MODULE_3__services_job_service__["a" /* JobService */].TYPE_MAIN) {
                _this.announceToMain();
            }
        }, function (error) { console.log(error); });
    };
    JobComponent.prototype.makeMultipleRequests = function () {
        this.announceToMain();
    };
    JobComponent.prototype.announceToMain = function () {
        this.jobService.announceJobDetail({ id: this.paramsReceived, type: __WEBPACK_IMPORTED_MODULE_3__services_job_service__["a" /* JobService */].TYPE_MAIN });
    };
    return JobComponent;
}());
JobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_job_service__["a" /* JobService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_job_service__["a" /* JobService */]) === "function" && _c || Object])
], JobComponent);

var _a, _b, _c;
//# sourceMappingURL=job.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown new-job-dropdown\" [ngClass]=\"{'show': showDropdown }\">\n  <button class=\"btn btn-primary dropdown-toggle new\" type=\"button\"\n          id=\"dropdownMenuButton\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n          (click)=\"toggleDropdown()\">\n    New Job\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <button class=\"dropdown-item btn btn-primary\" (click)=\"onNewQuoteRequest()\">New Quote Request</button>\n    <button class=\"dropdown-item btn btn-primary\" (click)=\"onNewServiceRequest()\">New Service Request</button>\n  </div>\n</div>\n<div class=\"app-ag-grid-wrapper\">\n  <ag-grid-angular #agGrid style=\"width: 100%; overflow:hidden;transition: all 0.5s ease-in-out\" class=\"ag-fresh\"\n\n                   [gridOptions]=\"gridOptions\"\n                   [columnDefs]=\"columnDefs\"\n                   domLayout='autoHeight'\n                   [rowData]=\"rowData\"\n                   headerHeight=\"40\"\n                   enableColResize\n                   enableSorting\n                   enableFilter\n\n                   rowHeight=\"30\"\n                   rowSelection=\"multiple\"\n\n                   (modelUpdated)=\"onModelUpdated()\"\n                   (cellClicked)=\"onCellClicked($event)\"\n                   (cellDoubleClicked)=\"onCellDoubleClicked($event)\">\n\n  </ag-grid-angular>\n  <div>\n    <button class=\"btn btn-primary\">Create Invoice</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ag-grid-angular {\n  margin: 2rem 0; }\n\n.new-job-dropdown {\n  margin-bottom: 5rem; }\n\n.dropdown {\n  position: relative; }\n\n.ag-header-container {\n  font-size: 1.3rem; }\n\n.ag-body-container {\n  font-size: 1rem;\n  line-height: 1; }\n\n.first-column, .second-column {\n  color: #0275d8;\n  cursor: pointer; }\n\n.first-column:hover, .second-column:hover {\n  background-color: #b1ebf8;\n  color: black; }\n\n.app-table-cell {\n  padding: 10px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobsComponent = (function () {
    function JobsComponent(serverService, navBarService, router, activatedRoute, changeDetectorRef) {
        this.serverService = serverService;
        this.navBarService = navBarService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.rowData = [];
        this.showDropdown = false;
        this.columnDefs = [
            {
                headerName: "Id",
                field: 'jobNumber',
                cellClass: 'app-table-cell first-column',
                width: 70
            },
            {
                headerName: "Customer",
                field: "customer",
                cellClass: 'app-table-cell second-column',
                width: 230,
            },
            {
                headerName: "Referral",
                field: "referral",
                cellClass: 'app-table-cell third-column',
                width: 120,
            },
            {
                headerName: "Current Type",
                field: "type",
                cellClass: 'app-table-cell fourth-column',
                width: 150,
            },
            {
                headerName: "Status",
                field: "status",
                cellClass: 'app-table-cell fifth-column',
                width: 180,
            },
            {
                headerName: "Address",
                field: "addressStr",
                cellClass: 'app-table-cell sixth-column'
            },
            {
                headerName: "Latest Schedule",
                field: "latestSchedule.latestSchedule",
                cellClass: 'app-table-cell seventh-column',
                width: 160,
            },
            {
                headerName: "Priority",
                field: "priority",
                cellClass: 'app-table-cell third-column',
                width: 100,
            }
        ];
    }
    JobsComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.keyCode === 27) {
            console.log('Escape!');
            console.log(event);
            this.showDropdown = false;
        }
    };
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            rowData: this.rowData,
            columnDefs: this.columnDefs
        };
        this.serverService.getAllJobs()
            .subscribe(function (response) {
            _this.rowData = response._embedded.jobs;
            _this.formatRowData();
        }, function (error) {
            console.log(error);
        });
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            // the timings of the nav bar css transition should be considered
            console.log("sizeColumnsToFit");
            setTimeout(function () {
                if (_this.gridOptions && _this.gridOptions.api) {
                    _this.gridOptions.api.sizeColumnsToFit();
                }
            }, 200);
        });
    };
    JobsComponent.prototype.ngAfterViewInit = function () {
        this.gridOptions.api.sizeColumnsToFit();
    };
    JobsComponent.prototype.formatRowData = function () {
        var _this = this;
        for (var i = 0; i < this.rowData.length; i++) {
            console.log(this.rowData[i]);
            this.rowData[i].latestSchedule.latestSchedule =
                this.rowData[i].latestSchedule.logicalDay ?
                    this.rowData[i].latestSchedule.logicalDay :
                    this.rowData[i].latestSchedule.latestSchedule;
        }
        var _loop_1 = function (i) {
            this_1.serverService.getRequestByPath(this_1.rowData[i]._links.customer.href)
                .subscribe(function (response) {
                _this.rowData[i].customer = response.name;
                _this.rowData[i].customerId = response.uuid;
                if (i === _this.rowData.length - 1) {
                    setTimeout(function () {
                        _this.gridOptions.api.refreshView();
                    }, 200);
                }
            }, function (error) {
                console.log(error);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.rowData.length; i++) {
            _loop_1(i);
        }
    };
    JobsComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    JobsComponent.prototype.onCellClicked = function ($event) {
        console.log($event);
        $event.cancelBubble;
        if ($event.column.colId === "customer") {
            var customerId = $event.data.customerId;
            this.router.navigate(['parties', customerId, 'main'])
                .then(function (value) {
                console.log(value);
            }).catch(function (error) {
                console.log(error);
            });
        }
        if ($event.column.colId === "jobNumber") {
            var href = $event.data._links.self.href.substr($event.data._links.self.href.lastIndexOf('/') + 1);
            this.router.navigate([href, 'main'], { relativeTo: this.activatedRoute })
                .then(function (value) {
                console.log(value);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    JobsComponent.prototype.onCellDoubleClicked = function ($event) {
    };
    JobsComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
    };
    JobsComponent.prototype.toggleDropdown = function () {
        this.showDropdown = !this.showDropdown;
    };
    JobsComponent.prototype.onNewQuoteRequest = function () {
        console.log('onNewQuoteRequest');
        this.toggleDropdown();
    };
    JobsComponent.prototype.onNewServiceRequest = function () {
        console.log('onNewServiceRequest');
        this.toggleDropdown();
    };
    return JobsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobsComponent.prototype, "handleKeyboardEvent", null);
JobsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jobs',
        template: __webpack_require__("../../../../../src/app/components/jobs/jobs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/jobs.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object])
], JobsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=jobs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/parties.component.html":
/***/ (function(module, exports) {

module.exports = "<ag-grid-angular #agGrid style=\"width: 100%; height:80vh; min-height: 80vh; transition: all 0.5s ease-in-out\" class=\"ag-fresh\"\n\n[gridOptions]=\"gridOptions\"\n[columnDefs]=\"columnDefs\"\ndomLayout='autoHeight'\n[rowData]=\"rowData\"\nheaderHeight=\"50\"\nenableColResize\nenableSorting\nenableFilter\n\nrowHeight=\"40\"\nrowSelection=\"multiple\"\n\n(modelUpdated)=\"onModelUpdated()\"\n(cellClicked)=\"onCellClicked($event)\"\n(cellDoubleClicked)=\"onCellDoubleClicked($event)\">\n\n</ag-grid-angular>\n<router-outlet></router-outlet>\n<!--[showToolPanel]=\"showToolPanel\"-->\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/parties.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-parties .ag-header-container {\n  font-size: 2rem; }\n\napp-parties .ag-body-container {\n  font-size: 1.3rem;\n  line-height: 1; }\n\napp-parties .first-column {\n  color: #0275d8;\n  cursor: pointer; }\n\napp-parties .first-column:hover {\n  background-color: #b1ebf8;\n  color: black; }\n\napp-parties .app-table-cell {\n  padding: 10px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/parties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartiesComponent = (function () {
    function PartiesComponent(serverService, navBarService, changeDetectorRef, router, activatedRoute) {
        this.serverService = serverService;
        this.navBarService = navBarService;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.columnDefs = [
            {
                headerName: "Party Name",
                field: 'name',
                cellClass: 'app-table-cell first-column'
            },
            {
                headerName: "Address",
                field: "physicalAddressStr",
                width: 400,
                cellClass: 'app-table-cell second-column'
            },
            {
                headerName: "Active Jobs Count",
                field: "activeJobCount",
                cellClass: 'app-table-cell third-column'
            }
        ];
    }
    PartiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getAllParties()
            .subscribe(function (response) {
            _this.rowData = response._embedded.parties;
        }, function (error) {
            console.log(error);
        });
        this.gridOptions = {
            context: {
                componentParent: this
            },
            rowData: this.rowData,
            columnDefs: this.columnDefs
        };
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            // the timings of the nav bar css transition should be considered
            console.log("sizeColumnsToFit");
            setTimeout(function () {
                _this.gridOptions.api.sizeColumnsToFit();
            }, 500);
        });
    };
    PartiesComponent.prototype.newCustomer = function () {
    };
    PartiesComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    PartiesComponent.prototype.onCellClicked = function ($event) {
        if ($event.column.colId === 'name') {
            var href = $event.data.uuid;
            this.router.navigate([href, 'main'], { relativeTo: this.activatedRoute })
                .then(function (value) {
                console.log(value);
            }).catch(function (error) { console.log(error); });
        }
    };
    PartiesComponent.prototype.onCellDoubleClicked = function ($event) {
    };
    PartiesComponent.prototype.ngAfterViewInit = function () {
        this.gridOptions.api.sizeColumnsToFit();
    };
    PartiesComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
    };
    return PartiesComponent;
}());
PartiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-parties',
        template: __webpack_require__("../../../../../src/app/components/parties/parties.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/parties.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object])
], PartiesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=parties.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-bills/party-bills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-ag-grid-wrapper\">\n  <ag-grid-angular #agGrid style=\"width: 100%; overflow:hidden;transition: all 0.5s ease-in-out\" class=\"ag-fresh\"\n\n                   [gridOptions]=\"gridOptions\"\n                   [columnDefs]=\"columnDefs\"\n                   domLayout='autoHeight'\n                   [rowData]=\"rowData\"\n                   headerHeight=\"50\"\n                   enableColResize\n                   enableSorting\n                   enableFilter\n\n                   rowHeight=\"40\"\n                   rowSelection=\"multiple\"\n\n                   (modelUpdated)=\"onModelUpdated()\"\n                   (cellClicked)=\"onCellClicked($event)\"\n                   (cellDoubleClicked)=\"onCellDoubleClicked($event)\">\n\n  </ag-grid-angular>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-bills/party-bills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-header-container {\n  font-size: 2rem; }\n\n.ag-body-container {\n  font-size: 1.3rem;\n  line-height: 1; }\n\n.first-column {\n  color: #0275d8;\n  cursor: pointer; }\n\n.first-column:hover {\n  background-color: #b1ebf8;\n  color: black; }\n\n.app-table-cell {\n  padding: 10px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-bills/party-bills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyBillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartyBillsComponent = (function () {
    function PartyBillsComponent(activatedRoute, serverService, partyService, navBarService) {
        this.activatedRoute = activatedRoute;
        this.serverService = serverService;
        this.partyService = partyService;
        this.navBarService = navBarService;
        this.paramsReceived = null;
        this.columnDefs = [
            {
                headerName: "Bill id",
                field: 'billId',
                cellClass: 'first-column app-table-cell'
            },
            {
                headerName: "Job id",
                field: "jobId",
                cellClass: 'second-column app-table-cell'
            },
            {
                headerName: "Bill date",
                field: "billDt",
                cellClass: 'third-column app-table-cell'
            },
            {
                headerName: "Due date",
                field: "dueDt",
                cellClass: 'third-column app-table-cell'
            },
            {
                headerName: "Total amount",
                field: "totalAmount",
                cellClass: 'third-column app-table-cell'
            }
        ];
    }
    PartyBillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partyServiceSubscription = this.partyService.partySourceObservable.subscribe(function (data) {
            if (data.id && data.type === __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */].TYPE_BILLS) {
                _this.paramsReceived = data.id;
                _this.serverService.getRequestByPartyId(_this.paramsReceived, '/bills')
                    .subscribe(function (bills) {
                    console.log(bills);
                    _this.rowData = bills._embedded.bills;
                    _this.gridOptions = {
                        context: {
                            componentParent: _this
                        },
                        rowData: _this.rowData,
                        columnDefs: _this.columnDefs
                    };
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) { return console.log(error); });
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            console.log("sizeColumnsToFit");
            if (_this.gridOptions && _this.gridOptions.api) {
                _this.gridOptions.api.sizeColumnsToFit();
            }
        });
    };
    PartyBillsComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    PartyBillsComponent.prototype.onCellClicked = function ($event) {
        console.log($event.data);
        var href = $event.data._links.self.href;
        var index = (href.lastIndexOf('/') + 1);
        var id = +(href.substr(index));
        console.log(id);
        // this.router.navigate(['job', id, 'invoices'])
        //   .then((value) => {
        //     console.log(value);
        //   }).catch((error) => {
        //   console.log(error)
        // });
    };
    PartyBillsComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log($event.data._links.self);
    };
    PartyBillsComponent.prototype.ngAfterViewInit = function () {
        this.partyService.announceParentComponent(__WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */].TYPE_BILLS);
        if (this.gridOptions && this.gridOptions.api) {
            this.gridOptions.api.sizeColumnsToFit();
        }
    };
    PartyBillsComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
        this.partyServiceSubscription.unsubscribe();
    };
    return PartyBillsComponent;
}());
PartyBillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-party-bills',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-bills/party-bills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-bills/party-bills.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _d || Object])
], PartyBillsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=party-bills.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-ag-grid-wrapper\">\n<ag-grid-angular #agGrid style=\"width: 100%; overflow:hidden;transition: all 0.5s ease-in-out\" class=\"ag-fresh\"\n\n                 [gridOptions]=\"gridOptions\"\n                 [columnDefs]=\"columnDefs\"\n                 domLayout='autoHeight'\n                 [rowData]=\"rowData\"\n                 headerHeight=\"50\"\n                 enableColResize\n                 enableSorting\n                 enableFilter\n\n                 rowHeight=\"40\"\n                 rowSelection=\"multiple\"\n\n                 (modelUpdated)=\"onModelUpdated()\"\n                 (cellClicked)=\"onCellClicked($event)\"\n                 (cellDoubleClicked)=\"onCellDoubleClicked($event)\">\n\n</ag-grid-angular>\n<div>\n  <button class=\"btn btn-primary\">Create Invoice</button>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-header-container {\n  font-size: 2rem; }\n\n.ag-body-container {\n  font-size: 1.3rem;\n  line-height: 1; }\n\n.first-column {\n  color: #0275d8;\n  cursor: pointer; }\n\n.first-column:hover {\n  background-color: #b1ebf8;\n  color: black; }\n\n.app-table-cell {\n  padding: 10px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyInvoicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartyInvoicesComponent = (function () {
    function PartyInvoicesComponent(serverService, navBarService, router, activatedRoute, partyService) {
        this.serverService = serverService;
        this.navBarService = navBarService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.partyService = partyService;
        this.paramsReceived = null;
        this.columnDefs = [
            {
                headerName: "Invoice id",
                field: 'description',
                cellClass: 'first-column app-table-cell'
            },
            {
                headerName: "Job id",
                field: "id",
                cellClass: 'second-column app-table-cell'
            },
            {
                headerName: "Invoice date",
                field: "invoice_dt",
                cellClass: 'third-column app-table-cell'
            },
            {
                headerName: "Due date",
                field: "invoice_due_date",
                cellClass: 'fourth-column app-table-cell'
            },
            {
                headerName: "Total amount",
                field: "total_amount",
                cellClass: 'fifth-column app-table-cell'
            }
        ];
    }
    PartyInvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partyServiceSubscription = this.partyService.partySourceObservable.subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_INVOICES) {
                _this.paramsReceived = data.id;
                _this.serverService.getRequestByPartyId(_this.paramsReceived, '/invoices')
                    .subscribe(function (invoices) {
                    console.log(invoices);
                    if (invoices._embedded) {
                        _this.rowData = invoices._embedded.invoices;
                    }
                    else {
                        _this.rowData = null;
                    }
                }, function (error) {
                    console.log(error);
                });
                console.log(data.data);
            }
            else {
            }
        }, function (error) { return console.log(error); });
        this.gridOptions = {
            context: {
                componentParent: this
            },
            rowData: this.rowData,
            columnDefs: this.columnDefs
        };
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            console.log("sizeColumnsToFit");
            _this.gridOptions.api.sizeColumnsToFit();
        });
    };
    PartyInvoicesComponent.prototype.newCustomer = function () {
    };
    PartyInvoicesComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    PartyInvoicesComponent.prototype.onCellClicked = function ($event) {
        console.log($event.data);
        var href = $event.data._links.self.href;
        var index = (href.lastIndexOf('/') + 1);
        var id = +(href.substr(index));
        console.log(id);
        // this.router.navigate(['job', id, 'invoices'])
        //   .then((value) => {
        //     console.log(value);
        //   }).catch((error) => {
        //   console.log(error)
        // });
    };
    PartyInvoicesComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log($event.data._links.self);
    };
    PartyInvoicesComponent.prototype.ngAfterViewInit = function () {
        this.partyService.announceParentComponent(__WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_INVOICES);
        this.gridOptions.api.sizeColumnsToFit();
    };
    PartyInvoicesComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
        this.partyServiceSubscription.unsubscribe();
    };
    return PartyInvoicesComponent;
}());
PartyInvoicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-party-invoices',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */]) === "function" && _e || Object])
], PartyInvoicesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=party-invoices.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  [Jobs] tab<br>\n\n  heading: Job# id <br>\n\n  for each job linked to the party<br>\n\n  @description<br>\n  @current_status<br>\n\n  [button]: New Job<br>\n\n  [/jobs]<br>\n</p>\n<div *ngIf=\"partyJobs && partyJobs.length !== 0\">\n  <ul *ngFor=\"let partyJob of partyJobs\">\n    <li>Job Id{{partyJob.job_id}}</li>\n    <li>Job status {{partyJob.job_status}}</li>\n  </ul>\n</div>\n<div>\n  <button class=\"btn btn-primary\">Create Job</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyJobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartyJobsComponent = (function () {
    function PartyJobsComponent(activatedRoute, serverService, partyService) {
        this.activatedRoute = activatedRoute;
        this.serverService = serverService;
        this.partyService = partyService;
        this.paramsReceived = null;
    }
    PartyJobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partyServiceSubscription = this.partyService.partySourceObservable.subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */].TYPE_JOBS) {
                _this.paramsReceived = data.id;
                _this.serverService.getRequestByPartyId(_this.paramsReceived, '/jobs')
                    .subscribe(function (jobs) {
                    _this.partyJobs = jobs._embedded.jobs;
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) { return console.log(error); });
        this.partyService.announceParentComponent(__WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */].TYPE_JOBS);
    };
    PartyJobsComponent.prototype.ngOnDestroy = function () {
        this.partyServiceSubscription.unsubscribe();
    };
    return PartyJobsComponent;
}());
PartyJobsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-party-jobs',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */]) === "function" && _c || Object])
], PartyJobsComponent);

var _a, _b, _c;
//# sourceMappingURL=party-jobs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-main/party-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-form-container app-form-container-top\">\n  <h3 class=\"app-form-header\">Customer/Supplier Details</h3>\n  <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n    <!--<fieldset [disabled]=\"true\">-->\n    <div formGroupName=\"userData\">\n      <div class=\"form-group\">\n        <label for=\"party-name\" class=\"app-form-label\">Name</label><span class=\"app-form-label-colon\">:</span>\n        <input\n          type=\"text\"\n          id=\"party-name\"\n          formControlName=\"party-name\"\n          class=\"form-control\"\n          [readonly]=\"!getDetailFormStatus()\">\n      </div>\n      <div class=\"form-group\"\n           *ngIf=\"!signUpForm.get('userData.party-name').valid\n           && signUpForm.get('userData.party-name').errors['required']\n           && signUpForm.get('userData.party-name').touched\">\n        <div class=\"form-control error-message\">\n          <span>Name is required<span class=\"required\">*</span></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"party-contact-name\" class=\"app-form-label\">Contact Name</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <input\n          type=\"text\"\n          id=\"party-contact-name\"\n          formControlName=\"party-contact-name\"\n          class=\"form-control\"\n          [readonly]=\"!getDetailFormStatus()\">\n      </div>\n      <div class=\"form-group\"\n           *ngIf=\"!signUpForm.get('userData.party-contact-name').valid\n           && signUpForm.get('userData.party-contact-name').errors['required']\n           && signUpForm.get('userData.party-contact-name').touched\">\n        <div class=\"form-control error-message\">\n          <span>Contact name is required<span class=\"required\">*</span></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"party-phone\" class=\"app-form-label\">Phone</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <input\n          type=\"text\"\n          id=\"party-phone\"\n          formControlName=\"party-phone\"\n          class=\"form-control\"\n          [readonly]=\"!getDetailFormStatus()\">\n      </div>\n      <div class=\"form-group\"\n           *ngIf=\"!signUpForm.get('userData.party-phone').valid && signUpForm.get('userData.party-phone').touched\">\n        <div *ngIf=\"signUpForm.get('userData.party-phone').errors['required']\"\n             class=\"form-control app-form-control-right error-message\">\n          <span>Phone number is required !<span class=\"required\">*</span></span>\n        </div>\n        <div *ngIf=\"signUpForm.get('userData.party-phone').errors['InvalidPhone']\">\n          <div class=\"form-control app-form-control-right error-message\">\n            <span>Phone number is not valid !<span class=\"required\">*</span></span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"party-mobile\" class=\"app-form-label\">Mobile</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <input\n          type=\"text\"\n          id=\"party-mobile\"\n          formControlName=\"party-mobile\"\n          class=\"form-control\"\n          [readonly]=\"!getDetailFormStatus()\">\n      </div>\n      <div class=\"form-group\"\n           *ngIf=\"!signUpForm.get('userData.party-mobile').valid && signUpForm.get('userData.party-mobile').touched\">\n        <div *ngIf=\"signUpForm.get('userData.party-mobile').errors['required']\"\n             class=\"form-control app-form-control-right error-message\">\n          <span>Mobile number is required !<span class=\"required\">*</span></span>\n        </div>\n        <div *ngIf=\"signUpForm.get('userData.party-mobile').errors['InvalidMobile']\"\n             class=\"form-control app-form-control-right error-message\">\n          <span>Mobile number is not valid !<span class=\"required\">*</span></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"party-email\" class=\"app-form-label\">Email</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <input\n          type=\"text\"\n          id=\"party-email\"\n          formControlName=\"party-email\"\n          class=\"form-control\"\n          [readonly]=\"!getDetailFormStatus()\">\n      </div>\n      <div class=\"form-group\"\n           *ngIf=\"!signUpForm.get('userData.party-email').valid && signUpForm.get('userData.party-email').touched\">\n        <div class=\"form-control error-message\">\n          <span>Email is not valid !<span class=\"required\">*</span></span>\n        </div>\n      </div>\n      <div *ngFor=\"let address of addressFormArray\">\n        <div class=\"form-group\">\n          <label for=\"{{address.name}}\" class=\"app-form-label\">{{address.title}}</label>\n          <span class=\"app-form-label-colon\">:</span>\n          <div class=\"form-control-wrapper {{address.name}}\">\n            <input\n              type=\"text\"\n              id=\"{{address.name}}\"\n              class=\"form-control\"\n              formControlName=\"{{address.name}}\"\n              [readonly]=\"!getDetailFormStatus()\"\n              name=\"{{address.name}}\"\n              (focus)=\"onAddressFocus($event, address)\"\n              (blur)=\"onAddressBlur($event, address)\"\n              (keydown)=\"onAddressKeyUp($event, address)\">\n            <i\n              *ngIf=\"signUpForm.get('userData.' + address.name).valid\"\n              class=\"fa fa-check\" aria-hidden=\"true\">\n            </i>\n            <i\n              *ngIf=\"!signUpForm.get('userData.' + address.name).valid\n                    && address.spinner && signUpForm.get('userData.' + address.name).touched\"\n              class=\"fa fa-spinner\" aria-hidden=\"true\">\n            </i>\n            <img class=\"app-google-logo\" src=\"assets/img/logos/third-party/powered_by_google_on_white_hdpi.png\">\n            <!--<div class=\"app-auto-suggestion-wrapper\"-->\n            <!--*ngIf=\"address.autoAddressesSuggesstion.length != 0-->\n            <!--&& autoSuggestionMode === address.type\">-->\n            <!--<ul>-->\n            <!--<li *ngFor=\"let autoSuggestionAddress of address.autoAddressesSuggesstion\"-->\n            <!--(click)=\"onAddressSelected(address, autoSuggestionAddress)\"-->\n            <!--(mouseover)=\"onAddressHover($event, address.type)\">-->\n            <!--<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>-->\n            <!--{{autoSuggestionAddress.description}}-->\n            <!--</li>-->\n            <!--</ul>-->\n            <!--</div>-->\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"!signUpForm.get('userData.' + address.name).valid\n             && signUpForm.get('userData.' + address.name).touched\n                  && getDetailFormStatus()\">\n          <div class=\"form-control-labeless\">\n            <div class=\"form-control error-message\"\n                 *ngIf=\"signUpForm.get('userData.' + address.name).errors\n                  && signUpForm.get('userData.' + address.name).errors['required']\">\n              <span>Address is required !<span class=\"required\">*</span></span>\n            </div>\n            <div class=\"form-control\"\n                 *ngIf=\"signUpForm.get('userData.' + address.name).errors && signUpForm.get('userData.' + address.name).errors['NoAddressFound']\">\n              <span>Address could not be found !<span class=\"required\">*</span></span>\n            </div>\n            <div class=\"form-control\"\n                 *ngIf=\"signUpForm.get('userData.' + address.name).errors && signUpForm.get('userData.' + address.name).errors['InvalidInput']\">\n              <span>Address entered is not valid !<span class=\"required\">*</span></span>\n            </div>\n            <div class=\"form-control\"\n                 *ngIf=\"signUpForm.get('userData.' + address.name).errors && signUpForm.get('userData.' + address.name).errors['QueryLimitCrossed']\">\n              <span>Exceeded the maximum query limit allowed by google policies !<span class=\"required\">*</span></span>\n            </div>\n            <div class=\"form-control\"\n                 *ngIf=\"signUpForm.get('userData.' + address.name).errors && signUpForm.get('userData.' + address.name).errors['RequestDenied']\">\n              <span>Address request rejected by google !<span class=\"required\">*</span></span>\n            </div>\n            <div class=\"form-control\"\n                 *ngIf=\"signUpForm.get('userData.' + address.name).errors && signUpForm.get('userData.' + address.name).errors['UnknownError']\">\n              <span>Unknown error. Please try again !<span class=\"required\">*</span></span>\n            </div>\n            <!--<div *ngIf=\"!signUpForm.valid && signUpForm.touched\">-->\n            <!--<address>-->\n            <!--<span>Addrees should be of the follwing form</span><br>-->\n            <!--8 Willsmore Street Beverley South Australia 5009<br>-->\n            <!--<span>where</span><br>-->\n            <!--<span>8 -- is the street number,</span><br>-->\n            <!--<span>Willsmore Street -- is the street name,</span><br>-->\n            <!--<span>Beverley -- is the name of the suburb/city/town,</span><br>-->\n            <!--<span>South Australia -- is the name of the state,</span><br>-->\n            <!--<span>5009 -- is the zip/postal code,</span><br>-->\n            <!--</address>-->\n            <!--</div>-->\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"party-file-upload\" class=\"app-form-label\">File Upload</label>\n        <span class=\"app-form-label-colon\">:</span>\n        <input\n          type=\"file\"\n          id=\"party-file-upload\"\n          (change)=\"fileChange($event)\"\n          placeholder=\"Upload file\"\n          accept=\".pdf,.doc,.docx\"\n          [disabled]=\"!getDetailFormStatus()\">\n      </div>\n      <div class=\"form-group\" *ngIf=\"!getDetailFormStatus()\">\n        <div class=\"app-form-control-right\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"createCustomer()\">Create Customer</button>\n\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"editCustomer()\">Edit Customer</button>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"getDetailFormStatus()\">\n        <div class=\"app-form-control-right\">\n          <button class=\"btn btn-primary\" [disabled]=\"!signUpForm.valid\" type=\"submit\">Save</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"dontSaveCustomer()\">Don't Save</button>\n        </div>\n      </div>\n    </div>\n    <br>\n  </form>\n</div>\n<div>\n  <h3 class=\"app-comments-header\">Users Comments</h3>\n  <hr class=\"app-comments-hr\">\n  <div *ngIf=\"usersComments\">\n    <ul class=\"app-users-comments\" *ngFor=\"let eachComment of usersComments; let i = index;\">\n\n      <li class=\"app-user-comment\">{{eachComment.comment}}\n        <span class=\"app-comment-detail\"> - created by\n              <span class=\"app-comment-by\">{{eachComment.user}}</span>\n              on <span class=\"app-comment-on\"> {{eachComment.comment_dtm}}</span></span>\n      </li>\n      <hr class=\"user-comment-hr\">\n    </ul>\n  </div>\n  <div class=\"form-group\" *ngIf=\"newComment\">\n    <div>\n      <textarea rows=\"5\" [(ngModel)]=\"userCommentInput\" class=\"app-new-comment\"></textarea>\n    </div>\n    <div class=\"app-update-comment\">\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"saveUserComment()\">Save</button>\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"dontSaveUserComment()\">Don't Save</button>\n      <button type=\"button\" class=\"btn btn-primary btn-sm\">Upload File</button>\n    </div>\n  </div>\n  <div>\n    <button *ngIf=\"!newComment\" type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"createNewComment()\">New\n      comment\n    </button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-main/party-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-party-main .app-form-container {\n  padding: 20px; }\n\napp-party-main .app-form-container-top {\n  border-top: none; }\n\napp-party-main .app-form-header, app-party-main .app-comments-header {\n  color: #5c5e5f;\n  background-color: white;\n  display: inline-block;\n  padding: 5px 0;\n  border-radius: 5px;\n  margin: 20px 0; }\n\napp-party-main .form-group {\n  position: relative;\n  min-height: 2.3rem;\n  z-index: auto; }\n\napp-party-main .app-form-label {\n  display: inline-block;\n  text-align: left;\n  width: 200px;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #464a4c;\n  background-color: #eceeef;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s; }\n\napp-party-main .app-form-label-colon {\n  text-align: right;\n  display: inline-block;\n  padding: 0 0.5rem; }\n\napp-party-main .app-address-input-wrapper, app-party-main .app-address-error-wrapper {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 229px;\n  width: 60%; }\n\napp-party-main .app-address-input-wrapper .form-control {\n  width: 100%; }\n\napp-party-main .app-form-control-right {\n  position: relative;\n  top: 10px;\n  left: 229px; }\n\napp-party-main .error-message {\n  top: -10px;\n  border: 1px solid red;\n  overflow: visible; }\n\napp-party-main .error-message-helper {\n  border-top: none; }\n\napp-party-main .app-address-error-wrapper {\n  border: 1px solid red; }\n\napp-party-main .required {\n  position: absolute;\n  right: -20px;\n  color: red; }\n\napp-party-main .app-google-logo {\n  position: absolute;\n  width: 8rem;\n  top: 0.75rem;\n  right: 0.5rem; }\n\napp-party-main .fa-check {\n  color: green; }\n\napp-party-main .fa-spinner {\n  -webkit-animation: spinner 3s linear infinite;\n          animation: spinner 3s linear infinite; }\n\napp-party-main .fa-check, app-party-main .fa-spinner {\n  position: absolute;\n  top: 0.75rem;\n  right: 9rem; }\n\napp-party-main .app-auto-suggestion-container > .form-control:focus {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\napp-party-main .app-auto-suggestion-wrapper {\n  position: absolute;\n  top: 2.5rem;\n  left: 0;\n  width: 100%;\n  overflow: visible;\n  border: 1px solid #5cb3fd;\n  border-top: none;\n  min-height: 70px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  z-index: 15;\n  background-color: white; }\n\napp-party-main .form-control, app-party-main .form-control-wrapper {\n  display: inline-block;\n  width: 60%;\n  overflow: visible;\n  position: absolute;\n  left: 229px;\n  min-height: 2.3rem; }\n\napp-party-main .form-control-wrapper {\n  display: block;\n  top: 0;\n  z-index: 10; }\n\napp-party-main .form-control-wrapper > .form-control {\n  left: 0;\n  top: 0;\n  width: 100%; }\n\napp-party-main .form-control-labeless {\n  width: 100%;\n  overflow: visible;\n  position: relative;\n  background-color: white;\n  min-height: 2.3rem; }\n\napp-party-main .app-auto-suggestion-wrapper > ul {\n  list-style: none;\n  padding: 0; }\n\napp-party-main .app-auto-suggestion-wrapper > ul > li {\n  cursor: pointer;\n  padding: 5px 5px 5px 0.5rem;\n  margin: 5px 5px 5px 0.5rem; }\n\napp-party-main .app-auto-suggestion-wrapper > ul > li:hover {\n  background-color: #5cb3fd;\n  color: black; }\n\napp-party-main .fa-map-marker {\n  color: #5cb3fd;\n  padding-right: 0.5rem; }\n\napp-party-main .app-auto-suggestion-wrapper > ul > li:hover .fa-map-marker {\n  color: black; }\n\napp-party-main .party-physical-address {\n  z-index: 10; }\n\napp-party-main .party-mailing-address {\n  z-index: 9; }\n\napp-party-main .app-comments-hr {\n  color: gray;\n  border-top: 2px solid gray;\n  height: 2px; }\n\napp-party-main .app-comment-detail {\n  display: inline-block;\n  padding-left: 0.5rem;\n  line-height: 1.2;\n  font-size: 1rem; }\n\napp-party-main .app-users-comments {\n  list-style: none;\n  font-size: 1.2rem;\n  line-height: 1.2;\n  padding: 0;\n  margin: 0; }\n\napp-party-main .app-comment-by, app-party-main .app-comment-on {\n  color: #0275d8; }\n\napp-party-main .app-new-comment {\n  display: block;\n  width: 80%;\n  overflow: auto; }\n\napp-party-main .app-update-comment {\n  display: block;\n  margin-top: 1rem; }\n\napp-party-main .app-comments-header {\n  margin: 0; }\n\napp-party-main .user-comment-hr {\n  margin: 10px 0; }\n\n@-webkit-keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-main/party-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_party_model__ = __webpack_require__("../../../../../src/app/models/party.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PartyMainComponent = (function () {
    function PartyMainComponent(serverService, http, activatedRoute, changeDetectorRef, router, partyService, ngbModal) {
        this.serverService = serverService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.partyService = partyService;
        this.ngbModal = ngbModal;
        this.party = null;
        this.usersComments = null;
        this.paramsReceived = null;
        this.detailFormActive = false;
        this.newComment = false;
        this.ADDRESS_PHYSICAL = "ADDRESS_PHYSICAL";
        this.ADDRESS_MAILING = "ADDRESS_MAILING";
        this.EDIT_CUSTOMER = "EDIT_CUSTOMER";
        this.CREATE_CUSTOMER = "CREATE_CUSTOMER";
        this.formMode = null;
        this.autoSuggestionMode = null;
        this.addressFormArray = [
            {
                name: 'party-physical-address',
                title: 'Physical Address',
                type: this.ADDRESS_PHYSICAL,
                autoAddressesSuggesstion: [],
                addressSubscription: null,
                spinner: false
            },
            {
                name: 'party-mailing-address',
                title: 'Mailing Address',
                type: this.ADDRESS_MAILING,
                autoAddressesSuggesstion: [],
                addressSubscription: null,
                spinner: false
            }
        ];
        this.googleAutocompleteService = new google.maps.places.AutocompleteService();
        this.googleService = google;
    }
    PartyMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createSignUpForm();
        this.partyServiceSubscription = this.partyService.partySourceObservable
            .subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */].TYPE_MAIN) {
                _this.paramsReceived = data.id;
                _this.serverService.getRequestByPartyId(_this.paramsReceived, null, null)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.party = data;
                    _this.getPartyRequest();
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    PartyMainComponent.prototype.ngAfterViewInit = function () {
        this.partyService.announceParentComponent(__WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */].TYPE_MAIN);
    };
    PartyMainComponent.prototype.getPartyRequest = function () {
        this.setSignUpForm();
        this.getUserComments();
        this.initAddressesSubscription(this.addressFormArray[0]);
        this.initAddressesSubscription(this.addressFormArray[1]);
    };
    PartyMainComponent.prototype.getUserComments = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.paramsReceived, '/comments')
            .subscribe(function (comments) {
            _this.usersComments = comments._embedded.comments;
        }, function (error) {
            console.log(error);
        });
    };
    PartyMainComponent.prototype.createSignUpForm = function () {
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            'userData': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
                'party-name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
                'party-contact-name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
                'party-phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.validatePhone.bind(this)]),
                'party-mobile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.validateMobile.bind(this)]),
                'party-email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email, this.validateEmail.bind(this)]),
                'party-physical-address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required], this.validatePhysicalAddress.bind(this)),
                'party-mailing-address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required], this.validateMailingAddress.bind(this)),
                'party-file-upload': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]({ value: '', disabled: true })
            })
        });
        console.log(this.signUpForm);
    };
    PartyMainComponent.prototype.setSignUpForm = function () {
        this.signUpForm.setValue({
            'userData': {
                'party-name': this.party.name,
                'party-contact-name': this.party.contactName,
                'party-phone': this.party.phone,
                'party-mobile': this.party.mobile,
                'party-email': this.party.email,
                'party-physical-address': this.party.physicalAddressStr,
                'party-mailing-address': this.party.mailingAddressStr,
                'party-file-upload': ''
            }
        });
    };
    PartyMainComponent.prototype.patchSignUpForm = function () {
    };
    PartyMainComponent.prototype.onSubmit = function () {
        console.log(this.signUpForm);
        if (this.formMode == this.CREATE_CUSTOMER) {
            this.saveNewCustomer();
        }
        if (this.formMode == this.EDIT_CUSTOMER) {
            //  this.patchExistingCustomer();
            this.putExistingCustomer();
        }
    };
    PartyMainComponent.prototype.patchExistingCustomer = function () {
        var _this = this;
        console.log("patchExistingCustomercalled");
        var party = new __WEBPACK_IMPORTED_MODULE_6__models_party_model__["a" /* PartyModel */]();
        if (this.signUpForm.valid && this.signUpForm.touched) {
            if (this.signUpForm.get('userData.party-name').touched) {
                party.name = this.signUpForm.get('userData.party-name').value;
            }
            if (this.signUpForm.get('userData.party-email').touched) {
                party.email = this.signUpForm.get('userData.party-email').value;
            }
            if (this.signUpForm.get('userData.party-phone').touched) {
                party.phone = this.partyPhone;
            }
            if (this.signUpForm.get('userData.party-mobile').touched) {
                party.mobile = this.partyMobile;
            }
            if (this.signUpForm.get('userData.party-contact-name').touched) {
                party.contactName = this.signUpForm.get('userData.party-contact-name').value;
            }
            if (this.signUpForm.get('userData.party-mailing-address').touched) {
                party.mailingAddress = this.partyMailingAddress;
            }
            if (this.signUpForm.get('userData.party-physical-address').touched) {
                party.physicalAddress = this.partyPhysicalAddress;
            }
            this.serverService.patchParty(this.paramsReceived, party).subscribe(function (response) {
                alert("Successfully Saved");
                _this.detailFormActive = false;
                _this.getPartyRequest();
                _this.signUpForm.markAsUntouched();
                console.log(response);
            }, function (error) {
                alert("Something went wrong !. Couldn't save the form.");
                console.log(error);
            });
        }
        else {
            alert("The form is either not edited or it is not valid ! \n Please try again.");
        }
    };
    PartyMainComponent.prototype.putExistingCustomer = function () {
        var _this = this;
        console.log("putExistingCustomerCalled");
        if (this.signUpForm.touched && this.signUpForm.valid) {
            var party = new __WEBPACK_IMPORTED_MODULE_6__models_party_model__["a" /* PartyModel */]();
            party.name = this.signUpForm.get('userData.party-name').value;
            party.email = this.signUpForm.get('userData.party-email').value;
            party.phone = this.partyPhone;
            party.mobile = this.partyMobile;
            party.contactName = this.signUpForm.get('userData.party-contact-name').value;
            party.mailingAddress = this.partyMailingAddress;
            party.physicalAddress = this.partyPhysicalAddress;
            party.uuid = this.party.uuid;
            this.serverService.putParty(this.paramsReceived, party).subscribe(function (response) {
                _this.open("Successfully Saved");
                _this.partyService.announceParentComponent(__WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */].TYPE_MAIN);
                _this.detailFormActive = false;
                _this.getPartyRequest();
                _this.signUpForm.markAsUntouched();
                console.log(response);
            }, function (error) {
                console.log(error);
                _this.open("Something went wrong!. Couldn't save the form." + error.toString());
            });
        }
        else {
            this.open("The form is either not edited or it is not valid ! \n Please try again.");
        }
    };
    PartyMainComponent.prototype.saveNewCustomer = function () {
        var _this = this;
        console.log("save new customer called");
        if (this.signUpForm.touched && this.signUpForm.valid) {
            var party = new __WEBPACK_IMPORTED_MODULE_6__models_party_model__["a" /* PartyModel */]();
            party.name = this.signUpForm.get('userData.party-name').value;
            party.email = this.signUpForm.get('userData.party-email').value;
            party.phone = this.partyPhone;
            party.mobile = this.partyMobile;
            party.contactName = this.signUpForm.get('userData.party-contact-name').value;
            party.mailingAddress = this.partyMailingAddress;
            party.physicalAddress = this.partyPhysicalAddress;
            this.serverService.saveParty(party).subscribe(function (response) {
                console.log(response.json());
                _this.open('Succesfully saved');
                var href = response.json()._links.self.href;
                var index = (href.lastIndexOf('/') + 1);
                var id = href.substr(index);
                _this.paramsReceived = id;
                _this.detailFormActive = false;
                _this.router.navigate(['parties', id, 'main'])
                    .then(function (value) {
                    console.log(value);
                }).catch(function (error) { console.log(error); });
            }, function (error) {
                _this.open("Something went wrong!. Couldn't save the form.");
                console.log(error);
            });
        }
        else {
            this.open("The form is either not edited or it is not valid ! \n Please try again.");
        }
    };
    PartyMainComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: null });
            this.http.post("apiEndpoint", formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error); })
                .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
        }
    };
    PartyMainComponent.prototype.createNewComment = function () {
        console.log("create new comment");
        this.newComment = true;
    };
    PartyMainComponent.prototype.usersCommentFileUpload = function ($event) {
        console.log("usersCommentFileUpload called");
    };
    PartyMainComponent.prototype.editCustomer = function () {
        this.detailFormActive = true;
        this.formMode = this.EDIT_CUSTOMER;
    };
    PartyMainComponent.prototype.dontSaveCustomer = function () {
        this.setSignUpForm();
        this.signUpForm.markAsUntouched();
        this.addressFormArray[0].autoAddressesSuggesstion.length = 0;
        this.addressFormArray[1].autoAddressesSuggesstion.length = 0;
        this.detailFormActive = false;
    };
    PartyMainComponent.prototype.createCustomer = function () {
        this.signUpForm.reset();
        this.detailFormActive = true;
        this.formMode = this.CREATE_CUSTOMER;
    };
    PartyMainComponent.prototype.validatePhone = function (control) {
        var regex = /^(0(2|3|7|8))?\d{8}$/;
        var phone = control.value;
        console.log(control);
        console.log(phone);
        if (phone) {
            if (!regex.test(phone.replace(/\(+/g, '').replace(/\)+/g, '').replace(/\s+/g, '').replace(/-+/g, ''))) {
                console.log("Phone number is invalid");
                return { 'InvalidPhone': true };
            }
            else {
                this.partyPhone = phone.replace(/\(+/g, '').replace(/\)+/g, '').replace(/\s+/g, '').replace(/-+/g, '');
            }
        }
        return null;
    };
    PartyMainComponent.prototype.validateMobile = function (control) {
        var regex = /^04\d{8}$/;
        var mobile = control.value;
        if (mobile) {
            console.log(regex.exec(mobile.replace(/\(+/g, '').replace(/\)+/g, '').replace(/\s+/g, '').replace(/-+/g, '')));
            if (!regex.test(mobile.replace(/\(+/g, '').replace(/\)+/g, '').replace(/\s+/g, '').replace(/-+/g, ''))) {
                console.log("Mobile number is invalid");
                return { 'InvalidMobile': true };
            }
            else {
                this.partyMobile = mobile.replace(/\(+/g, '').replace(/\)+/g, '').replace(/\s+/g, '').replace(/-+/g, '');
            }
        }
        return null;
    };
    PartyMainComponent.prototype.validateEmail = function (control) {
        var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([a-z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])$/;
        var email = control.value;
        if (email) {
            console.log(email);
            if (!regex.test(email.toLowerCase())) {
                console.log("Email is invalid");
                return { 'InvalidEmail': true };
            }
        }
        return null;
    };
    PartyMainComponent.prototype.subscribeSignUpForm = function () {
        this.signUpForm.statusChanges.subscribe(function (status) { return console.log(status); });
        this.signUpForm.valueChanges.subscribe(function (value) {
            console.log(value);
        });
    };
    PartyMainComponent.prototype.validatePhysicalAddress = function (control) {
        this.addressFormArray[0].spinner = true;
        return this.validateAddress(control, this.ADDRESS_PHYSICAL);
    };
    PartyMainComponent.prototype.validateMailingAddress = function (control) {
        this.addressFormArray[1].spinner = true;
        return this.validateAddress(control, this.ADDRESS_MAILING);
    };
    PartyMainComponent.prototype.validateAddress = function (control, addressType) {
        var tempRef = this;
        var address = control.value;
        console.log(control);
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (response) {
            /* this should be the place to filter input given by the user */
            if (address) {
                address = address.trim();
                if (/\d+$/.test(address)) {
                    address = address + ' Australia';
                }
            }
            tempRef.googleAutocompleteService.getPlacePredictions({ componentRestrictions: { country: 'AU' }, input: address }, function (predictions, status) {
                console.log(status);
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.OK) {
                    console.log(predictions);
                    predictions.forEach(function (value) {
                        var searchResult = value.description.replace(/\,+/g, '').trim().toLowerCase();
                        var searchAddress = address.replace(/\,+/g, '').trim().toLowerCase();
                        console.log(searchResult);
                        console.log(searchAddress);
                        console.log(value);
                        console.log(value.terms);
                        if ((searchResult === searchAddress && value.terms.length == 6
                            && /^\d+$/.test(value.terms[0].value) && /^\d+$/.test(value.terms[4].value)
                            && value.terms[5].value.toLowerCase() === 'australia')
                            ||
                                (searchResult === searchAddress && value.terms.length == 5
                                    && /^\d+.+$/.test(value.terms[0].value) && /^\d+$/.test(value.terms[3].value)
                                    && value.terms[4].value.toLowerCase() === 'australia')) {
                            console.log("address is valid from google results");
                            response.next(null);
                            response.complete();
                            tempRef.setAddress(value, addressType);
                        }
                    });
                    response.next({ 'NoAddressFound': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    response.next({ 'NoAddressFound': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
                    response.next({ 'InvalidInput': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    response.next({ 'QueryLimitCrossed': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
                    response.next({ 'RequestDenied': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
                    response.next({ 'UnknownError': true });
                    response.complete();
                }
            });
        });
    };
    PartyMainComponent.prototype.initAddressesSubscription = function (address) {
        var _this = this;
        var tempRef = this;
        if (!address.addressSubscription || address.addressSubscription.closed) {
            console.log(address.addressSubscription);
            address.addressSubscription = this.signUpForm.get('userData.' + address.name).valueChanges.subscribe(function (value) {
                console.log(value);
                if (value) {
                    _this.googleAutocompleteService.getPlacePredictions({ componentRestrictions: { country: 'au' }, input: value }, function (predictions, status) {
                        if (status == 'OK') {
                            address.autoAddressesSuggesstion = predictions;
                            if (tempRef.signUpForm.get('userData.' + address.name).value
                                === predictions[0].description && predictions.length === 1) {
                                address.autoAddressesSuggesstion.length = 0;
                            }
                        }
                        else {
                            address.autoAddressesSuggesstion.length = 0;
                        }
                    });
                }
            });
        }
    };
    PartyMainComponent.prototype.cancelAddressesSubscription = function (address) {
        if (address.addressSubscription && !address.addressSubscription.closed) {
            address.addressSubscription.unsubscribe();
        }
    };
    PartyMainComponent.prototype.onAddressFocus = function ($event, address) {
        console.log("on address focus");
        address.spinner = true;
        if (address.type == this.ADDRESS_PHYSICAL) {
            this.addressFormArray[1].spinner = false;
        }
        if (address.type == this.ADDRESS_MAILING) {
            this.addressFormArray[0].spinner = false;
        }
        this.changeDetectorRef.detectChanges();
    };
    PartyMainComponent.prototype.onAddressBlur = function ($event, address) {
        address.spinner = false;
        this.changeDetectorRef.detectChanges();
    };
    PartyMainComponent.prototype.onAddressSelected = function (address, addressSelected) {
        this.cancelAddressesSubscription(address);
        //address.autoAddressesSuggesstion.length = 0;
        this.signUpForm.get('userData.' + address.name).setValue(addressSelected.description);
        var ref = this;
        setTimeout(function () {
            ref.changeDetectorRef.detectChanges();
        }, 600);
    };
    PartyMainComponent.prototype.onAddressKeyUp = function ($event, address) {
        console.log($event);
    };
    PartyMainComponent.prototype.getDetailFormStatus = function () {
        return this.detailFormActive;
    };
    PartyMainComponent.prototype.onAddressHover = function ($event) {
        console.log($event);
        $event.target.focus();
    };
    PartyMainComponent.prototype.setAddress = function (value, type) {
        var tempAddress = null;
        if (value.terms.length === 6) {
            tempAddress = value.terms[0].value + " " + value.terms[1].value + ":" +
                value.terms[2].value + ":" + value.terms[3].value + ":" +
                value.terms[4].value + ":" + value.terms[5].value;
        }
        else if (value.terms.length === 5) {
            tempAddress = value.terms[0].value + ":" + value.terms[1].value + ":" +
                value.terms[2].value + ":" + value.terms[3].value + ":" + value.terms[4].value;
        }
        if (type == this.ADDRESS_PHYSICAL) {
            this.addressFormArray[0].spinner = false;
            this.partyPhysicalAddress = tempAddress;
        }
        else if (type == this.ADDRESS_MAILING) {
            this.partyMailingAddress = tempAddress;
            this.addressFormArray[1].spinner = false;
        }
        this.changeDetectorRef.detectChanges();
    };
    PartyMainComponent.prototype.open = function (content) {
        var _this = this;
        this.ngbModal.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PartyMainComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PartyMainComponent.prototype.saveUserComment = function () {
        var _this = this;
        if (this.userCommentInput && this.userCommentInput.replace(/^\s+$/, '') != "") {
            var comment = {
                "comment": this.userCommentInput,
                "staff": "/staffs/" + this.paramsReceived,
                "party": "/parties/" + this.paramsReceived,
            };
            this.serverService.saveUserComment(comment)
                .subscribe(function (response) {
                console.log(response);
                _this.ngbModal.open("Comments Succesfull saved");
                _this.getUserComments();
                _this.dontSaveUserComment();
            });
        }
        else {
            this.ngbModal.open("Please enter a valid comment");
        }
    };
    PartyMainComponent.prototype.dontSaveUserComment = function () {
        this.userCommentInput = "";
        this.newComment = false;
    };
    PartyMainComponent.prototype.ngOnDestroy = function () {
        this.partyServiceSubscription.unsubscribe();
    };
    return PartyMainComponent;
}());
PartyMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-party-main',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-main/party-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-main/party-main.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _g || Object])
], PartyMainComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=party-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"app-party\">{{data?.name}}</h1>\n<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\"  (click)=\"onTabSelected()\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"main\">Main</a>\n  </li>\n  <li class=\"nav-item\"  (click)=\"onTabSelected()\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"jobs\">Jobs</a>\n  </li>\n  <li *ngIf=\"partyInvoices && partyInvoices.length !=0\"\n      class=\"nav-item\"  (click)=\"onTabSelected()\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"invoices\">Invoices</a>\n  </li>\n  <li *ngIf=\"partyBills && partyBills.length !=0\"\n      class=\"nav-item\" (click)=\"onTabSelected()\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"bills\">Bills</a>\n  </li>\n</ul>\n<div class=\"app-party-wrapper\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-party .app-party {\n  margin-bottom: 1rem; }\n\napp-party .nav-item {\n  font-size: 1.3rem;\n  line-height: 1.5;\n  width: 150px;\n  text-align: center; }\n\napp-party .app-party-wrapper {\n  min-height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartyComponent = (function () {
    function PartyComponent(activatedRoute, router, serverService, location, partyService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.serverService = serverService;
        this.location = location;
        this.partyService = partyService;
        this.partyBills = null;
        this.partyInvoices = null;
        this.partyJobs = null;
    }
    PartyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['id']);
            _this.paramsReceived = params['id'];
            _this.makeDataRequest();
        }, function (error) { return console.log(error); });
    };
    PartyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.childComponentSubscription = this.partyService.childComponentObservable
            .subscribe(function (data) {
            if (data === __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_MAIN) {
                _this.makePartyRequest();
            }
            if (data === __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_JOBS) {
                _this.makeJobsRequest();
            }
            if (data === __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_INVOICES) {
                _this.makeInvoicesRequest();
            }
            if (data === __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_BILLS) {
                _this.makeBillsRequest();
            }
        });
    };
    PartyComponent.prototype.makeDataRequest = function () {
        this.makePartyRequest();
        this.makeJobsRequest();
        this.makeBillsRequest();
        this.makeInvoicesRequest();
    };
    PartyComponent.prototype.makePartyRequest = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.paramsReceived, null, null)
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
            _this.partyService.announcePartyDetail({ id: _this.paramsReceived, type: __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_MAIN });
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.makeJobsRequest = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.paramsReceived, '/jobs')
            .subscribe(function (jobs) {
            _this.partyJobs = jobs._embedded.jobs;
            _this.partyService.announcePartyDetail({ id: _this.paramsReceived, type: __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_JOBS });
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.makeBillsRequest = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.paramsReceived, '/bills')
            .subscribe(function (bills) {
            console.log(bills);
            _this.partyBills = bills._embedded.bills;
            _this.partyService.announcePartyDetail({ id: _this.paramsReceived, type: __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_BILLS });
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.makeInvoicesRequest = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.paramsReceived)
            .subscribe(function (invoices) {
            if (invoices._embedded) {
                _this.partyInvoices = invoices._embedded.invoices;
            }
            else {
                _this.partyInvoices = null;
            }
            _this.partyService.announcePartyDetail({ id: _this.paramsReceived, type: __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_INVOICES });
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.onTabSelected = function () {
    };
    return PartyComponent;
}());
PartyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-party',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */]) === "function" && _e || Object])
], PartyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=party.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/party.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyModel; });
var PartyModel = (function () {
    function PartyModel() {
    }
    return PartyModel;
}());

//# sourceMappingURL=party.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/form-validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormValidationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormValidationService = (function () {
    function FormValidationService() {
    }
    return FormValidationService;
}());
FormValidationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FormValidationService);

//# sourceMappingURL=form-validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobService = (function () {
    function JobService() {
        this.jobSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.jobSourceObservable = this.jobSource.asObservable();
        this.childComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.childComponentObservable = this.childComponentSubject.asObservable();
    }
    JobService.prototype.announceJobDetail = function (data) {
        console.log(data);
        this.jobSource.next(data);
    };
    JobService.prototype.announceParentComponent = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.childComponentSubject.next(data);
        }, 100);
    };
    return JobService;
}());
JobService.TYPE_MAIN = 'TYPE_MAIN';
JobService.TYPE_JOBS = 'TYPE_JOBS';
JobService.TYPE_BILLS = 'TYPE_BILLS';
JobService.TYPE_INVOICES = 'TYPE_INVOICES';
JobService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], JobService);

//# sourceMappingURL=job.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/nav-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarService = (function () {
    function NavBarService() {
        this.navBarSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    NavBarService.prototype.getNavBarSubject = function () {
        return this.navBarSubject;
    };
    return NavBarService;
}());
NavBarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NavBarService);

//# sourceMappingURL=nav-bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/party.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartyService = (function () {
    function PartyService() {
        this.partySource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.partySourceObservable = this.partySource.asObservable();
        this.childComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.childComponentObservable = this.childComponentSubject.asObservable();
    }
    PartyService.prototype.announcePartyDetail = function (data) {
        console.log(data);
        this.partySource.next(data);
    };
    PartyService.prototype.announceParentComponent = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.childComponentSubject.next(data);
        }, 100);
    };
    return PartyService;
}());
PartyService.TYPE_MAIN = 'TYPE_MAIN';
PartyService.TYPE_JOBS = 'TYPE_JOBS';
PartyService.TYPE_BILLS = 'TYPE_BILLS';
PartyService.TYPE_INVOICES = 'TYPE_INVOICES';
PartyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PartyService);

//# sourceMappingURL=party.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/server-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080";
        this.apiUrl = this.baseUrl + "/api";
        this.partiesUrl = this.apiUrl + "/parties";
        this.jobsUrl = this.apiUrl + "/jobs";
        this.optionsArgument = "page=1";
    }
    ServerService.prototype.getAllParties = function () {
        return this.http.get(this.partiesUrl)
            .map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    ServerService.prototype.getAllJobs = function () {
        return this.http.get(this.jobsUrl)
            .map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    ServerService.prototype.getRequestByJobId = function (Id) {
        return this.http.get(this.jobsUrl + "/" + Id)
            .map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    ServerService.prototype.getRequestByPartyId = function (id, path, reuquestOptionParams) {
        console.log(path);
        path = path ? path : '';
        return this.http.get(this.partiesUrl + "/" + id + path, reuquestOptionParams)
            .map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    ServerService.prototype.getRequestByPath = function (path) {
        return this.http.get(path)
            .map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    //* var firstHeaders = new Headers();
    //* firstHeaders.append('Content-Type', 'image/jpeg');
    ServerService.prototype.saveParty = function (party) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:8080/api/parties/", party, { headers: headers });
    };
    ServerService.prototype.patchParty = function (id, party) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch("http://localhost:8080/api/parties/" + id, party, { headers: headers });
    };
    ServerService.prototype.putParty = function (id, party) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("http://localhost:8080/api/parties/" + id, party, { headers: headers });
    };
    ServerService.prototype.saveUserComment = function (userComment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:8080/api/comments", userComment, { headers: headers });
    };
    return ServerService;
}());
ServerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server-service.js.map

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
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map