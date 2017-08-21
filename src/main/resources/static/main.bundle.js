webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_jobs_job_job_schedules_job_schedules_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-schedules/job-schedules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_jobs_job_job_bills_job_bills_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-bills/job-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_jobs_job_job_field_works_job_field_works_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-field-works/job-field-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_jobs_job_job_costs_job_costs_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-costs/job-costs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_jobs_job_job_invoices_job_invoices_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_parties_party_party_comments_party_comments_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-comments/party-comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_staff_staff_component__ = __webpack_require__("../../../../../src/app/components/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_jobs_job_job_timeline_job_timeline_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-timeline/job-timeline.component.ts");
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
            { path: 'comments', component: __WEBPACK_IMPORTED_MODULE_17__components_parties_party_party_comments_party_comments_component__["a" /* PartyCommentsComponent */] },
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
            { path: 'schedules', component: __WEBPACK_IMPORTED_MODULE_12__components_jobs_job_job_schedules_job_schedules_component__["a" /* JobSchedulesComponent */] },
            { path: 'field-works', component: __WEBPACK_IMPORTED_MODULE_14__components_jobs_job_job_field_works_job_field_works_component__["a" /* JobFieldWorksComponent */] },
            { path: 'bills', component: __WEBPACK_IMPORTED_MODULE_13__components_jobs_job_job_bills_job_bills_component__["a" /* JobBillsComponent */] },
            { path: 'costs', component: __WEBPACK_IMPORTED_MODULE_15__components_jobs_job_job_costs_job_costs_component__["a" /* JobCostsComponent */] },
            { path: 'invoices', component: __WEBPACK_IMPORTED_MODULE_16__components_jobs_job_job_invoices_job_invoices_component__["a" /* JobInvoicesComponent */] },
            { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_19__components_jobs_job_job_timeline_job_timeline_component__["a" /* JobTimelineComponent */] },
        ]
    },
    { path: 'staff', component: __WEBPACK_IMPORTED_MODULE_18__components_staff_staff_component__["a" /* StaffComponent */] },
    { path: '**', redirectTo: 'parties', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\" id=\"app-body\">\n  <app-navbar id=\"app-sidebar\" class=\"app-navbar\">\n\n  </app-navbar>\n  <div id=\"app-main\" class=\"app-main\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-body {\n  position: relative; }\n\n#app-sidebar {\n  font-family: Arial, Helvetica, \"Palatino Linotype\", Georgia, serif;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  top: 0;\n  bottom: 0;\n  width: 15rem;\n  min-height: 100vh;\n  height: 100vh;\n  background-color: #37517E; }\n\n#app-main {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 15rem;\n  right: 0;\n  background-image: linear-gradient(to bottom, #dddbd1, #d2dbdc);\n  min-height: 100vh; }\n\nrouter-outlet {\n  height: 0;\n  width: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_interaction_service__ = __webpack_require__("../../../../../src/app/services/app-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    function AppComponent(navBarService, changeDetectorRef, activatedRoute, router, serverService, location, appInteractionService) {
        this.navBarService = navBarService;
        this.changeDetectorRef = changeDetectorRef;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.serverService = serverService;
        this.location = location;
        this.appInteractionService = appInteractionService;
        this.title = 'Jobowit';
        this.state = 'expanded';
        this.isCollapsed = false;
        this.data = null;
        this.id = null;
        this.type = null;
        this.jobId = null;
        this.partyId = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navBarSubject = this.navBarService.getNavBarSubject();
        console.log(this.activatedRoute.snapshot);
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
        }, function (error) { return console.log(error); });
        this.childComponentSubscription = this.appInteractionService.childComponentObservable
            .subscribe(function (data) {
            if (data && data.id) {
                _this.id = data.id;
            }
            if (data && data.type) {
                _this.type = data.type;
            }
            if (data && data.partyId) {
                _this.partyId = data.partyId;
            }
            _this.appInteractionService.announceRequestDetail({
                id: _this.id,
                type: _this.type,
                partyId: _this.partyId
            });
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.toggleCollapse = function () {
        if (this.state == 'expanded') {
            this.state = 'collapsed';
        }
        else {
            this.state = 'expanded';
            this.changeDetectorRef.detectChanges();
        }
    };
    AppComponent.prototype.onTransitionEnd = function ($event) {
        this.navBarSubject.next();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_nav_bar_service__["a" /* NavBarService */], __WEBPACK_IMPORTED_MODULE_3__services_app_interaction_service__["a" /* AppInteractionService */]],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* trigger */])('app-sidebar', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({
                    left: '200px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({
                    left: '0'
                }))
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_server_service__["a" /* ServerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_interaction_service__["a" /* AppInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_interaction_service__["a" /* AppInteractionService */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_parties_parties_component__ = __webpack_require__("../../../../../src/app/components/parties/parties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_parties_party_party_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_parties_party_party_main_party_main_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-main/party-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_parties_party_party_jobs_party_jobs_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_parties_party_party_invoices_party_invoices_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_parties_party_party_bills_party_bills_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-bills/party-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_form_validation_service__ = __webpack_require__("../../../../../src/app/services/form-validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_jobs_jobs_component__ = __webpack_require__("../../../../../src/app/components/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_jobs_job_job_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_jobs_job_job_main_job_main_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-main/job-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_jobs_job_job_comments_job_comments_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-comments/job-comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_jobs_job_job_schedules_job_schedules_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-schedules/job-schedules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_jobs_job_job_field_works_job_field_works_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-field-works/job-field-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_jobs_job_job_bills_job_bills_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-bills/job-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_jobs_job_job_costs_job_costs_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-costs/job-costs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_jobs_job_job_invoices_job_invoices_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_parties_party_party_comments_party_comments_component__ = __webpack_require__("../../../../../src/app/components/parties/party/party-comments/party-comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_form_input_directive__ = __webpack_require__("../../../../../src/app/directives/form-input.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_staff_staff_component__ = __webpack_require__("../../../../../src/app/components/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_jobs_job_job_timeline_job_timeline_component__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-timeline/job-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_invoices_invoices_component__ = __webpack_require__("../../../../../src/app/components/invoices/invoices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_bills_bills_component__ = __webpack_require__("../../../../../src/app/components/bills/bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_app_pager_service__ = __webpack_require__("../../../../../src/app/services/app-pager.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_parties_parties_component__["a" /* PartiesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_parties_party_party_component__["a" /* PartyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_parties_party_party_main_party_main_component__["a" /* PartyMainComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_parties_party_party_jobs_party_jobs_component__["a" /* PartyJobsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_parties_party_party_invoices_party_invoices_component__["a" /* PartyInvoicesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_parties_party_party_bills_party_bills_component__["a" /* PartyBillsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_jobs_jobs_component__["a" /* JobsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_jobs_job_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_jobs_job_job_main_job_main_component__["a" /* JobMainComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_jobs_job_job_comments_job_comments_component__["a" /* JobCommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_jobs_job_job_schedules_job_schedules_component__["a" /* JobSchedulesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_jobs_job_job_field_works_job_field_works_component__["a" /* JobFieldWorksComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_jobs_job_job_bills_job_bills_component__["a" /* JobBillsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_jobs_job_job_costs_job_costs_component__["a" /* JobCostsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_jobs_job_job_invoices_job_invoices_component__["a" /* JobInvoicesComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_parties_party_party_comments_party_comments_component__["a" /* PartyCommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__directives_form_input_directive__["a" /* FormInputDirective */],
            __WEBPACK_IMPORTED_MODULE_27__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_jobs_job_job_timeline_job_timeline_component__["a" /* JobTimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_invoices_invoices_component__["a" /* InvoicesComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_bills_bills_component__["a" /* BillsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* JsonpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_14__services_form_validation_service__["a" /* FormValidationService */], __WEBPACK_IMPORTED_MODULE_32__services_app_pager_service__["a" /* AppPagerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/bills/bills.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bills works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/bills/bills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bills/bills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsComponent; });
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

var BillsComponent = (function () {
    function BillsComponent() {
    }
    BillsComponent.prototype.ngOnInit = function () {
    };
    return BillsComponent;
}());
BillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bills',
        template: __webpack_require__("../../../../../src/app/components/bills/bills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bills/bills.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BillsComponent);

//# sourceMappingURL=bills.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/invoices/invoices.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  invoices works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/invoices/invoices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/invoices/invoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesComponent; });
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

var InvoicesComponent = (function () {
    function InvoicesComponent() {
    }
    InvoicesComponent.prototype.ngOnInit = function () {
    };
    return InvoicesComponent;
}());
InvoicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-invoices',
        template: __webpack_require__("../../../../../src/app/components/invoices/invoices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/invoices/invoices.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InvoicesComponent);

//# sourceMappingURL=invoices.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-bills/job-bills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-ag-grid-wrapper\">\n\n  <div>\n    <button class=\"btn btn-primary\">Create Invoice</button>\n  </div>\n</div>\n"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobBillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
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
    function JobBillsComponent(serverService, navBarService, router, activatedRoute, jobService) {
        this.serverService = serverService;
        this.navBarService = navBarService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobService = jobService;
        this.paramsReceived = null;
        this.path = null;
        this.columnDefs = [
            {
                headerName: "Bill Ref",
                field: 'reference',
                cellClass: 'first-column app-table-cell'
            },
            {
                headerName: "Party Name",
                field: "customerName",
                cellClass: 'second-column app-table-cell'
            },
            {
                headerName: "Bill Date",
                field: "startDate",
                cellClass: 'third-column app-table-cell'
            },
            {
                headerName: "Due Date",
                field: "finishDate",
                cellClass: 'fourth-column app-table-cell'
            },
            {
                headerName: "Tax Inclusive",
                field: "taxInclusive",
                cellClass: 'fifth-column app-table-cell'
            },
            {
                headerName: "Total Amount",
                field: "totalAmount",
                cellClass: 'sixth-column app-table-cell'
            },
            {
                headerName: "Total Sell Amount",
                field: "totalSellAmountAmount",
                cellClass: 'seventh-column app-table-cell'
            }
        ];
    }
    JobBillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobServiceSubscription = this.jobService.jobSourceObservable.subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */].TYPE_BILLS) {
                _this.paramsReceived = data.id;
                _this.path = "http://localhost:8081/api/jobs/" + _this.paramsReceived + "/bills";
                console.log(data);
                _this.getBills();
            }
        }, function (error) { return console.log(error); });
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            console.log("sizeColumnsToFit");
        });
    };
    JobBillsComponent.prototype.getBills = function () {
        var _this = this;
        this.serverService.getRequestByPath(this.path)
            .subscribe(function (bills) {
            console.log(bills);
            if (bills._embedded) {
                _this.rowData = bills._embedded.bills;
                _this.formatRowData();
            }
            else {
                _this.rowData = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    // @bill_ref | @party_name | @bill_date | @due_date <br>
    // | @tax_inclusive | @total_amount | @total_sell_amount <br>
    JobBillsComponent.prototype.formatRowData = function () {
        for (var i = 0; i < this.rowData.length; i++) {
            var startFullDate = new Date(this.rowData[i].billDt);
            var finishFullDate = new Date(this.rowData[i].dueDt);
            this.rowData[i].startDate = startFullDate.toDateString();
            this.rowData[i].startTime = startFullDate.toLocaleTimeString();
            this.rowData[i].finishDate = finishFullDate.toDateString();
            this.rowData[i].finishTime = finishFullDate.toLocaleTimeString();
        }
    };
    JobBillsComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    JobBillsComponent.prototype.onCellClicked = function ($event) {
        console.log($event.data);
        var href = $event.data._links.self.href;
        var index = (href.lastIndexOf('/') + 1);
        var id = +(href.substr(index));
        console.log(id);
        // this.router.navigate(['job', id, 'bills'])
        //   .then((value) => {
        //     console.log(value);
        //   }).catch((error) => {
        //   console.log(error)
        // });
    };
    JobBillsComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log($event.data._links.self);
    };
    JobBillsComponent.prototype.ngAfterViewInit = function () {
        this.jobService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */].TYPE_BILLS });
    };
    JobBillsComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
        this.jobServiceSubscription.unsubscribe();
    };
    return JobBillsComponent;
}());
JobBillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job-bills',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-bills/job-bills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-bills/job-bills.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */]) === "function" && _e || Object])
], JobBillsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=job-bills.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-comments/job-comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-form-groups-container\">\n  <h3 class=\"app-form-header\">Users Comments</h3>\n  <hr class=\"app-comments-hr\">\n  <div *ngIf=\"userComments\">\n    <div class=\"app-users-comments\" *ngFor=\"let eachComment of userComments; let i = index;\">\n\n      <div class=\"app-user-comment\">{{i + 1}}.&nbsp;{{eachComment.comment}}\n        <span class=\"app-comment-detail\"> - created by\n              <span class=\"app-comment-by\">{{eachComment.user}}</span>\n              on <span class=\"app-comment-on\"> {{eachComment.commentDtm}}</span></span>\n      </div>\n      <div *ngIf=\"eachComment.uploadedFiles && eachComment.uploadedFiles.length != 0\">\n        <span>Files:</span>\n        <a [href]=\"commentsUploadedFiles + '/' + eachFile.uuid + '/download'\" *ngFor=\"let eachFile of eachComment.uploadedFiles\">\n          {{eachFile.name}}\n\n        </a>\n      </div>\n      <hr class=\"user-comment-hr\">\n    </div>\n  </div>\n  <form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"newComment\" class=\"app-form\">\n    <div class=\"app-form-group\">\n      <div class=\"app-form-input-wrapper app-form-comments-wrapper\">\n        <textarea\n          placeholder=\"Enter comment\"\n          rows=\"5\"\n          appFormInput\n          formControlName=\"user-comment\"\n          class=\"app-form-input app-form-comment-input\">\n        </textarea>\n      </div>\n    </div>\n    <div class=\"app-form-group app-form-uploaded-Files\" *ngIf=\"uploadedFiles.length != 0\">\n      <span>Uploaded Files:&nbsp;&nbsp;&nbsp;\n        <span *ngFor=\"let uploadedFile of uploadedFiles\">\n        {{uploadedFile.name}}\n      </span>\n      </span>\n    </div>\n    <div class=\"app-form-group\">\n      <div class=\"app-form-input-wrapper\n                  app-form-file-upload-wrapper\">\n        <button type=\"submit\"\n                class=\"btn btn-primary\n                       app-form-save-button\"\n                [disabled]=\"getFileUploadStatus()\">\n          Save\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-primary\n                       app-form-dont-save-button\"\n                [disabled]=\"getFileUploadStatus()\"\n                (click)=\"dontSaveUserComment()\">Don't Save</button>\n        <input\n          type=\"file\"\n          id=\"party-file-upload\"\n          #fileInput\n          appFormInput\n          class=\"app-form-input  app-form-file-upload\"\n          placeholder=\"Upload file\"\n          accept=\".pdf,.doc,.docx\"\n          [disabled]=\"getFileUploadStatus()\">\n        <div class=\"app-form-file-upload-message\" *ngIf=\"getUploadMessage()\">\n          {{this.uploadMessage}}\n        </div>\n        <button type=\"button\"\n                class=\"btn btn-primary\n                       app-form-file-upload-button\"\n                [disabled]=\"getFileUploadStatus()\"\n                (click)=\"uploadFile()\">Upload File</button>\n      </div>\n    </div>\n  </form>\n  <div>\n    <button *ngIf=\"!newComment\" type=\"button\" class=\"btn btn-primary\" (click)=\"createNewComment()\">New\n      comment\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-comments/job-comments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-job-comments .app-form-group {\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr; }\n\napp-job-comments .app-form-input-wrapper {\n  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  margin: 1rem 0 1rem 0;\n  padding: 0.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-comments/job-comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
    function JobCommentsComponent(serverService, http, activatedRoute, changeDetectorRef, router, jobService, ngbModal) {
        this.serverService = serverService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.jobService = jobService;
        this.ngbModal = ngbModal;
        this.userComments = null;
        this.newComment = false;
        this.path = null;
        this.uploadMessage = null;
        this.uploadingFile = false;
        this.commentUuid = null;
        this.uploadedFiles = [];
        this.commentsUploadedFiles = __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */].uploadedFilesUrl;
    }
    JobCommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobServiceSubscription = this.jobService.jobSourceObservable
            .subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_5__services_job_service__["a" /* JobService */].TYPE_COMMENTS) {
                _this.paramsReceived = data.id;
                _this.path = "http://localhost:8081/api/jobs/" + _this.paramsReceived + "/comments";
                _this.getUserComments();
            }
        });
    };
    JobCommentsComponent.prototype.ngAfterViewInit = function () {
        this.jobService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_5__services_job_service__["a" /* JobService */].TYPE_COMMENTS });
    };
    JobCommentsComponent.prototype.getUserComments = function () {
        var _this = this;
        this.serverService.getRequestByPath(this.path)
            .subscribe(function (comments) {
            console.log(comments);
            _this.userComments = comments._embedded.comments;
            _this.formatComments();
            _this.getCommentsFiles();
        }, function (error) {
            console.log(error);
        });
    };
    JobCommentsComponent.prototype.formatComments = function () {
        this.userComments.forEach(function (data) {
            var date = data.commentDtm;
            var formattedDate = new Date(date);
            data.commentDtm = formattedDate.toDateString();
        });
        this.userComments.forEach(function (data) {
            console.log(data);
            var path = data._links.self.href;
            var index = path.lastIndexOf("/") + 1;
            data.commentId = path.substring(index);
        });
    };
    JobCommentsComponent.prototype.getCommentsFiles = function () {
        var _this = this;
        this.userComments.forEach(function (comment) {
            _this.serverService.getUploadedFilesFromCommentsId(comment.commentId).
                subscribe(function (response) {
                comment.uploadedFiles = response._embedded.uploadedFiles;
                console.log(comment.uploadedFiles);
            }, function (error) {
                console.log(error);
            });
        });
    };
    JobCommentsComponent.prototype.createNewComment = function () {
        console.log("create new comment");
        this.createCommentForm();
        this.newComment = true;
    };
    JobCommentsComponent.prototype.createCommentForm = function () {
        this.commentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'user-comment': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.validateComment.bind(this)])
        });
    };
    JobCommentsComponent.prototype.validateComment = function () {
        console.log(this.commentForm);
        if (this.commentForm && this.commentForm.get('user-comment')
            && this.commentForm.get('user-comment').value
            && this.commentForm.get('user-comment').value.replace(/^\s+$/, '') != "") {
            return null;
        }
        else
            return { 'Invalid Comment': true };
    };
    JobCommentsComponent.prototype.saveUserComment = function () {
        var _this = this;
        if (this.commentForm && this.commentForm.valid) {
            var comment = {};
            comment.comment = this.commentForm.get('user-comment').value;
            comment.staffUser = '/staffs/' + "motion6";
            comment.job = "/jobs" + '/' + this.paramsReceived;
            this.serverService.saveUserComment(comment)
                .subscribe(function (response) {
                console.log(response);
                console.log(response.json());
                var path = (response.json())._links.self.href;
                var index = path.lastIndexOf("/") + 1;
                _this.commentUuid = path.substring(index);
                if (_this.uploadedFiles.length != 0) {
                    var patchComment = { comment: "/comments/" + _this.commentUuid };
                    var _loop_1 = function (i) {
                        _this.serverService.patchCommentWithUploadedFiles(_this.uploadedFiles[i].uuid, patchComment)
                            .subscribe(function (response) {
                            console.log(response.json());
                        }, function (error) {
                            _this.ngbModal.open("Something went wrong, comment was saved without file "
                                + _this.uploadedFiles[i].name);
                        });
                    };
                    for (var i = 0; i < _this.uploadedFiles.length; i++) {
                        _loop_1(i);
                    }
                }
                else if (_this.uploadedFiles.length == 0) {
                    _this.ngbModal.open("Comments Succesfull saved");
                }
                _this.getUserComments();
                _this.dontSaveUserComment();
            }, function (error) {
                console.log(error);
                _this.ngbModal.open("Sorry, something went wrong. !");
            });
        }
        else {
            this.ngbModal.open("Please enter a valid comment");
        }
    };
    JobCommentsComponent.prototype.dontSaveUserComment = function () {
        this.commentForm.reset();
        this.newComment = false;
        this.uploadMessage = null;
    };
    JobCommentsComponent.prototype.usersCommentFileUpload = function ($event) {
        console.log("usersCommentFileUpload called");
    };
    JobCommentsComponent.prototype.onSubmit = function () {
        if (this.commentForm.valid) {
            this.saveUserComment();
        }
        else {
            this.ngbModal.open("Please enter a valid comment");
        }
    };
    JobCommentsComponent.prototype.getUploadMessage = function () {
        return this.uploadMessage;
    };
    JobCommentsComponent.prototype.uploadFile = function () {
        var _this = this;
        var fileInput = this.fileInput.nativeElement;
        if (fileInput.files && fileInput.files[0]) {
            this.uploadMessage = null;
            this.uploadingFile = true;
            var file_1 = fileInput.files[0];
            var formData = new FormData();
            formData.append('file', file_1, file_1.name);
            this.serverService.uploadFile(formData)
                .subscribe(function (data) {
                _this.uploadMessage = "File successfully saved";
                var fileUuid = (data.json()).uuid;
                _this.uploadedFiles.push({ name: file_1.name, uuid: fileUuid });
                _this.resetMessageStatus();
                console.log(data);
            }, function (error) {
                _this.uploadMessage = "Something went wrong, couldn't save the file !";
                _this.resetMessageStatus();
                console.log(error);
            });
        }
    };
    JobCommentsComponent.prototype.getFileUploadStatus = function () {
        return this.uploadingFile;
    };
    JobCommentsComponent.prototype.resetMessageStatus = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 500; }
        setTimeout(function () {
            //this.uploadMessage = null;
            _this.uploadingFile = false;
            _this.fileInput.nativeElement.value = "";
        }, timeout);
    };
    return JobCommentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("fileInput"),
    __metadata("design:type", Object)
], JobCommentsComponent.prototype, "fileInput", void 0);
JobCommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job-comments',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-comments/job-comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-comments/job-comments.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_job_service__["a" /* JobService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _g || Object])
], JobCommentsComponent);

var _a, _b, _c, _d, _e, _f, _g;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCostsComponent; });
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

var JobCostsComponent = (function () {
    function JobCostsComponent() {
    }
    JobCostsComponent.prototype.ngOnInit = function () {
    };
    return JobCostsComponent;
}());
JobCostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job-costs',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-costs/job-costs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-costs/job-costs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JobCostsComponent);

//# sourceMappingURL=job-costs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-field-works/job-field-works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-ag-grid-wrapper\">\n\n  <div>\n    <button class=\"btn btn-primary\">Create Invoice</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-field-works/job-field-works.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-field-works/job-field-works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobFieldWorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobFieldWorksComponent = (function () {
    function JobFieldWorksComponent(serverService, navBarService, router, activatedRoute, jobService) {
        this.serverService = serverService;
        this.navBarService = navBarService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobService = jobService;
        this.paramsReceived = null;
        this.path = null;
        this.columnDefs = [
            {
                headerName: "Staff Name",
                field: 'description',
                cellClass: 'first-column app-table-cell'
            },
            {
                headerName: "Start Date",
                field: "startDate",
                cellClass: 'second-column app-table-cell'
            },
            {
                headerName: "Start Time",
                field: "startTime",
                cellClass: 'third-column app-table-cell'
            },
            {
                headerName: "Finish Date",
                field: "finishDate",
                cellClass: 'fourth-column app-table-cell'
            },
            {
                headerName: "Finish Time",
                field: "finishTime",
                cellClass: 'fifth-column app-table-cell'
            }
        ];
    }
    JobFieldWorksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobServiceSubscription = this.jobService.jobSourceObservable.subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */].TYPE_FIELDWORKS) {
                _this.paramsReceived = data.id;
                _this.path = "http://localhost:8081/api/jobs/" + _this.paramsReceived + "/fieldWorks";
                console.log(data);
                _this.getFieldWorks();
            }
        }, function (error) { return console.log(error); });
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            console.log("sizeColumnsToFit");
        });
    };
    JobFieldWorksComponent.prototype.getFieldWorks = function () {
        var _this = this;
        this.serverService.getRequestByPath(this.path)
            .subscribe(function (fieldWorks) {
            console.log(fieldWorks);
            if (fieldWorks._embedded) {
                _this.rowData = fieldWorks._embedded.fieldWorks;
                _this.formatRowData();
            }
            else {
                _this.rowData = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    JobFieldWorksComponent.prototype.formatRowData = function () {
        for (var i = 0; i < this.rowData.length; i++) {
            var startFullDate = new Date(this.rowData[i].startDtm);
            var finishFullDate = new Date(this.rowData[i].finishDtm);
            this.rowData[i].startDate = startFullDate.toDateString();
            this.rowData[i].startTime = startFullDate.toLocaleTimeString();
            this.rowData[i].finishDate = finishFullDate.toDateString();
            this.rowData[i].finishTime = finishFullDate.toLocaleTimeString();
        }
    };
    JobFieldWorksComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    JobFieldWorksComponent.prototype.onCellClicked = function ($event) {
        console.log($event.data);
        var href = $event.data._links.self.href;
        var index = (href.lastIndexOf('/') + 1);
        var id = +(href.substr(index));
        console.log(id);
        // this.router.navigate(['job', id, 'fieldWorks'])
        //   .then((value) => {
        //     console.log(value);
        //   }).catch((error) => {
        //   console.log(error)
        // });
    };
    JobFieldWorksComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log($event.data._links.self);
    };
    JobFieldWorksComponent.prototype.ngAfterViewInit = function () {
        this.jobService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */].TYPE_FIELDWORKS });
    };
    JobFieldWorksComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
        this.jobServiceSubscription.unsubscribe();
    };
    return JobFieldWorksComponent;
}());
JobFieldWorksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job-field-work',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-field-works/job-field-works.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-field-works/job-field-works.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */]) === "function" && _e || Object])
], JobFieldWorksComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=job-field-works.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-ag-grid-wrapper\">\n\n  <div>\n    <button class=\"btn btn-primary\">Create Invoice</button>\n  </div>\n</div>\n"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobInvoicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function JobInvoicesComponent(serverService, navBarService, router, activatedRoute, jobService) {
        this.serverService = serverService;
        this.navBarService = navBarService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobService = jobService;
        this.paramsReceived = null;
        this.path = null;
        this.columnDefs = [
            {
                headerName: "Id",
                field: 'description',
                cellClass: 'first-column app-table-cell'
            },
            {
                headerName: "Start Date",
                field: "invoiceDt",
                cellClass: 'second-column app-table-cell'
            },
            {
                headerName: "Due Date",
                field: "invoiceDueDate",
                cellClass: 'third-column app-table-cell'
            },
            {
                headerName: "Total Amount",
                field: "totalAmount",
                cellClass: 'fifth-column app-table-cell'
            }
        ];
    }
    JobInvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobServiceSubscription = this.jobService.jobSourceObservable.subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */].TYPE_INVOICES) {
                _this.paramsReceived = data.id;
                _this.path = "http://localhost:8081/api/jobs/" + _this.paramsReceived + "/invoices";
                console.log(data);
                _this.getInvoices();
            }
        }, function (error) { return console.log(error); });
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            console.log("sizeColumnsToFit");
        });
    };
    JobInvoicesComponent.prototype.getInvoices = function () {
        var _this = this;
        this.serverService.getRequestByPath(this.path)
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
    };
    JobInvoicesComponent.prototype.formatRowData = function () {
    };
    JobInvoicesComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    JobInvoicesComponent.prototype.onCellClicked = function ($event) {
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
    JobInvoicesComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log($event.data._links.self);
    };
    JobInvoicesComponent.prototype.ngAfterViewInit = function () {
        this.jobService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */].TYPE_INVOICES });
    };
    JobInvoicesComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
        this.jobServiceSubscription.unsubscribe();
    };
    return JobInvoicesComponent;
}());
JobInvoicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job-invoices',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-invoices/job-invoices.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */]) === "function" && _e || Object])
], JobInvoicesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=job-invoices.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-main/job-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-form-container app-form-container-top\">\n  <form [formGroup]=\"jobForm\"\n        (ngSubmit)=\"onSubmit()\"\n        class=\"app-form\">\n    <div formGroupName=\"userData\"\n         class=\"app-form-groups-container\">\n      <div class=\"app-form-group\n                  new-job-dropdown-container\">\n        <div class=\"dropdown new-job-dropdown\"\n             [ngClass]=\"{'show': showDropdown }\">\n          <button class=\"btn btn-primary dropdown-toggle\"\n                  type=\"button\"\n                  id=\"dropdownMenuButton\"\n                  data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\"\n                  aria-expanded=\"false\"\n                  (click)=\"toggleDropdown()\">\n            New Job\n          </button>\n          <div class=\"dropdown-menu\"\n               aria-labelledby=\"dropdownMenuButton\">\n            <button class=\"dropdown-item\n                     btn\n                     btn-primary\n                     \"\n                    (click)=\"onNewQuoteRequest()\">New Quote Request\n            </button>\n            <button class=\"dropdown-item\n                           btn\n                           btn-primary\n                           \"\n                    (click)=\"onNewServiceRequest()\">New Service Request\n            </button>\n          </div>\n        </div>\n        <div class=\"app-form-add-status-button-wrapper\">\n          <button class=\"btn\n                         btn-primary\"\n                  type=\"button\"\n                  id=\"add-status-button\"\n                  (click)=\"addJobStatus($event)\"\n                  [disabled]=\"currentMode != EDIT\">\n            Add Status\n          </button>\n        </div>\n      </div>\n      <h3 class=\"app-form-header\">Job</h3>\n      <div class=\"app-form-group\"\n           *ngFor=\"let formControl of formGroup\"\n           [ngClass]=\"{ 'none': formControl.name == jobStatus && currentMode !=VIEW}\">\n        <div class=\"app-form-label-wrapper\">\n          <label for=\"{{formControl.name}}\"\n                 class=\"app-form-label\">{{formControl.title}}\n            <span class=\"app-form-label-colon\">:</span>\n          </label>\n        </div>\n        <div class=\"app-form-input-wrapper\"\n             *ngIf=\"formControl.name != jobCustomerName && formControl.name != jobPriority\"\n             [ngClass]=\"{'readonly':getCurrentMode() == VIEW || formControl.name == jobType}\">\n          <input\n            type=\"text\"\n            id=\"{{formControl.name}}\"\n            formControlName=\"{{formControl.name}}\"\n            class=\"app-form-input \"\n            appFormInput\n            [readonly]=\"getCurrentMode() == VIEW || formControl.name == 'job-type'\">\n          <i\n            *ngIf=\"jobForm.get('userData.' + formControl.name).valid\"\n            class=\"fa fa-check\"\n            aria-hidden=\"true\">\n          </i>\n          <i\n            *ngIf=\"!jobForm.get('userData.' + formControl.name).valid\"\n            class=\"fa fa-times\"\n            aria-hidden=\"true\">\n          </i>\n        </div>\n        <div *ngIf=\"formControl.name == jobCustomerName\"\n             class=\"app-form-input-wrapper app-form-dropdown-input-wrapper\"\n             [ngClass]=\"{'readonly': getCurrentMode() == VIEW}\">\n          <input type=\"text\"\n                 id=\"{{jobCustomerName}}\"\n                 formControlName=\"{{formControl.name}}\"\n                 class=\"app-form-input app-form-dropdown-input\"\n                 [readonly]=\"getCurrentMode() == VIEW\"\n                 appFormInput>\n          <i\n            *ngIf=\"jobForm.get('userData.' + formControl.name).valid\"\n            class=\"fa fa-check\" aria-hidden=\"true\">\n          </i>\n          <i\n            *ngIf=\"!jobForm.get('userData.' + formControl.name).valid\"\n            class=\"fa fa-times\" aria-hidden=\"true\">\n          </i>\n          <div class=\"app-form-dropdown-list\"\n               id=\"app-form-auto-suggestion-list\"\n               *ngIf=\"customersAutoSuggestion.length != 0\n                && !jobForm.get('userData.' + formControl.name).valid\n                    && formControl.name == jobCustomerName\">\n            <div class=\"app-form-dropdown-item\"\n                 *ngFor=\"let customer of customersAutoSuggestion;\"\n                 (click)=\"onCustomerSelected(customer)\"\n                 (mouseover)=\"onCustomerHover($event, customer)\">\n              <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              {{customer.name}}\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"formControl.name == jobPriority\"\n             (click)=\"toggleJobPriority($event)\"\n             class=\"app-form-input-wrapper app-form-dropdown-input-wrapper\"\n             [ngClass]=\"{'readonly': getCurrentMode() == VIEW}\">\n          <input type=\"text\"\n                 id=\"{{jobPriority}}\"\n                 formControlName=\"{{jobPriority}}\"\n                 class=\"app-form-input app-form-dropdown-input\"\n                 appFormInput\n                 readonly>\n          <i\n            *ngIf=\"jobForm.get('userData.' + jobPriority).valid\"\n            class=\"fa fa-check\" aria-hidden=\"true\">\n            <i *ngIf=\"getCurrentMode() != VIEW\" class=\"fa fa-caret-down\"></i>\n          </i>\n          <i\n            *ngIf=\"!jobForm.get('userData.' + jobPriority).valid\"\n            class=\"fa fa-times\" aria-hidden=\"true\">\n            <i *ngIf=\"getCurrentMode() != VIEW\" class=\"fa fa-caret-down\"></i>\n          </i>\n          <div *ngIf=\"getCurrentMode() != VIEW && showJobPriorityDropdown\"\n               class=\"app-form-dropdown-list\"\n                id=\"{{jobPriorityDropdownList}}\">\n            <div (click)=\"onSelectJobPriority(priority)\"\n                 *ngFor=\"let priority of jobPriorities\"\n                 class=\"app-form-dropdown-item\"\n                  [ngClass]=\"{'none' :priority == jobForm.get('userData.' + jobPriority).value}\">\n                 {{priority}}\n            </div>\n          </div>\n        </div>\n        <div class=\"app-form-group-error-container\"\n             *ngIf=\"!jobForm.get('userData.' + formControl.name).valid\n        && jobForm.get('userData.' + formControl.name).touched\">\n          <div>\n            {{getFirstErrorMessage(formControl.name)}}\n            <i class=\"fa fa-asterisk\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"app-form-group-submit\" *ngIf=\"getCurrentMode() == VIEW\">\n        <div class=\"app-form-submit-wrapper\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"modifyJob()\">\n            <span *ngIf=\"previousMode == CREATE\">\n              New Job\n            </span>\n            <span *ngIf=\"previousMode != CREATE\">\n              Modify Job\n            </span>\n          </button>\n        </div>\n      </div>\n      <div class=\"app-form-group-submit\" *ngIf=\"getCurrentMode() != VIEW\">\n        <div class=\"app-form-submit-wrapper\">\n          <button class=\"btn btn-primary\" [disabled]=\"!jobForm.valid\" type=\"submit\">Save</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"dontSaveJob()\">Don't Save</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div class=\"app-form-job-status-container\"\n     *ngIf=\"getAddStatus()\">\n  <form class=\"app-form app-job-status-form\"\n        [formGroup]=\"jobStatusForm\"\n        (ngSubmit)=\"onJobStatusSubmit()\"\n        id=\"app-job-status-form\">\n    <div formGroupName=\"userData\" class=\"app-form-groups-container\"\n         (click)=\"$event.cancelBubble = true\">\n      <div class=\"app-form-header\">Job {{job.jobNumber}}</div>\n      <div class=\"app-form-group \">\n        <div class=\"app-form-label-wrapper\">\n          <label class=\"app-form-label\">Status\n            <span class=\"app-form-label-colon\">:</span>\n          </label>\n        </div>\n        <div class=\"app-form-dropdown-input-container\">\n          <div (click)=\"toggleJobStatus()\"\n               class=\"app-form-input-wrapper app-form-dropdown-input-wrapper app-form-status-input-wrapper\"\n               [ngClass]=\"{'readonly': getCurrentMode() == VIEW}\">\n            <input type=\"text\"\n                   id=\"job-status\"\n                   formControlName=\"job-status\"\n                   class=\"app-form-input\"\n                   appFormInput\n                   readonly>\n            <i\n              *ngIf=\"jobStatusForm.get('userData.job-status').valid\"\n              class=\"fa fa-check\" aria-hidden=\"true\">\n              <i *ngIf=\"getCurrentMode() == EDIT\" class=\"fa fa-caret-down\"></i>\n            </i>\n            <i\n              *ngIf=\"!jobStatusForm.get('userData.job-status').valid\"\n              class=\"fa fa-times\" aria-hidden=\"true\">\n              <i *ngIf=\"getCurrentMode() == EDIT\" class=\"fa fa-caret-down\"></i>\n            </i>\n            <div *ngIf=\"showJobStatusDropdown && getCurrentMode() == EDIT\"\n                 class=\"app-form-dropdown-list\">\n              <div (click)=\"onSelectJobStatus(jobStatus.status)\"\n                   *ngFor=\"let jobStatus of jobStatuses\"\n                   class=\"app-form-dropdown-item\">\n              <span *ngIf=\"jobStatus.status !== jobStatusForm.get('userData.job-status').value\">\n                 {{jobStatus.status}}\n              </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"app-form-group app-form-status-group-container\">\n        <div class=\"app-form-label-wrapper\">\n          <label class=\"app-form-label\">Comment\n            <span class=\"app-form-label-colon\">:</span>\n          </label>\n        </div>\n        <div class=\"app-form-input-wrapper\">\n          <input type=\"text\"\n                 class=\"app-form-input\"\n                 id=\"job-comment\"\n                 formControlName=\"job-comment\"\n                 appFormInput>\n        </div>\n      </div>\n      <div class=\"app-form-group-submit\" *ngIf=\"getCurrentMode() != VIEW\">\n        <div class=\"app-form-submit-wrapper\">\n          <button class=\"btn btn-primary\" [disabled]=\"!jobStatusForm.valid\" type=\"submit\">Save Status</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"dontSaveStatus()\">Don't Save Status</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-main/job-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-main/job-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__ = __webpack_require__("../../../../../src/app/services/app-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function JobMainComponent(serverService, jobService, ngbModal, router, appInteractionService, activatedRoute, changeDetectorRef) {
        this.serverService = serverService;
        this.jobService = jobService;
        this.ngbModal = ngbModal;
        this.router = router;
        this.appInteractionService = appInteractionService;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.CREATE = 'CREATE';
        this.EDIT = 'EDIT';
        this.VIEW = 'VIEW';
        this.addStatus = false;
        this.currentMode = null;
        this.previousMode = null;
        this.customers = null;
        this.customersAutoSuggestion = [];
        this.showJobPriorityDropdown = false;
        this.showJobStatusDropdown = false;
        this.showDropdown = false;
        this.selectedPriority = "Select Priority";
        this.job = null;
        this.jobAddress = null;
        this.partyId = null;
        this.jobCustomerName = 'job-customer-name';
        this.jobType = 'job-type';
        this.jobStatus = 'job-status';
        this.jobPriority = 'job-priority';
        this.jobPriorityDropdownList = 'job-priority-dropdown-list';
        this.formGroup = [
            {
                name: this.jobCustomerName,
                title: 'Contact Name',
                'invalid': 'Contact name is not valid',
                'required': 'Contact name is required',
                "not-found": 'Contact name could not be found',
            },
            {
                name: this.jobType,
                title: 'Job Type',
                'invalid': 'Job type is not valid',
                'required': 'Job Type is required'
            },
            {
                name: this.jobStatus,
                title: 'Job Status',
                'invalid': 'Mobile number is not valid',
                'required': 'Mobile number is required'
            },
            {
                name: 'job-referral',
                title: 'Referral',
                'invalid': 'Referral is not valid',
                'required': 'Referral is required'
            },
            {
                name: 'job-physical-address',
                title: 'Address',
                autoAddressesSuggesstion: [],
                addressSubscription: null,
                spinner: false,
                'required': 'Physical Address is required',
                "invalid": 'The input entered is not valid',
                "not-found": 'Physical Address entered could not be found',
                'unknown-error': "Unknown error occurred from the server side",
                'request-denied': "The request was denied by the server",
                "query-limit-crossed": "You have exceeded the maximum number of allowed queries"
            },
            {
                name: this.jobPriority,
                title: 'Priority',
                'invalid': 'Priority is not valid',
                'required': 'Priority is required'
            },
            {
                name: 'job-detail',
                title: 'Details',
                'invalid': 'Details is not valid',
                'required': 'Details is required'
            },
        ];
        this.errorMessages = ["required", "invalid", "not-found", "unknown-error", "request-denied", "query-limit-crossed"];
        this.jobPriorities = ["Normal", "Urgent", "Important"];
        this.jobStatuses = null;
        this.googleAutocompleteService = new google.maps.places.AutocompleteService();
        this.googleService = google;
    }
    JobMainComponent.prototype.hostClicked = function ($event) {
        console.log($event.target.id);
        // if ($event.target.id != 'job-priority') {
        //   this.showJobPriorityDropdown = false;
        // }
        if ($event.target.id != 'job-status') {
            //this.showJobStatusDropdown = false;
        }
        if ($event.target.id != "app-form-auto-suggestion-list" ||
            $event.target.id != "job-customer-name") {
            this.customersAutoSuggestion.length = 0;
        }
        if ($event.target.id != this.jobPriorityDropdownList ||
            $event.target.id != "job-customer-name") {
            this.customersAutoSuggestion.length = 0;
        }
        if ($event.target.id != this.jobPriorityDropdownList
            || $event.target.id != this.jobPriority) {
            this.showJobPriorityDropdown = false;
        }
        if (($event.target.id != "app-add-status-button")
            && ($event.target.id != "app-job-status-form")) {
            this.addStatus = false;
        }
    };
    JobMainComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.keyCode === 27) {
            console.log('Escape!');
            console.log(event);
            this.showJobStatusDropdown = false;
            this.showJobPriorityDropdown = false;
            this.customersAutoSuggestion.length = 0;
        }
    };
    JobMainComponent.prototype.subscribeJobForm = function () {
        this.jobForm.statusChanges.subscribe(function (status) { return console.log(status); });
        this.jobForm.valueChanges.subscribe(function (value) {
            console.log(value);
        });
    };
    JobMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllCustomers();
        this.createJobForm();
        this.subscribeJobForm();
        this.jobServiceSubscription = this.jobService.jobSourceObservable
            .subscribe(function (data) {
            console.log(data);
            _this.job = {};
            if (data && data.type === __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */].TYPE_MAIN) {
                if ((data.id === __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].SERVICE_REQUEST
                    || data.id === __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].QUOTE_REQUEST)) {
                    _this.job.type = data.id;
                    if (data.partyId) {
                        _this.job.customerName = _this.getCustomerNameFromUuid(data.partyId);
                    }
                    _this.setJobStatuses();
                    _this.patchJobForm();
                    _this.currentMode = _this.CREATE;
                    _this.previousMode = _this.currentMode;
                    _this.jobForm.get('userData.job-customer-name').updateValueAndValidity();
                    if (data.partyId) {
                        _this.partyId = data.partyId;
                        _this.serverService.getRequestByPartyId(data.partyId)
                            .subscribe(function (response) {
                            _this.job.customerUuid = data.partyId;
                            _this.job.customerName = response.name;
                            console.log(data.id);
                            console.log(response);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
                else {
                    _this.paramsReceived = data.id;
                    _this.type = data.type;
                    _this.serverService.getRequestByJobId(_this.paramsReceived)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.currentMode = _this.VIEW;
                        _this.previousMode = _this.EDIT;
                        _this.job = response;
                        _this.setJobStatuses();
                        _this.patchJobForm();
                        _this.jobForm.get('userData.job-customer-name').updateValueAndValidity();
                    }, function (error) {
                        _this.currentMode = _this.CREATE;
                        console.log(error);
                    });
                }
            }
        });
        this.initCustomersAutoSuggest();
    };
    JobMainComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.serverService.getAllParties().subscribe(function (response) {
            _this.customers = response._embedded.parties;
        }, function (error) {
            console.log(error);
        });
    };
    JobMainComponent.prototype.ngAfterViewInit = function () {
        this.jobService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].TYPE_MAIN });
    };
    JobMainComponent.prototype.createJobForm = function () {
        this.jobForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'userData': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                "job-customer-name": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required], [this.validateCustomerName.bind(this)]),
                'job-physical-address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required], [this.validateAddress.bind(this)]),
                'job-type': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
                'job-referral': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
                'job-priority': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.validateJobPriority.bind(this)]),
                'job-status': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [], [this.validateJobStatus.bind(this)]),
                'job-detail': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
            })
        });
    };
    JobMainComponent.prototype.validateJobStatus = function (formControl) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (response) {
            console.log(_this.currentMode);
            if (_this.jobStatuses) {
                if (_this.currentMode == _this.CREATE) {
                    response.next(null);
                    response.complete();
                    return;
                }
                for (var i = 0; i < _this.jobStatuses.length; i++) {
                    if (formControl.value === _this.jobStatuses[i].status) {
                        console.log("response is valid");
                        response.next(null);
                        response.complete();
                        break;
                    }
                }
                response.next({ 'invalid-status': true });
                response.complete();
            }
            else if (!_this.jobStatuses) {
                setTimeout(function () {
                    if (_this.currentMode == _this.CREATE) {
                        response.next(null);
                        response.complete();
                        return;
                    }
                    for (var i = 0; i < _this.jobStatuses.length; i++) {
                        if (formControl.value === _this.jobStatuses[i].status) {
                            console.log("response is valid");
                            response.next(null);
                            response.complete();
                            break;
                        }
                    }
                    response.next({ 'invalid-status': true });
                    response.complete();
                }, 500);
            }
        });
    };
    JobMainComponent.prototype.validateJobPriority = function (formControl) {
        for (var i = 0; i < this.jobPriorities.length; i++) {
            if (formControl.value === this.jobPriorities[i]) {
                return null;
            }
        }
        return { 'invalid': true };
    };
    JobMainComponent.prototype.patchJobForm = function () {
        console.log(this.job);
        this.jobForm.patchValue({
            'userData': {
                "job-customer-name": this.job.customerName,
                'job-physical-address': this.job.addressStr,
                'job-type': this.job.type,
                'job-referral': this.job.referral,
                'job-priority': this.job.priority,
                'job-status': this.job.status,
                'job-detail': this.job.description,
            }
        });
        console.log(this.jobForm.get('userData.job-priority').value);
    };
    JobMainComponent.prototype.setJobStatuses = function () {
        var _this = this;
        var jobType = this.job.type;
        var pathRequest = "http://localhost:8081/api/jobTypes/" + jobType + "/jobStatuses";
        this.serverService.getRequestByPath(pathRequest)
            .subscribe(function (response) {
            _this.jobStatuses = response._embedded.jobStatuses;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    JobMainComponent.prototype.onCustomerSelected = function (customer) {
        this.jobForm.get('userData.job-customer-name').setValue(customer.name);
    };
    JobMainComponent.prototype.onCustomerHover = function ($event, customer) {
        console.log(customer);
    };
    JobMainComponent.prototype.toggleJobPriority = function ($event) {
        $event.cancelBubble = true;
        this.showJobPriorityDropdown = !this.showJobPriorityDropdown;
        this.showJobStatusDropdown = false;
    };
    JobMainComponent.prototype.onSelectJobPriority = function (title) {
        console.log(title);
        this.jobForm.get('userData.job-priority').setValue(title);
    };
    JobMainComponent.prototype.toggleJobStatus = function () {
        console.log(this.jobStatuses);
        this.showJobStatusDropdown = !this.showJobStatusDropdown;
        this.showJobPriorityDropdown = false;
    };
    JobMainComponent.prototype.onSelectJobStatus = function (title) {
        console.log(title);
        this.jobStatusForm.get('userData.job-status').setValue(title);
    };
    JobMainComponent.prototype.validateCustomerName = function (formControl) {
        var _this = this;
        var customerName = formControl.value;
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (response) {
            console.log("Customer Validation called");
            console.log(customerName);
            if (customerName) {
                customerName = customerName.trim();
            }
            if (_this.customers) {
                for (var i = 0; i < _this.customers.length; i++) {
                    if (_this.customers[i].name === customerName) {
                        console.log("customer name is valid");
                        response.next(null);
                        response.complete();
                        break;
                    }
                }
                response.next({ "not-found": true });
                response.complete();
            }
            if (!_this.customers) {
                setTimeout(function () {
                    if (_this.customers) {
                        for (var i = 0; i < _this.customers.length; i++) {
                            if (_this.customers[i].name === customerName) {
                                console.log("customer name is valid");
                                response.next(null);
                                response.complete();
                                break;
                            }
                        }
                        response.next({ "not-found": true });
                        response.complete();
                    }
                }, 1000);
            }
            else {
                response.next({ 'unknown-error': true });
                response.complete();
            }
        });
    };
    JobMainComponent.prototype.initCustomersAutoSuggest = function () {
        var _this = this;
        this.customersAutoSuggestSubscription = this.jobForm.get('userData.job-customer-name')
            .valueChanges.subscribe(function (value) {
            console.log(value);
            _this.customersAutoSuggestion.length = 0;
            if (value && _this.customers) {
                for (var i = 0; i < _this.customers.length; i++) {
                    if (_this.customers[i].name.toLowerCase().startsWith(value.toLowerCase())) {
                        console.log(_this.customers[i].name);
                        _this.customersAutoSuggestion.push(_this.customers[i]);
                    }
                    if (_this.customersAutoSuggestion.length > 5) {
                        console.log(_this.customersAutoSuggestion);
                        break;
                    }
                }
            }
            console.log(value);
        }, function (error) {
            console.log(error);
        });
    };
    JobMainComponent.prototype.setAddress = function (value) {
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
        this.jobAddress = tempAddress;
    };
    JobMainComponent.prototype.validateAddress = function (control) {
        var tempRef = this;
        var address = control.value;
        console.log(control);
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (response) {
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
                            tempRef.setAddress(value);
                            tempRef.customersAutoSuggestion.length = 0;
                        }
                    });
                    response.next({ 'not-found': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    response.next({ 'not-found': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
                    response.next({ 'invalid': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    response.next({ 'query-limit-crossed': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
                    response.next({ 'request-denied': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
                    response.next({ 'unknown-error': true });
                    response.complete();
                }
            });
        });
    };
    JobMainComponent.prototype.modifyJob = function () {
        if (this.previousMode == this.CREATE) {
            this.currentMode = this.CREATE;
        }
        else if (this.previousMode == this.EDIT) {
            this.currentMode = this.EDIT;
        }
    };
    JobMainComponent.prototype.dontSaveJob = function () {
        this.patchJobForm();
        this.jobForm.markAsUntouched();
        this.previousMode = this.currentMode;
        this.currentMode = this.VIEW;
        this.showJobStatusDropdown = false;
    };
    JobMainComponent.prototype.saveNewJob = function () {
        var _this = this;
        if (this.jobForm.touched && this.jobForm.valid) {
            var job = {};
            var customerName = this.jobForm.get('userData.job-customer-name').value;
            var customerUuid = this.getCustomerUuidFromName(customerName);
            job.description = this.jobForm.get('userData.job-detail').value;
            job.referral = this.jobForm.get('userData.job-referral').value;
            job.priority = this.jobForm.get('userData.job-priority').value;
            job.address = this.jobAddress;
            job.initialType = encodeURI("/jobTypes/" + this.jobForm.get('userData.job-type').value);
            job.customer = "/parties/" + customerUuid;
            console.log(job);
            this.serverService.saveJob(job).subscribe(function (response) {
                console.log(response.json());
                _this.ngbModal.open('Succesfully saved');
            }, function (error) {
                _this.ngbModal.open("Something went wrong!. Couldn't save the form.");
                console.log(error);
            });
        }
    };
    JobMainComponent.prototype.saveExistingJob = function () {
        var _this = this;
        if (this.jobForm.touched && this.jobForm.valid) {
            var job = {};
            var customerName = this.jobForm.get('userData.job-customer-name').value;
            var customerUuid = this.getCustomerUuidFromName(customerName);
            job.description = this.jobForm.get('userData.job-detail').value;
            job.referral = this.jobForm.get('userData.job-referral').value;
            job.priority = this.jobForm.get('userData.job-priority').value;
            job.status = this.jobForm.get('userData.job-status').value;
            job.address = this.jobAddress;
            console.log(job.status);
            job.uuid = this.job.uuid;
            job.jobNumber = this.job.jobNumber;
            job.initialType = encodeURI("/jobTypes/" + this.jobForm.get('userData.job-type').value);
            job.customer = "/parties/" + customerUuid;
            // job.customerName = customerName;
            // job.customerUid = customerUuid;
            console.log(job);
            this.serverService.putJob(job.uuid, job).subscribe(function (response) {
                console.log(response.json());
                _this.ngbModal.open('Succesfully saved');
            }, function (error) {
                _this.ngbModal.open("Something went wrong!. Couldn't save the form.");
                console.log(error);
            });
        }
    };
    JobMainComponent.prototype.getCustomerUuidFromName = function (value) {
        for (var i = 0; i < this.customers.length; i++) {
            if (this.customers[i].name.toLowerCase() === value.toLowerCase()) {
                return this.customers[i].uuid;
            }
        }
        return null;
    };
    JobMainComponent.prototype.getCustomerNameFromUuid = function (value) {
        for (var i = 0; i < this.customers.length; i++) {
            if (this.customers[i].uuid == value) {
                return this.customers[i].name;
            }
        }
        return null;
    };
    JobMainComponent.prototype.onSubmit = function () {
        console.log(this.currentMode);
        if (this.currentMode == this.CREATE) {
            this.saveNewJob();
        }
        if (this.currentMode == this.EDIT) {
            this.saveExistingJob();
        }
    };
    //   curl -X POST -d \
    //   '{
    //   "description" : "Paint and additonal repair works",
    //   "referral" : "Phone",
    //   "priority" : "Normal",
    //   "address" : "245 Grange Road:Hillford:South Australia:5011:Australia",
    //   "initialType" : "/jobTypes/Quote%20Request",
    //   "customer" : "/parties/0d5f5918-69dc-11e7-931d-001a7dda7113"
    // }' "localhost:8081/api/jobs" -H "Content-Type:application/json"
    JobMainComponent.prototype.getCurrentMode = function () {
        return this.currentMode;
    };
    JobMainComponent.prototype.toggleDropdown = function () {
        this.showDropdown = !this.showDropdown;
        console.log(this.showDropdown);
    };
    JobMainComponent.prototype.onNewQuoteRequest = function () {
        var _this = this;
        this.showDropdown = false;
        var partyId = null;
        this.previousMode = this.currentMode;
        this.currentMode = this.CREATE;
        if (this.jobForm.get('userData.job-customer-name').valid
            && this.jobForm.get('userData.job-customer-name').value) {
            partyId = this.getCustomerUuidFromName(this.jobForm.get('userData.job-customer-name').value);
            console.log(partyId);
        }
        this.router.navigate(['jobs', __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].QUOTE_REQUEST, "main"])
            .then(function (value) {
            _this.jobService.announceParentComponent({
                type: __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].TYPE_MAIN,
                id: __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].QUOTE_REQUEST, partyId: partyId
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    JobMainComponent.prototype.onNewServiceRequest = function () {
        var _this = this;
        this.showDropdown = false;
        this.previousMode = this.currentMode;
        this.currentMode = this.CREATE;
        var partyId = null;
        if (this.jobForm.get('userData.job-customer-name').valid
            && this.jobForm.get('userData.job-customer-name').value) {
            partyId = this.getCustomerUuidFromName(this.jobForm.get('userData.job-customer-name').value);
            console.log(partyId);
        }
        this.router.navigate(['jobs', __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].SERVICE_REQUEST, "main"])
            .then(function (value) {
            _this.jobService.announceParentComponent({
                type: __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].TYPE_MAIN,
                id: __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].SERVICE_REQUEST, partyId: partyId
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    JobMainComponent.prototype.getAddStatus = function () {
        return this.addStatus;
    };
    JobMainComponent.prototype.addJobStatus = function ($event) {
        $event.cancelBubble = true;
        console.log($event);
        this.jobStatusForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'userData': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                'job-status': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [], this.validateJobStatus.bind(this)),
                'job-comment': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
            })
        });
        this.addStatus = true;
    };
    JobMainComponent.prototype.getFirstErrorMessage = function (formControlName) {
        var formControl = this.jobForm.get('userData.' + formControlName);
        for (var i = 0; i < this.errorMessages.length; i++) {
            if (formControl.errors[this.errorMessages[i]]) {
                for (var j = 0; j < this.formGroup.length; j++) {
                    if (formControlName === this.formGroup[j].name) {
                        console.log(this.formGroup[j][this.errorMessages[i]]);
                        return this.formGroup[j][this.errorMessages[i]];
                    }
                }
            }
        }
        return "Unknown Error";
    };
    JobMainComponent.prototype.onJobStatusSubmit = function () {
        var statusId = null;
        var jobId = null;
        var staffId = null;
        var comment = null;
        if (this.jobStatusForm.valid) {
            for (var i = 0; i < this.jobStatuses.length; i++) {
                if ((this.jobStatusForm.get('userData.job-status').value)
                    == this.jobStatuses[i].status) {
                    var path = this.jobStatuses[i]._links.self.href;
                    var index = path.lastIndexOf("/") + 1;
                    statusId = path.substring(index);
                    break;
                }
            }
            jobId = this.job.uuid;
            staffId = 'motion6';
            var job = "/jobs/" + jobId;
            var status = "/jobStatuses/" + statusId;
            var staff = "/staffs/" + staffId;
            var comment_1 = this.jobStatusForm.get('userData.job-comment').value;
            var jobStatus = {
                job: job,
                status: status,
                staff: staff,
                comment: comment_1
            };
            this.serverService.postJobStatus(jobStatus)
                .subscribe(function (response) {
                location.reload();
            }, function (error) {
                console.log(error);
            });
        }
    };
    JobMainComponent.prototype.dontSaveStatus = function () {
        // this.patchJobForm();
        this.jobForm.markAsUntouched();
        this.previousMode = this.currentMode;
        this.currentMode = this.VIEW;
        this.showJobStatusDropdown = false;
        this.addStatus = false;
    };
    return JobMainComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobMainComponent.prototype, "hostClicked", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobMainComponent.prototype, "handleKeyboardEvent", null);
JobMainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job-main',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-main/job-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-main/job-main.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _g || Object])
], JobMainComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=job-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-schedules/job-schedules.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-ag-grid-wrapper\">\n\n  <div>\n    <button class=\"btn btn-primary\">Create Invoice</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-schedules/job-schedules.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-schedules/job-schedules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSchedulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobSchedulesComponent = (function () {
    function JobSchedulesComponent(serverService, navBarService, router, activatedRoute, jobService) {
        this.serverService = serverService;
        this.navBarService = navBarService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobService = jobService;
        this.paramsReceived = null;
        this.path = null;
        this.columnDefs = [
            {
                headerName: "Staff Name",
                field: 'description',
                cellClass: 'first-column app-table-cell'
            },
            {
                headerName: "Start Date",
                field: "startDate",
                cellClass: 'second-column app-table-cell'
            },
            {
                headerName: "Start Time",
                field: "startTime",
                cellClass: 'third-column app-table-cell'
            },
            {
                headerName: "Finish Date",
                field: "finishDate",
                cellClass: 'fourth-column app-table-cell'
            },
            {
                headerName: "Finish Time",
                field: "finishTime",
                cellClass: 'fifth-column app-table-cell'
            }
        ];
    }
    JobSchedulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobServiceSubscription = this.jobService.jobSourceObservable.subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */].TYPE_SCHEDULES) {
                _this.paramsReceived = data.id;
                _this.path = "http://localhost:8081/api/jobs/" + _this.paramsReceived + "/jobSchedules";
                console.log(data);
                _this.getJobSchedules();
            }
        }, function (error) { return console.log(error); });
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            console.log("sizeColumnsToFit");
        });
    };
    JobSchedulesComponent.prototype.getJobSchedules = function () {
        var _this = this;
        this.serverService.getRequestByPath(this.path)
            .subscribe(function (jobSchedules) {
            console.log(jobSchedules);
            if (jobSchedules._embedded) {
                _this.rowData = jobSchedules._embedded.jobSchedules;
                _this.formatRowData();
            }
            else {
                _this.rowData = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    JobSchedulesComponent.prototype.formatRowData = function () {
        for (var i = 0; i < this.rowData.length; i++) {
            var startFullDate = new Date(this.rowData[i].startDtm);
            var finishFullDate = new Date(this.rowData[i].finishDtm);
            this.rowData[i].startDate = startFullDate.toDateString();
            this.rowData[i].startTime = startFullDate.toLocaleTimeString();
            this.rowData[i].finishDate = finishFullDate.toDateString();
            this.rowData[i].finishTime = finishFullDate.toLocaleTimeString();
        }
    };
    JobSchedulesComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    JobSchedulesComponent.prototype.onCellClicked = function ($event) {
        console.log($event.data);
        var href = $event.data._links.self.href;
        var index = (href.lastIndexOf('/') + 1);
        var id = +(href.substr(index));
        console.log(id);
        // this.router.navigate(['job', id, 'jobSchedules'])
        //   .then((value) => {
        //     console.log(value);
        //   }).catch((error) => {
        //   console.log(error)
        // });
    };
    JobSchedulesComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log($event.data._links.self);
    };
    JobSchedulesComponent.prototype.ngAfterViewInit = function () {
        this.jobService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */].TYPE_SCHEDULES });
    };
    JobSchedulesComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
        this.jobServiceSubscription.unsubscribe();
    };
    return JobSchedulesComponent;
}());
JobSchedulesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job-schedule',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-schedules/job-schedules.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-schedules/job-schedules.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */]) === "function" && _e || Object])
], JobSchedulesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=job-schedules.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-tabs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jobTabs; });
var jobTabs = [
    { title: 'Main', path: 'main' },
    { title: 'Comments', path: 'comments' },
    { title: 'Schedules', path: 'schedules' },
    { title: 'Field Work', path: 'field-works' },
    { title: 'Bills', path: 'bills' },
    { title: 'Costs', path: 'costs' },
    { title: 'Invoices', path: 'invoices' },
    { title: 'Timeline', path: 'timeline' }
];
//# sourceMappingURL=job-tabs.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-timeline/job-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-form-groups-container\">\n<div class=\"app-job-timeline\" *ngFor=\"let statusEntry of jobStatusEntries;let i = index;\">\n  <div [class]=\"'app-job-timeline-vertical-line-wrapper wrapper-' + (i % 5 + 1)\">\n    <div class=\"app-job-timeline-upper-vertical-line {{getFormattedCssString(statusEntry.statusMsg)}}\"></div>\n    <div class=\"app-job-timeline-circle {{getFormattedCssString(statusEntry.statusMsg)}}\"></div>\n    <div class=\"app-job-timeline-bottom-vertical-line {{getFormattedCssString(statusEntry.statusMsg)}}\"></div>\n  </div>\n  <div class=\"app-job-timeline-content\">\n    <ul>\n      <li>{{statusEntry.entryDateTimeMonth}}</li>\n      <li>user</li>\n      <li>{{statusEntry.statusMsg}}</li>\n      <li>{{statusEntry.comment}}</li>\n    </ul>\n  </div>\n</div>\n  <!--<div  class=\"app-form-job-status-list\">-->\n   <!--<div *ngFor=\"let status of jobStatuses\"-->\n         <!--class=\"app-form-job-status-item\"-->\n         <!--id=\"{{getFormattedCssString(status.status)}}\">-->\n     <!--<div class=\"app-job-timeline-circle {{getFormattedCssString(status.status)}}\"></div>-->\n     <!--<div class=\"app-form-job-status-item-title\">{{status.status}}</div>-->\n   <!--</div>-->\n  <!--</div>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-timeline/job-timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-job-timeline .app-form-groups-container {\n  padding: 0.5rem; }\n\n.app-job-timeline {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 2fr;\n      grid-template-columns: 1fr 2fr; }\n\n.app-job-timeline-vertical-line-wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto;\n      grid-template-columns: auto;\n  margin: 0 1rem 0 0; }\n\n.app-job-timeline-upper-vertical-line,\n.app-job-timeline-bottom-vertical-line {\n  width: 0.1rem;\n  min-height: 1rem;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  justify-self: flex-end;\n  background-color: black; }\n\n.app-job-timeline-upper-vertical-line {\n  margin: 0 0.45rem -1.2rem 0.45rem; }\n\n.app-job-timeline-bottom-vertical-line {\n  margin: -1.2rem 0.45rem 0 0.45rem; }\n\n.app-job-timeline-content {\n  padding: 0.5rem;\n  line-height: 1.2; }\n\n.app-job-timeline-content li {\n  padding: 0.125rem;\n  line-height: 1.2; }\n\n.app-job-timeline-circle {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  color: black;\n  background-color: black;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  justify-self: flex-end; }\n\n.app-form-job-status-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 2rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.app-form-job-status-item {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.wrapper-1 .app-job-timeline-bottom-vertical-line,\n.wrapper-1 .app-job-timeline-upper-vertical-line,\n.wrapper-1 .app-job-timeline-circle {\n  color: darkslategrey;\n  background-color: darkslategrey; }\n\n.wrapper-2 .app-job-timeline-bottom-vertical-line,\n.wrapper-2 .app-job-timeline-upper-vertical-line,\n.wrapper-2 .app-job-timeline-circle {\n  color: purple;\n  background-color: purple; }\n\n.wrapper-3 .app-job-timeline-bottom-vertical-line,\n.wrapper-3 .app-job-timeline-upper-vertical-line,\n.wrapper-3 .app-job-timeline-circle {\n  color: darkred;\n  background-color: darkred; }\n\n.wrapper-4 .app-job-timeline-bottom-vertical-line,\n.wrapper-4 .app-job-timeline-upper-vertical-line,\n.wrapper-4 .app-job-timeline-circle {\n  color: green;\n  background-color: green; }\n\n.wrapper-5 .app-job-timeline-bottom-vertical-line,\n.wrapper-5 .app-job-timeline-upper-vertical-line,\n.wrapper-5 .app-job-timeline-circle {\n  color: blue;\n  background-color: blue; }\n\n.app-form-job-status-item-title {\n  padding: 0.20rem;\n  margin-right: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job-timeline/job-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobTimelineComponent = (function () {
    function JobTimelineComponent(serverService, http, activatedRoute, changeDetectorRef, router, jobService, ngbModal) {
        this.serverService = serverService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.jobService = jobService;
        this.ngbModal = ngbModal;
        this.jobStatusEntries = null;
        this.newComment = false;
        this.path = null;
        this.partyId = null;
        this.job = null;
    }
    JobTimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobServiceSubscription = this.jobService.jobSourceObservable
            .subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */].TYPE_TIMELINE) {
                _this.paramsReceived = data.id;
                _this.path = "http://localhost:8081/api/jobs/" + _this.paramsReceived + "/statusEntries";
                _this.serverService.getRequestByJobId(_this.paramsReceived)
                    .subscribe(function (response) {
                    _this.job = response;
                    _this.setJobStatuses();
                    _this.setJobStatusEntries();
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    JobTimelineComponent.prototype.ngAfterViewInit = function () {
        this.jobService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */].TYPE_TIMELINE });
    };
    JobTimelineComponent.prototype.setJobStatusEntries = function () {
        var _this = this;
        this.serverService.getRequestByPath(this.path)
            .subscribe(function (jobStatuses) {
            console.log(jobStatuses);
            _this.jobStatusEntries = jobStatuses._embedded.jobStatusEntries;
            _this.formatDate();
        }, function (error) {
            console.log(error);
        });
    };
    JobTimelineComponent.prototype.setJobStatuses = function () {
        var _this = this;
        var jobType = this.job.type;
        var pathRequest = "http://localhost:8081/api/jobTypes/" + jobType + "/jobStatuses";
        this.serverService.getRequestByPath(pathRequest)
            .subscribe(function (response) {
            _this.jobStatuses = response._embedded.jobStatuses;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    JobTimelineComponent.prototype.formatDate = function () {
        this.jobStatusEntries.forEach(function (data) {
            var date = data.entryDtm;
            var formattedDate = new Date(date);
            data.entryDateTimeMonth = formattedDate.toDateString();
        });
    };
    JobTimelineComponent.prototype.getFormattedCssString = function (value) {
        value = value.toLowerCase().trim().replace(/\s+/g, '-');
        console.log(value);
        return value;
    };
    JobTimelineComponent.prototype.ngOnDestroy = function () {
    };
    return JobTimelineComponent;
}());
JobTimelineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job-timeline',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job-timeline/job-timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job-timeline/job-timeline.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _g || Object])
], JobTimelineComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=job-timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\" *ngFor=\"let jobTab of jobTabs\"\n      [hidden]=\"(id == quoteRequest || id == serviceRequest)\n                && jobTab.path != 'main'\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"{{jobTab.path}}\">{{jobTab.title}}</a>\n  </li>\n</ul>\n<div class=\"app-job-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-tabs {\n  text-align: center; }\n\n.nav-item {\n  font-size: 1.3rem;\n  line-height: 1.5;\n  width: 150px;\n  text-align: center; }\n\n.app-job-wrapper {\n  min-height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__job_tabs__ = __webpack_require__("../../../../../src/app/components/jobs/job/job-tabs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__ = __webpack_require__("../../../../../src/app/services/app-interaction.service.ts");
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
    function JobComponent(serverService, activatedRoute, jobService, appInteractionService) {
        this.serverService = serverService;
        this.activatedRoute = activatedRoute;
        this.jobService = jobService;
        this.appInteractionService = appInteractionService;
        this.jobTabs = __WEBPACK_IMPORTED_MODULE_1__job_tabs__["a" /* jobTabs */];
        this.id = null;
        this.type = null;
        this.jobId = null;
        this.data = null;
        this.partyId = null;
        this.quoteRequest = __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].QUOTE_REQUEST;
        this.serviceRequest = __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].SERVICE_REQUEST;
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.id = params['id'];
            _this.type = __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].TYPE_MAIN;
            _this.announceToChildComponents();
        }, function (error) {
            console.log(error);
        });
        this.childComponentSubscription = this.jobService.childComponentObservable
            .subscribe(function (data) {
            if (data && data.id) {
                _this.id = data.id;
            }
            if (data && data.type) {
                _this.type = data.type;
            }
            if (data && data.partyId) {
                _this.partyId = data.partyId;
            }
            _this.announceToChildComponents();
        }, function (error) {
            console.log(error);
        });
        this.appServiceSubscription = this.appInteractionService.appSourceObservable
            .subscribe(function (data) {
            console.log(data);
            if (data && data.id) {
                _this.id = data.id;
            }
            if (data && data.type) {
                _this.type = data.type;
            }
            if (data && data.partyId) {
                _this.partyId = data.partyId;
            }
        });
    };
    JobComponent.prototype.ngAfterViewInit = function () {
        this.appInteractionService.requestApplicationComponent({ id: this.id, type: this.type, partyId: this.partyId });
    };
    JobComponent.prototype.announceToChildComponents = function () {
        console.log(this.id);
        console.log(this.type);
        console.log(this.partyId);
        this.jobService.announceJobDetail({
            id: this.id,
            type: this.type,
            partyId: this.partyId
        });
    };
    return JobComponent;
}());
JobComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-job',
        template: __webpack_require__("../../../../../src/app/components/jobs/job/job.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/job/job.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_job_service__["a" /* JobService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_job_service__["a" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */]) === "function" && _d || Object])
], JobComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=job.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown new-job-dropdown\" [ngClass]=\"{'show': showDropdown }\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\"\n          id=\"dropdownMenuButton\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n          (click)=\"toggleDropdown()\">\n    New Job\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <button class=\"dropdown-item btn btn-primary\" (click)=\"onNewQuoteRequest()\">New Quote Request</button>\n    <button class=\"dropdown-item btn btn-primary\" (click)=\"onNewServiceRequest()\">New Service Request</button>\n  </div>\n</div>\n<div class=\"app-ag-grid-wrapper\">\n\n  <div>\n    <button class=\"btn btn-primary\">Create Invoice</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ag-grid-angular {\n  margin: 2rem 0; }\n\napp-jobs .new-job-dropdown {\n  margin-bottom: 5rem; }\n\napp-jobs .dropdown {\n  position: relative; }\n\napp-jobs .ag-header-container {\n  font-size: 1.3rem; }\n\napp-jobs .ag-body-container {\n  font-size: 1rem;\n  line-height: 1; }\n\napp-jobs .first-column, app-jobs .second-column {\n  color: #0275d8;\n  cursor: pointer; }\n\napp-jobs .first-column:hover, app-jobs .second-column:hover {\n  background-color: #b1ebf8;\n  color: black; }\n\napp-jobs .app-table-cell {\n  padding: 10px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__ = __webpack_require__("../../../../../src/app/services/app-interaction.service.ts");
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
                field: "customerName",
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
        });
    };
    JobsComponent.prototype.ngAfterViewInit = function () {
    };
    JobsComponent.prototype.formatRowData = function () {
        for (var i = 0; i < this.rowData.length; i++) {
            console.log(this.rowData[i]);
            if (this.rowData[i].latestSchedule) {
                this.rowData[i].latestSchedule.latestSchedule =
                    this.rowData[i].latestSchedule.logicalDay ?
                        this.rowData[i].latestSchedule.logicalDay :
                        this.rowData[i].latestSchedule.latestSchedule;
            }
            // let id = this.job[i]._links.self.href
            //   .substr(this.job[i]._links.self.href.lastIndexOf('/') + 1);
            // this.job[i].partyId = id;
        }
    };
    JobsComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    JobsComponent.prototype.onCellClicked = function ($event) {
        console.log($event);
        $event.cancelBubble;
        if ($event.column.colId === "customerName") {
            this.router.navigate(['parties', $event.data.customerUid, 'main'])
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
        this.router.navigate(['jobs', __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */].QUOTE_REQUEST, "main"])
            .then(function (value) {
            console.log(value);
        }).catch(function (error) {
            console.log(error);
        });
    };
    JobsComponent.prototype.onNewServiceRequest = function () {
        console.log('onNewServiceRequest');
        this.toggleDropdown();
        this.router.navigate(['jobs', __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */].SERVICE_REQUEST, "main"])
            .then(function (value) {
            console.log(value);
        }).catch(function (error) {
            console.log(error);
        });
    };
    return JobsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobsComponent.prototype, "handleKeyboardEvent", null);
JobsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jobs',
        template: __webpack_require__("../../../../../src/app/components/jobs/jobs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/jobs.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _e || Object])
], JobsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=jobs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-logo-container\">\n  <a href=\"#\">\n    <img src=\"assets/img/logos/logo-inverse.png\" id=\"app-logo\">\n  </a>\n</div>\n<ul class=\"app-navbar-list\" id=\"app-navbar-list\">\n  <li class=\"app-navbar-item\"\n      routerLink=\"parties\"\n      routerLinkActive=\"active\">\n    <a routerLink=\"parties\"\n      routerLinkActive=\"active\"\n       class=\"app-anchor\">\n      Parties\n    </a>\n  </li>\n  <li routerLink=\"jobs\"\n      class=\"app-navbar-item\"\n      routerLinkActive=\"active\">\n    <a routerLink=\"jobs\"\n      routerLinkActive=\"active\"\n       class=\"app-anchor\">\n      Jobs\n    </a>\n  </li>\n  <li class=\"app-navbar-item\"\n      routerLink=\"staff\"\n      routerLinkActive=\"active\">\n    <a routerLink=\"staff\"\n       routerLinkActive=\"active\"\n       class=\"app-anchor\">\n      Staff\n    </a>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-logo-container {\n  padding: 1rem; }\n\n#app-logo {\n  width: 12rem; }\n\n#app-navbar-list {\n  font-family: sans-serif inherit;\n  font-size: 1rem; }\n\n.app-navbar-item {\n  padding: 0.5rem 2rem;\n  border-left: 3px groove transparent; }\n\n.app-navbar-item.active,\n.app-navbar-item:hover,\n.app-navbar-item:hover > a,\n.app-anchor.active {\n  border-color: #00B9FF;\n  background-color: #283a5a;\n  outline: none;\n  color: #00B9FF; }\n\n.app-navbar-item:hover {\n  cursor: pointer; }\n\n.app-anchor {\n  color: white;\n  display: block;\n  padding: 0;\n  margin: 0;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/parties.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\"\n        id=\"app-header\">\n  <h1 class=\"app-header-title\"\n      id=\"app-header-title\">\n    Parties\n  </h1>\n</header>\n<header class=\"app-sub-header\"\n        id=\"app-sub-header\">\n  <button type=\"button\"\n          class=\"btn btn-sm btn-light\"\n          [routerLink]=\"createCustomer + '/main'\">\n    Create Customer\n  </button>\n  <button type=\"button\" class=\"btn btn-sm btn-info\">\n    Button\n  </button>\n  <button type=\"button\" class=\"btn btn-sm btn-primary\">\n    Button\n  </button>\n  <button type=\"button\" class=\"btn btn-sm btn-link\">\n    Button\n  </button>\n  <button type=\"button\" class=\"btn btn-sm app-btn\">\n    Button\n  </button>\n</header>\n<div class=\"app-main-content\" id=\"app-main-content\">\n  <div id=\"app-parties-search\">\n    <i class=\"fa fa-search\"></i>\n    <div class=\"app-input-wrapper\n          app-input-search-wrapper\"\n         [formGroup]=\"searchFormGroup\">\n      <input type=\"search\"\n             appFormInput\n             placeholder=\"Search\"\n             formControlName=\"search\"\n             class=\"app-input-search\"\n             id=\"search\">\n    </div>\n  </div>\n  <div class=\"app-grid\" id=\"app-grid\">\n    <div class=\"app-grid-row-header\">\n      <div class=\"app-grid-column-1\" draggable=\"true\">\n        Active Job Count\n      </div>\n      <div class=\"app-grid-column-2\" draggable=\"true\">\n        Name\n      </div>\n      <div class=\"app-grid-column-3\" draggable=\"true\">\n        Address\n      </div>\n    </div>\n    <div class=\"app-grid-row\" *ngFor=\"let party of pagedParties\"\n         (click)=\"onRowClicked(party.uuid)\">\n      <div class=\"app-grid-column-1\">\n        {{party.activeJobCount}}\n      </div>\n      <div class=\"app-grid-column-2\">\n        {{party.name}}\n      </div>\n      <div class=\"app-grid-column-3\">\n        {{party.physicalAddressStr}}\n      </div>\n    </div>\n    <!-- pager -->\n    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n      <li [ngClass]=\"{'pagination-item':true, 'page-item': true, disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n      </li>\n      <li [ngClass]=\"{'pagination-item':true, 'page-item': true,disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\"\n          [ngClass]=\"{'pagination-item':true,'page-item': true,active:pager.currentPage === page}\">\n        <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{'pagination-item':true,'page-item': true,disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n      </li>\n      <li [ngClass]=\"{'pagination-item':true, 'page-item': true,disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n      </li>\n    </ul>\n  </div>\n\n</div>\n<!--<router-outlet></router-outlet>-->\n<!--[showToolPanel]=\"showToolPanel\"-->\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/parties.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button:hover {\n  cursor: pointer; }\n\n#app-main {\n  padding: 1rem 2rem; }\n\n#app-header {\n  padding: 0.5rem 0; }\n\n.app-header-title {\n  font-size: 1.3rem;\n  margin: 0; }\n\n#app-sub-header {\n  padding: 0.5rem 0; }\n\n#app-parties-search {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  padding: 0.5rem 0;\n  color: #565656; }\n\n.app-btn {\n  background-color: rgba(0, 0, 0, 0.15); }\n\n.app-btn:hover {\n  background-color: rgba(0, 0, 0, 0.35); }\n\n.fa-search {\n  padding: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.15); }\n\n.app-input-search-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 0.5rem;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.25); }\n\n.app-input-search-wrapper.focus {\n  border-color: rgba(38, 38, 38, 0.6); }\n\n.app-input-search {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  color: #565656; }\n\n.app-grid,\n.app-grid-row-header,\n.app-grid-row {\n  display: -ms-grid;\n  display: grid; }\n\n.app-grid {\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  color: #565656;\n  background-color: white;\n  box-shadow: 0 1px 4px 0 rgba(38, 38, 38, 0.3);\n  border-color: white; }\n\n.app-grid-row-header, .app-grid-row {\n  -ms-grid-columns: 1fr 2fr 5fr;\n      grid-template-columns: 1fr 2fr 5fr; }\n\n.app-grid-row-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 20000;\n  background-color: white;\n  font-size: 1rem;\n  font-family: Arial, Helvetica, \"Palatino Linotype\", Georgia, serif; }\n\n.app-grid-row {\n  font-size: 0.8rem;\n  font-family: Verdana, Arial, sans-serif;\n  border-bottom: 1px solid #edecec; }\n\n.app-grid-row:hover * {\n  background-color: rgba(0, 0, 0, 0.075);\n  cursor: pointer; }\n\n.app-grid-column-1,\n.app-grid-column-2,\n.app-grid-column-3 {\n  padding: 0.5rem; }\n\n.pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.5rem;\n  margin: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/parties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__ = __webpack_require__("../../../../../src/app/services/app-interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_pager_service__ = __webpack_require__("../../../../../src/app/services/app-pager.service.ts");
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
    function PartiesComponent(serverService, navBarService, changeDetectorRef, router, activatedRoute, appPagerService) {
        this.serverService = serverService;
        this.navBarService = navBarService;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appPagerService = appPagerService;
        this.createCustomer = __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].CREATE_CUSTOMER;
        this.pager = {};
    }
    PartiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.constructor.name);
        this.searchFormGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            'search': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](null)
        });
        this.serverService.getAllParties()
            .subscribe(function (response) {
            _this.parties = response._embedded.parties.slice();
            _this.originalParties = response._embedded.parties.slice();
            _this.prepareSearchInput();
            _this.setPage(1);
        }, function (error) {
            console.log(error);
        });
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            // the timings of the nav bar css transition should be considered
            console.log("sizeColumnsToFit");
        });
    };
    PartiesComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.appPagerService.getPager(this.originalParties.length, page);
        // get current page of items
        this.pagedParties = this.originalParties.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PartiesComponent.prototype.newCustomer = function () {
    };
    PartiesComponent.prototype.onModelUpdated = function () {
        console.log("onModeUpdated");
    };
    PartiesComponent.prototype.onRowClicked = function (uuid) {
        var href = uuid;
        this.router.navigate([href, 'main'], { relativeTo: this.activatedRoute })
            .then(function (value) {
            console.log(value);
        }).catch(function (error) {
            console.log(error);
        });
    };
    PartiesComponent.prototype.onCellDoubleClicked = function ($event) {
    };
    PartiesComponent.prototype.prepareSearchInput = function () {
        var _this = this;
        this.searchFormGroup.get('search')
            .valueChanges.subscribe(function (value) {
            console.log(value.trim().length);
            if (value.trim().length > 0) {
                _this.pagedParties.length = 0;
                for (var i = 0; i < _this.originalParties.length; i++) {
                    if (_this.originalParties[i].name.toLowerCase().search(value.toLowerCase()) > -1) {
                        _this.pagedParties.push(_this.originalParties[i]);
                    }
                }
                for (var i = 0; i < _this.originalParties.length; i++) {
                    if (_this.originalParties[i].physicalAddressStr && _this.originalParties[i].physicalAddressStr.toLowerCase().search(value.toLowerCase()) > -1) {
                        _this.pagedParties.push(_this.originalParties[i]);
                    }
                }
                for (var i = 0; i < _this.originalParties.length; i++) {
                    if (_this.originalParties[i].email && _this.originalParties[i].email.toLowerCase().search(value.toLowerCase()) > -1) {
                        _this.pagedParties.push(_this.originalParties[i]);
                    }
                }
            }
            else {
                console.log(_this.originalParties);
                _this.pagedParties = _this.originalParties.slice();
                _this.setPage(_this.pager.currentPage);
            }
            console.log(value);
        }, function (error) {
            console.log(error);
        });
    };
    PartiesComponent.prototype.ngAfterViewInit = function () {
    };
    PartiesComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
    };
    return PartiesComponent;
}());
PartiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-parties',
        template: __webpack_require__("../../../../../src/app/components/parties/parties.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/parties.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_app_pager_service__["a" /* AppPagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_app_pager_service__["a" /* AppPagerService */]) === "function" && _f || Object])
], PartiesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=parties.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-bills/party-bills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-ag-grid-wrapper\">\n\n</div>\n"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyBillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
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
                field: "partyId",
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
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) { return console.log(error); });
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            console.log("sizeColumnsToFit");
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
        this.partyService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */].TYPE_BILLS });
    };
    PartyBillsComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
        this.partyServiceSubscription.unsubscribe();
    };
    return PartyBillsComponent;
}());
PartyBillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-party-bills',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-bills/party-bills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-bills/party-bills.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _d || Object])
], PartyBillsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=party-bills.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-comments/party-comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-form-groups-container\">\n  <h3 class=\"app-form-header\">Users Comments</h3>\n  <hr class=\"app-comments-hr\">\n  <div *ngIf=\"userComments\">\n    <div class=\"app-users-comments\" *ngFor=\"let eachComment of userComments; let i = index;\">\n\n      <div class=\"app-user-comment\">{{i + 1}}.&nbsp;{{eachComment.comment}}\n        <span class=\"app-comment-detail\"> - created by\n              <span class=\"app-comment-by\">{{eachComment.user}}</span>\n              on <span class=\"app-comment-on\"> {{eachComment.commentDtm}}</span></span>\n      </div>\n      <div *ngIf=\"eachComment.uploadedFiles && eachComment.uploadedFiles.length != 0\">\n        <span>Files:</span>\n        <a [href]=\"commentsUploadedFiles + '/' + eachFile.uuid + '/download'\" *ngFor=\"let eachFile of eachComment.uploadedFiles\">\n          {{eachFile.name}}\n\n        </a>\n      </div>\n      <hr class=\"user-comment-hr\">\n    </div>\n  </div>\n  <form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"newComment\" class=\"app-form\">\n    <div class=\"app-form-group\">\n      <div class=\"app-form-input-wrapper app-form-comments-wrapper\">\n        <textarea\n          placeholder=\"Enter comment\"\n          rows=\"5\"\n          appFormInput\n          formControlName=\"user-comment\"\n          class=\"app-form-input app-form-comment-input\">\n        </textarea>\n      </div>\n    </div>\n    <div class=\"app-form-group app-form-uploaded-Files\" *ngIf=\"uploadedFiles.length != 0\">\n      <span>Uploaded Files:&nbsp;&nbsp;&nbsp;\n        <span *ngFor=\"let uploadedFile of uploadedFiles\">\n        {{uploadedFile.name}}\n      </span>\n      </span>\n    </div>\n    <div class=\"app-form-group\">\n      <div class=\"app-form-input-wrapper\n                  app-form-file-upload-wrapper\">\n        <button type=\"submit\"\n                class=\"btn btn-primary\n                       app-form-save-button\"\n                       [disabled]=\"getFileUploadStatus()\">\n          Save\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-primary\n                       app-form-dont-save-button\"\n                [disabled]=\"getFileUploadStatus()\"\n                (click)=\"dontSaveUserComment()\">Don't Save</button>\n        <input\n          type=\"file\"\n          id=\"party-file-upload\"\n          #fileInput\n          appFormInput\n          class=\"app-form-input  app-form-file-upload\"\n          placeholder=\"Upload file\"\n          accept=\".pdf,.doc,.docx\"\n          [disabled]=\"getFileUploadStatus()\">\n        <div class=\"app-form-file-upload-message\" *ngIf=\"getUploadMessage()\">\n          {{this.uploadMessage}}\n        </div>\n        <button type=\"button\"\n                class=\"btn btn-primary\n                       app-form-file-upload-button\"\n                [disabled]=\"getFileUploadStatus()\"\n              (click)=\"uploadFile()\">Upload File</button>\n      </div>\n    </div>\n  </form>\n  <div>\n    <button *ngIf=\"!newComment\" type=\"button\" class=\"btn btn-primary\" (click)=\"createNewComment()\">New\n      comment\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-comments/party-comments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-party-comments .app-form-group {\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-comments/party-comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyCommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PartyCommentsComponent = (function () {
    function PartyCommentsComponent(serverService, http, activatedRoute, changeDetectorRef, router, partyService, ngbModal) {
        this.serverService = serverService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.partyService = partyService;
        this.ngbModal = ngbModal;
        this.userComments = null;
        this.newComment = false;
        this.path = null;
        this.uploadMessage = null;
        this.uploadingFile = false;
        this.commentUuid = null;
        this.uploadedFiles = [];
        this.commentsUploadedFiles = __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */].uploadedFilesUrl;
    }
    PartyCommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partyServiceSubscription = this.partyService.partySourceObservable
            .subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_2__services_party_service__["a" /* PartyService */].TYPE_COMMENTS) {
                _this.paramsReceived = data.id;
                _this.path = "http://localhost:8081/api/parties/" + _this.paramsReceived + "/comments";
                _this.getUserComments();
            }
        });
    };
    PartyCommentsComponent.prototype.ngAfterViewInit = function () {
        this.partyService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_2__services_party_service__["a" /* PartyService */].TYPE_COMMENTS });
    };
    PartyCommentsComponent.prototype.getUserComments = function () {
        var _this = this;
        this.serverService.getRequestByPath(this.path)
            .subscribe(function (comments) {
            console.log(comments);
            _this.userComments = comments._embedded.comments;
            _this.formatComments();
            _this.getCommentsFiles();
        }, function (error) {
            console.log(error);
        });
    };
    PartyCommentsComponent.prototype.formatComments = function () {
        this.userComments.forEach(function (data) {
            var date = data.commentDtm;
            var formattedDate = new Date(date);
            data.commentDtm = formattedDate.toDateString();
        });
        this.userComments.forEach(function (data) {
            console.log(data);
            var path = data._links.self.href;
            var index = path.lastIndexOf("/") + 1;
            data.commentId = path.substring(index);
        });
    };
    PartyCommentsComponent.prototype.getCommentsFiles = function () {
        var _this = this;
        this.userComments.forEach(function (comment) {
            _this.serverService.getUploadedFilesFromCommentsId(comment.commentId).
                subscribe(function (response) {
                comment.uploadedFiles = response._embedded.uploadedFiles;
                console.log(comment.uploadedFiles);
            }, function (error) {
                console.log(error);
            });
        });
    };
    PartyCommentsComponent.prototype.createNewComment = function () {
        console.log("create new comment");
        this.createCommentForm();
        this.newComment = true;
    };
    PartyCommentsComponent.prototype.createCommentForm = function () {
        this.commentForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            'user-comment': new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, this.validateComment.bind(this)])
        });
    };
    PartyCommentsComponent.prototype.validateComment = function () {
        console.log(this.commentForm);
        if (this.commentForm && this.commentForm.get('user-comment')
            && this.commentForm.get('user-comment').value
            && this.commentForm.get('user-comment').value.replace(/^\s+$/, '') != "") {
            return null;
        }
        else
            return { 'Invalid Comment': true };
    };
    PartyCommentsComponent.prototype.saveUserComment = function () {
        var _this = this;
        if (this.commentForm && this.commentForm.valid) {
            var comment = {};
            comment.comment = this.commentForm.get('user-comment').value;
            comment.staffUser = '/staffs/' + "motion6";
            comment.party = "/parties" + '/' + this.paramsReceived;
            this.serverService.saveUserComment(comment)
                .subscribe(function (response) {
                console.log(response);
                console.log(response.json());
                var path = (response.json())._links.self.href;
                var index = path.lastIndexOf("/") + 1;
                _this.commentUuid = path.substring(index);
                if (_this.uploadedFiles.length != 0) {
                    var patchComment = { comment: "/comments/" + _this.commentUuid };
                    var _loop_1 = function (i) {
                        _this.serverService.patchCommentWithUploadedFiles(_this.uploadedFiles[i].uuid, patchComment)
                            .subscribe(function (response) {
                            console.log(response.json());
                        }, function (error) {
                            _this.ngbModal.open("Something went wrong, comment was saved without file "
                                + _this.uploadedFiles[i].name);
                        });
                    };
                    for (var i = 0; i < _this.uploadedFiles.length; i++) {
                        _loop_1(i);
                    }
                }
                else if (_this.uploadedFiles.length == 0) {
                    _this.ngbModal.open("Comments Succesfull saved");
                }
                _this.getUserComments();
                _this.dontSaveUserComment();
            }, function (error) {
                console.log(error);
                _this.ngbModal.open("Sorry, something went wrong. !");
            });
        }
        else {
            this.ngbModal.open("Please enter a valid comment");
        }
    };
    PartyCommentsComponent.prototype.dontSaveUserComment = function () {
        this.commentForm.reset();
        this.newComment = false;
        this.uploadMessage = null;
    };
    PartyCommentsComponent.prototype.usersCommentFileUpload = function ($event) {
        console.log("usersCommentFileUpload called");
    };
    PartyCommentsComponent.prototype.onSubmit = function () {
        if (this.commentForm.valid) {
            this.saveUserComment();
        }
        else {
            this.ngbModal.open("Please enter a valid comment");
        }
    };
    PartyCommentsComponent.prototype.getUploadMessage = function () {
        return this.uploadMessage;
    };
    PartyCommentsComponent.prototype.uploadFile = function () {
        var _this = this;
        var fileInput = this.fileInput.nativeElement;
        if (fileInput.files && fileInput.files[0]) {
            this.uploadMessage = null;
            this.uploadingFile = true;
            var file_1 = fileInput.files[0];
            var formData = new FormData();
            formData.append('file', file_1, file_1.name);
            this.serverService.uploadFile(formData)
                .subscribe(function (data) {
                _this.uploadMessage = "File successfully saved";
                var fileUuid = (data.json()).uuid;
                _this.uploadedFiles.push({ name: file_1.name, uuid: fileUuid });
                _this.resetMessageStatus();
                console.log(data);
            }, function (error) {
                _this.uploadMessage = "Something went wrong, couldn't save the file !";
                _this.resetMessageStatus();
                console.log(error);
            });
        }
    };
    PartyCommentsComponent.prototype.getFileUploadStatus = function () {
        return this.uploadingFile;
    };
    PartyCommentsComponent.prototype.resetMessageStatus = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 500; }
        setTimeout(function () {
            //this.uploadMessage = null;
            _this.uploadingFile = false;
            _this.fileInput.nativeElement.value = "";
        }, timeout);
    };
    return PartyCommentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("fileInput"),
    __metadata("design:type", Object)
], PartyCommentsComponent.prototype, "fileInput", void 0);
PartyCommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-party-comments',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-comments/party-comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-comments/party-comments.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_party_service__["a" /* PartyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _g || Object])
], PartyCommentsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=party-comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-ag-grid-wrapper\">\n\n<div>\n  <button class=\"btn btn-primary\">Create Invoice</button>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-party-invoices .ag-header-container {\n  font-size: 2rem; }\n\napp-party-invoices .ag-body-container {\n  font-size: 1.3rem;\n  line-height: 1; }\n\napp-party-invoices .first-column {\n  color: #0275d8;\n  cursor: pointer; }\n\napp-party-invoices .first-column:hover {\n  background-color: #b1ebf8;\n  color: black; }\n\napp-party-invoices .app-table-cell {\n  padding: 10px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyInvoicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__ = __webpack_require__("../../../../../src/app/services/nav-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
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
                field: "invoiceDt",
                cellClass: 'third-column app-table-cell'
            },
            {
                headerName: "Due date",
                field: "invoiceDueDate",
                cellClass: 'fourth-column app-table-cell'
            },
            {
                headerName: "Total amount",
                field: "totalAmount",
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
        this.navBarSubscription = this.navBarService.getNavBarSubject().subscribe(function (value) {
            console.log("sizeColumnsToFit");
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
        this.partyService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */].TYPE_INVOICES });
    };
    PartyInvoicesComponent.prototype.ngOnDestroy = function () {
        this.navBarSubscription.unsubscribe();
        this.partyServiceSubscription.unsubscribe();
    };
    return PartyInvoicesComponent;
}());
PartyInvoicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-party-invoices',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-invoices/party-invoices.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_nav_bar_service__["a" /* NavBarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */]) === "function" && _e || Object])
], PartyInvoicesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=party-invoices.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div *ngIf=\"partyJobs && partyJobs.length !== 0\">\n    <div *ngFor=\"let partyJob of partyJobs\" class=\"app-form-groups-container\">\n      <div class=\"app-form-header\">\n        Job&nbsp; {{partyJob.jobNumber}}\n      </div>\n      <div class=\"app-form-group\">\n        <div class=\"app-form-label-wrapper\">\n          <label class=\"app-form-label\">Description\n          <span class=\"app-form-label-colon\">:</span>\n          </label>\n        </div>\n        <div class=\"app-form-input-wrapper\">\n          <div class=\"app-form-input\"\n               appFormInput>\n            {{partyJob.description}}\n          </div>\n        </div>\n      </div>\n      <div class=\"app-form-group\">\n        <div class=\"app-form-label-wrapper\">\n          <label class=\"app-form-label\">Status\n            <span class=\"app-form-label-colon\">:</span>\n          </label>\n        </div>\n        <div class=\"app-form-input-wrapper\">\n          <div class=\"app-form-input\">\n            {{partyJob.status}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"dropdown new-job-dropdown\" [ngClass]=\"{'show': showDropdown }\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\"\n          id=\"dropdownMenuButton\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n          (click)=\"toggleDropdown()\">\n    New Job\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <button class=\"dropdown-item btn btn-primary app-form-dropdown-item\" (click)=\"onNewQuoteRequest()\">New Quote\n      Request\n    </button>\n    <button class=\"dropdown-item btn btn-primary app-form-dropdown-item\" (click)=\"onNewServiceRequest()\">New Service\n      Request\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-party-jobs .app-form-header {\n  font-size: 1.3rem;\n  margin: 0.25rem;\n  padding: 0.25rem; }\n\napp-party-jobs .app-form-dropdown-item {\n  padding: 0.75rem;\n  border-bottom: 1px dashed gray;\n  cursor: pointer; }\n\napp-party-jobs .app-form-dropdown-item:hover, app-party-jobs .app-form-dropdown-item:focus, app-party-jobs .app-form-dropdown-item:active {\n  color: black;\n  background-color: #5cb3fd; }\n\napp-party-jobs .fa-caret-down {\n  color: #0275d8; }\n\napp-party-jobs .new-job-dropdown {\n  margin-bottom: 5rem; }\n\napp-party-jobs .dropdown {\n  display: block;\n  position: relative; }\n\napp-party-jobs .dropdown-menu {\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__ = __webpack_require__("../../../../../src/app/services/app-interaction.service.ts");
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
    function PartyJobsComponent(activatedRoute, serverService, partyService, appInteractionService, router) {
        this.activatedRoute = activatedRoute;
        this.serverService = serverService;
        this.partyService = partyService;
        this.appInteractionService = appInteractionService;
        this.router = router;
        this.paramsReceived = null;
        this.jobTypes = ['Service Request', 'Quote Request'];
        this.showDropdown = false;
    }
    PartyJobsComponent.prototype.handleKeyboardEvent = function (event) {
        console.log(event);
        if (event.keyCode === 27) {
            console.log('Escape!');
            this.showDropdown = false;
        }
    };
    PartyJobsComponent.prototype.hostClicked = function ($event) {
        console.log($event.target.id);
        if ($event.target.id != 'dropdownMenuButton') {
            this.showDropdown = false;
        }
    };
    PartyJobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partyServiceSubscription = this.partyService.partySourceObservable
            .subscribe(function (data) {
            if (data && data.id && data.type === __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */].TYPE_JOBS) {
                _this.paramsReceived = data.id;
                _this.path = "http://localhost:8081/api/parties/" + _this.paramsReceived + "/jobs";
                _this.getUserJobs();
            }
        });
    };
    PartyJobsComponent.prototype.getUserJobs = function () {
        var _this = this;
        this.serverService.getRequestByPath(this.path)
            .subscribe(function (jobs) {
            console.log(jobs);
            _this.partyJobs = jobs._embedded.jobs;
        }, function (error) {
            console.log(error);
        });
    };
    PartyJobsComponent.prototype.ngAfterViewInit = function () {
        this.partyService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */].TYPE_JOBS });
    };
    PartyJobsComponent.prototype.ngOnDestroy = function () {
        this.partyServiceSubscription.unsubscribe();
    };
    PartyJobsComponent.prototype.toggleDropdown = function () {
        this.showDropdown = !this.showDropdown;
        console.log(this.showDropdown);
    };
    PartyJobsComponent.prototype.onNewQuoteRequest = function () {
        var _this = this;
        console.log("navigate to new job page with quote request" + " params is " + this.paramsReceived);
        this.router.navigate(['jobs', __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */].QUOTE_REQUEST, "main"])
            .then(function (value) {
            console.log(value);
            _this.appInteractionService.requestApplicationComponent({
                id: __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */].QUOTE_REQUEST,
                type: __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */].TYPE_MAIN,
                partyId: _this.paramsReceived
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    PartyJobsComponent.prototype.onNewServiceRequest = function () {
        var _this = this;
        console.log("navigate to new job page with quote request" + " params is " + this.paramsReceived);
        this.router.navigate(['jobs', __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */].SERVICE_REQUEST, "main"])
            .then(function (value) {
            console.log(value);
            _this.appInteractionService.requestApplicationComponent({
                id: __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */].SERVICE_REQUEST,
                type: __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */].TYPE_MAIN,
                partyId: _this.paramsReceived
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    return PartyJobsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PartyJobsComponent.prototype, "handleKeyboardEvent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PartyJobsComponent.prototype, "hostClicked", null);
PartyJobsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-party-jobs',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-jobs/party-jobs.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_party_service__["a" /* PartyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_app_interaction_service__["a" /* AppInteractionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PartyJobsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=party-jobs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-main/party-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-form-container app-form-container-top\">\n  <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\" class=\"app-form\">\n    <div formGroupName=\"userData\" class=\"app-form-groups-container\">\n      <h3 class=\"app-form-header\">Customer/Supplier Details</h3>\n      <div class=\"app-form-group\" *ngFor=\"let formControl of formGroup\">\n        <div class=\"app-form-label-wrapper \">\n          <label class=\"app-form-label\" for=\"{{formControl.name}}\">{{formControl.title}}\n            <span class=\"app-form-label-colon\">:</span></label>\n        </div>\n        <div class=\"app-form-input-wrapper  \"\n             [ngClass]=\"{'readonly':!getDetailFormStatus()}\">\n          <input\n            type=\"text\"\n            id=\"{{formControl.name}}\"\n            formControlName=\"{{formControl.name}}\"\n            class=\"app-form-input \"\n            appFormInput\n            [readonly]=\"!getDetailFormStatus()\">\n          <i\n            *ngIf=\"signUpForm.get('userData.' + formControl.name).valid\"\n            class=\"fa fa-check\"\n            aria-hidden=\"true\">\n          </i>\n          <i\n            *ngIf=\"!signUpForm.get('userData.' + formControl.name).valid\"\n            class=\"fa fa-times\" aria-hidden=\"true\">\n          </i>\n        </div>\n        <div class=\"app-form-group-error-container\"\n             *ngIf=\"!signUpForm.get('userData.' + formControl.name).valid\n           && signUpForm.get('userData.' + formControl.name).touched\">\n          <div>\n            {{getFirstErrorMessage(formControl.name)}}\n            <i class=\"fa fa-asterisk\"></i>\n          </div>\n        </div>\n      </div>\n      <div *ngFor=\"let address of addressFormArray\" class=\"app-form-group\">\n\n        <div class=\"app-form-label-wrapper \">\n          <label for=\"{{address.name}}\"\n                 class=\"app-form-label \">\n            {{address.title}}\n            <span class=\"app-form-label-colon\">\n              :\n            </span>\n          </label>\n        </div>\n        <div class=\"app-form-address-input-wrapper\"\n             [ngClass]=\"{'readonly':!getDetailFormStatus()}\">\n          <input\n            type=\"text\"\n            id=\"{{address.name}}\"\n            class=\"app-form-input  \"\n            formControlName=\"{{address.name}}\"\n            appFormInput\n            [readonly]=\"!getDetailFormStatus()\"\n            name=\"{{address.name}}\"\n            (focus)=\"onAddressFocus($event, address)\"\n            (blur)=\"onAddressBlur($event, address)\"\n            (keydown)=\"onAddressKeyUp($event, address)\">\n          <img class=\"app-google-logo\" src=\"assets/img/logos/third-party/powered_by_google_on_white_hdpi.png\">\n          <i\n            *ngIf=\"!signUpForm.get('userData.' + address.name).valid\n                    && address.spinner && signUpForm.get('userData.' + address.name).touched\"\n            class=\"fa fa-spinner\" aria-hidden=\"true\">\n          </i>\n          <i\n            *ngIf=\"signUpForm.get('userData.' + address.name).valid\"\n            class=\"fa fa-check\" aria-hidden=\"true\">\n          </i>\n          <i\n            *ngIf=\"!signUpForm.get('userData.' + address.name).valid\"\n            class=\"fa fa-times\" aria-hidden=\"true\">\n          </i>\n        </div>\n        <div class=\"app-form-group-error-container\"\n             *ngIf=\"!signUpForm.get('userData.' + address.name).valid\n             && signUpForm.get('userData.' + address.name).touched\n                  && getDetailFormStatus()\">\n          <div>\n            {{getFirstAddressError(address.name)}}\n            <i class=\"fa fa-asterisk\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"app-form-group  \">\n        <div class=\" app-form-label-wrapper\">\n          <label for=\"party-file-upload\"\n                 class=\"app-form-label\">\n            File Upload\n            <span class=\"app-form-label-colon\">\n                :\n              </span>\n          </label>\n        </div>\n        <div class=\"app-form-input-wrapper app-form-file-upload-wrapper\"\n             [ngClass]=\"{'readonly':!getDetailFormStatus()}\">\n          <input\n            type=\"file\"\n            id=\"party-file-upload\"\n            #fileInput\n            appFormInput\n            class=\"app-form-input  app-form-file-upload\"\n            placeholder=\"Upload file\"\n            accept=\".pdf,.doc,.docx\"\n            [disabled]=\"!getDetailFormStatus()\n                        || !signUpForm.valid\n                        || getFileUploadStatus()\n                        || formMode == CREATE_CUSTOMER\">\n          <div class=\"app-form-file-upload-message\" *ngIf=\"getUploadMessage()\">\n            {{this.uploadMessage}}\n          </div>\n          <button class=\"btn btn-primary btn-sm app-form-file-upload-button\"\n                  type=\"button\"\n                  (click)=\"uploadFile()\"\n                  [disabled]=\"!signUpForm.valid\n                              || getFileUploadStatus()\n                              || formMode == CREATE_CUSTOMER\n                              || !(fileInput.files && fileInput.files[0])\">\n            Upload File\n          </button>\n        </div>\n      </div>\n      <div class=\"app-form-group-submit\" *ngIf=\"!getDetailFormStatus()\">\n        <div class=\"app-form-submit-wrapper\">\n          <button class=\"btn btn-primary\"\n                  type=\"button\"\n                  (click)=\"createCustomer()\"\n                  [disabled]=\"getFileUploadStatus()\">\n            Create Customer\n          </button>\n\n          <button class=\"btn btn-primary\"\n                  type=\"button\"\n                  (click)=\"editCustomer()\"\n                  [disabled]=\"getFileUploadStatus()\">\n            Edit Customer\n          </button>\n        </div>\n      </div>\n\n      <div class=\"app-form-group-submit\" *ngIf=\"getDetailFormStatus()\">\n        <div class=\"app-form-submit-wrapper\">\n          <button class=\"btn btn-primary\"\n                  [disabled]=\"!signUpForm.valid || getFileUploadStatus()\"\n                  type=\"submit\">\n            Save\n          </button>\n          <button class=\"btn btn-primary\"\n                  type=\"button\"\n                  (click)=\"dontSaveCustomer()\"\n                  [disabled]=\"getFileUploadStatus()\">\n            Don't Save\n          </button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-main/party-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party-main/party-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyMainComponent; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_app_interaction_service__ = __webpack_require__("../../../../../src/app/services/app-interaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PartyMainComponent = PartyMainComponent_1 = (function () {
    function PartyMainComponent(serverService, http, activatedRoute, changeDetectorRef, router, partyService, ngbModal) {
        this.serverService = serverService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.partyService = partyService;
        this.ngbModal = ngbModal;
        this.ADDRESS_PHYSICAL = PartyMainComponent_1.ADDRESS_PHYSICAL;
        this.ADDRESS_MAILING = PartyMainComponent_1.ADDRESS_MAILING;
        this.CREATE_CUSTOMER = PartyMainComponent_1.CREATE_CUSTOMER;
        this.EDIT_CUSTOMER = PartyMainComponent_1.EDIT_CUSTOMER;
        this.formMode = null;
        this.party = null;
        this.id = null;
        this.detailFormActive = false;
        this.uploadingFile = false;
        this.uploadMessage = null;
        this.formGroup = [
            { name: 'party-name', title: 'Name', 'invalid': 'Party name is not valid', 'required': 'Party name is required' },
            {
                name: 'party-contact-name',
                title: 'Contact Name',
                'invalid': 'Contact name is not valid',
                'required': 'Contact name is required'
            },
            {
                name: 'party-phone',
                title: 'Phone',
                'invalid': 'Phone number is not valid',
                'required': 'Phone number is required'
            },
            {
                name: 'party-mobile',
                title: 'Mobile',
                'invalid': 'Mobile number is not valid',
                'required': 'Mobile number is required'
            },
            {
                name: 'party-email',
                title: 'Email',
                'invalid': 'Email address is not valid',
                'required': 'Email address is required'
            },
        ];
        this.errorMessages = ["required", "invalid"];
        this.addressErrorMessages = ["required", "invalid", "not-found", "unknown-error", "request-denied", "query-limit-crossed"];
        this.addressFormArray = [
            {
                name: 'party-physical-address',
                title: 'Physical Address',
                type: this.ADDRESS_PHYSICAL,
                autoAddressesSuggesstion: [],
                addressSubscription: null,
                spinner: false,
                'required': 'Physical Address is required',
                "invalid": 'The input entered is not valid',
                "not-found": 'Physical Address entered could not be found',
                'unknown-error': "Unknown error occurred from the server side",
                'request-denied': "The request was denied by the server",
                "query-limit-crossed": "You have exceeded the maximum number of allowed queries"
            },
            {
                name: 'party-mailing-address',
                title: 'Mailing Address',
                type: this.ADDRESS_MAILING,
                autoAddressesSuggesstion: [],
                addressSubscription: null,
                spinner: false,
                'required': 'Mailing Address is required',
                "invalid": 'The input entered is not valid',
                "not-found": 'Mailing Address entered could not be found',
                'unknown-error': "Unknown error occurred from the server side",
                'request-denied': "The request was denied by the server",
                "query-limit-crossed": "You have exceeded the maximum number of allowed queries"
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
            if (data && data.type === __WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */].TYPE_MAIN) {
                if (data.id == __WEBPACK_IMPORTED_MODULE_9__services_app_interaction_service__["a" /* AppInteractionService */].CREATE_CUSTOMER) {
                    _this.signUpForm.reset();
                    _this.detailFormActive = true;
                    _this.formMode = _this.CREATE_CUSTOMER;
                    _this.resetMessageStatus();
                }
                else {
                    _this.id = data.id;
                    _this.serverService.getRequestByPartyId(_this.id, null, null)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.party = data;
                        _this.getPartyRequest();
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        });
    };
    PartyMainComponent.prototype.ngAfterViewInit = function () {
        this.partyService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */].TYPE_MAIN });
    };
    PartyMainComponent.prototype.getPartyRequest = function () {
        this.setSignUpForm();
        this.initAddressesSubscription(this.addressFormArray[0]);
        this.initAddressesSubscription(this.addressFormArray[1]);
    };
    PartyMainComponent.prototype.createSignUpForm = function () {
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'userData': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                'party-name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
                'party-contact-name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
                'party-phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.validatePhone.bind(this)]),
                'party-mobile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.validateMobile.bind(this)]),
                'party-email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email, this.validateEmail.bind(this)]),
                'party-physical-address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required], this.validatePhysicalAddress.bind(this)),
                'party-mailing-address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required], this.validateMailingAddress.bind(this)),
                'party-file-upload': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: '', disabled: true })
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
            this.serverService.putParty(this.id, party).subscribe(function (response) {
                _this.open("Successfully Saved");
                _this.partyService.announceParentComponent({ type: __WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */].TYPE_MAIN });
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
                _this.id = id;
                _this.detailFormActive = false;
                _this.router.navigate(['parties', id, 'main'])
                    .then(function (value) {
                    console.log(value);
                }).catch(function (error) {
                    console.log(error);
                });
            }, function (error) {
                _this.open("Something went wrong!. Couldn't save the form.");
                console.log(error);
            });
        }
        else {
            this.open("The form is either not edited or it is not valid ! \n Please try again.");
        }
    };
    PartyMainComponent.prototype.uploadFile = function () {
        var _this = this;
        this.detailFormActive = false;
        var fileInput = this.fileInput.nativeElement;
        if (fileInput.files && fileInput.files[0]) {
            this.uploadingFile = true;
            var file = fileInput.files[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            this.serverService.uploadFile(formData)
                .subscribe(function (data) {
                _this.uploadMessage = "File successfully saved";
                _this.resetMessageStatus();
                console.log(data);
            }, function (error) {
                _this.uploadMessage = "Something went wrong, couldn't save the file !";
                _this.resetMessageStatus();
                console.log(error);
            });
        }
    };
    PartyMainComponent.prototype.resetMessageStatus = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 2000; }
        setTimeout(function () {
            _this.uploadMessage = null;
            _this.uploadingFile = false;
            _this.fileInput.nativeElement.value = "";
        }, timeout);
    };
    PartyMainComponent.prototype.editCustomer = function () {
        this.signUpForm.markAsUntouched();
        this.detailFormActive = true;
        this.formMode = this.EDIT_CUSTOMER;
    };
    PartyMainComponent.prototype.dontSaveCustomer = function () {
        if (this.id != __WEBPACK_IMPORTED_MODULE_9__services_app_interaction_service__["a" /* AppInteractionService */].CREATE_CUSTOMER) {
            this.router.navigate(['parties', this.id, "main"])
                .then(function (value) {
                console.log(value);
            }).catch(function (error) {
                console.log(error);
            });
        }
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
        this.resetMessageStatus();
        this.router.navigate(['parties', __WEBPACK_IMPORTED_MODULE_9__services_app_interaction_service__["a" /* AppInteractionService */].CREATE_CUSTOMER, "main"])
            .then(function (value) {
            console.log(value);
        }).catch(function (error) {
            console.log(error);
        });
    };
    PartyMainComponent.prototype.validatePhone = function (control) {
        var regex = /^(0(2|3|7|8))?\d{8}$/;
        var phone = control.value;
        console.log(control);
        console.log(phone);
        if (phone) {
            if (!regex.test(phone.replace(/\(+/g, '').replace(/\)+/g, '').replace(/\s+/g, '').replace(/-+/g, ''))) {
                console.log("Phone number is invalid");
                return { 'invalid': true };
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
                return { invalid: true };
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
                return { invalid: true };
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
                    response.next({ 'not-found': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    response.next({ 'not-found': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
                    response.next({ 'invalid': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    response.next({ 'query-limit-crossed': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
                    response.next({ 'request-denied': true });
                    response.complete();
                }
                if (status == tempRef.googleService.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
                    response.next({ 'unknown-error': true });
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
        if (reason === __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PartyMainComponent.prototype.ngOnDestroy = function () {
        this.partyServiceSubscription.unsubscribe();
    };
    PartyMainComponent.prototype.getFirstErrorMessage = function (formControlName) {
        var formControl = this.signUpForm.get('userData.' + formControlName);
        for (var i = 0; i < this.errorMessages.length; i++) {
            if (formControl.errors[this.errorMessages[i]]) {
                for (var j = 0; j < this.formGroup.length; j++) {
                    if (formControlName === this.formGroup[j].name) {
                        return this.formGroup[j][this.errorMessages[i]];
                    }
                }
            }
        }
        return "Unknown Error";
    };
    PartyMainComponent.prototype.getFirstAddressError = function (formControlName) {
        console.log(formControlName);
        var formControl = this.signUpForm.get('userData.' + formControlName);
        if (formControl.errors) {
            for (var i = 0; i < this.addressErrorMessages.length; i++) {
                if (formControl.errors[this.addressErrorMessages[i]]) {
                    for (var j = 0; j < this.addressFormArray.length; j++) {
                        if (formControlName === this.addressFormArray[j].name) {
                            return this.addressFormArray[j][this.addressErrorMessages[i]];
                        }
                    }
                }
            }
        }
        return "Address could not be found !";
    };
    PartyMainComponent.prototype.getFileUploadStatus = function () {
        return this.uploadingFile;
    };
    PartyMainComponent.prototype.getUploadMessage = function () {
        return this.uploadMessage;
    };
    return PartyMainComponent;
}());
PartyMainComponent.CREATE_CUSTOMER = 'CREATE_CUSTOMER';
PartyMainComponent.EDIT_CUSTOMER = 'EDIT_CUSTOMER';
PartyMainComponent.ADDRESS_PHYSICAL = "ADDRESS_PHYSICAL";
PartyMainComponent.ADDRESS_MAILING = "ADDRESS_MAILING";
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("fileInput"),
    __metadata("design:type", Object)
], PartyMainComponent.prototype, "fileInput", void 0);
PartyMainComponent = PartyMainComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-party-main',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party-main/party-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party-main/party-main.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_party_service__["a" /* PartyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _g || Object])
], PartyMainComponent);

var PartyMainComponent_1, _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=party-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"app-top-bar\" id=\"app-header\">\n  <div class=\"app-header\">\n    <h1>{{data?.name}}</h1>\n  </div>\n  <div class=\"app-user\">\n\n  </div>\n</div>\n<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"main\">\n      Main\n    </a>\n  </li>\n  <li class=\"nav-item\"\n      *ngIf=\"id != CREATE_CUSTOMER\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"comments\">\n      Comments</a>\n  </li>\n  <li class=\"nav-item\"\n      *ngIf=\"id != CREATE_CUSTOMER\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"jobs\">\n      Jobs</a>\n  </li>\n  <li *ngIf=\"partyInvoices\n            && partyInvoices.length !=0\n            && id != CREATE_CUSTOMER\"\n      class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"invoices\">\n      Invoices\n    </a>\n  </li>\n  <li *ngIf=\"partyBills && partyBills.length !=0 && id != CREATE_CUSTOMER\"\n      class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"bills\">Bills</a>\n  </li>\n</ul>\n<div class=\"app-party-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parties/party/party.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_party_service__ = __webpack_require__("../../../../../src/app/services/party.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__ = __webpack_require__("../../../../../src/app/services/app-interaction.service.ts");
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
        this.CREATE_CUSTOMER = __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].CREATE_CUSTOMER;
        this.partyBills = null;
        this.partyInvoices = null;
        this.partyJobs = null;
        this.id = null;
        this.type = null;
    }
    PartyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
            _this.type = __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].TYPE_MAIN;
            if (params['id'] != __WEBPACK_IMPORTED_MODULE_5__services_app_interaction_service__["a" /* AppInteractionService */].CREATE_CUSTOMER) {
                _this.makeDataRequest();
            }
            _this.announceToChildComponents();
        }, function (error) { return console.log(error); });
        this.childComponentSubscription = this.partyService.childComponentObservable
            .subscribe(function (data) {
            if (data && data.id) {
                _this.id = data.id;
            }
            if (data && data.type) {
                _this.type = data.type;
            }
            _this.announceToChildComponents();
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.ngAfterViewInit = function () {
    };
    PartyComponent.prototype.makeDataRequest = function () {
        this.makePartyRequest();
        this.makeJobsRequest();
        this.makeBillsRequest();
        this.makeInvoicesRequest();
        this.makeCommentsRequest();
    };
    PartyComponent.prototype.makePartyRequest = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.id, null, null)
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.makeCommentsRequest = function () {
    };
    PartyComponent.prototype.makeJobsRequest = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.id, '/jobs')
            .subscribe(function (jobs) {
            _this.partyJobs = jobs._embedded.jobs;
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.makeBillsRequest = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.id, '/bills')
            .subscribe(function (bills) {
            console.log(bills);
            _this.partyBills = bills._embedded.bills;
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.makeInvoicesRequest = function () {
        var _this = this;
        this.serverService.getRequestByPartyId(this.id, '/invoices')
            .subscribe(function (invoices) {
            if (invoices._embedded) {
                _this.partyInvoices = invoices._embedded.invoices;
            }
            else {
                _this.partyInvoices = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.announceToChildComponents = function () {
        this.partyService.announcePartyDetail({
            id: this.id,
            type: this.type
        });
    };
    PartyComponent.prototype.onTabSelected = function () {
    };
    return PartyComponent;
}());
PartyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-party',
        template: __webpack_require__("../../../../../src/app/components/parties/party/party.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parties/party/party.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_party_service__["a" /* PartyService */]) === "function" && _e || Object])
], PartyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=party.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/staff/staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3 card-wrapper\" *ngFor=\"let eachStaff of staff\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <i class=\"fa fa-user\"></i>{{eachStaff.name}}\n      </div>\n      <div class=\"card-block app-card-content-container\">\n        <div class=\"staff-thmbnail-wrapper\">\n          <i class=\"fa fa-user staff-thumbnail\"></i>\n        </div>\n        <div class=\"app-card-content-wrapper\">\n          <p class=\"card-text\" title=\"email\">\n            {{eachStaff.email}}\n          </p>\n          <p class=\"card-text\" title=\"username\">\n            {{eachStaff.username}}\n          </p>\n          <p class=\"card-text\" title=\"Creation Date\">\n            {{eachStaff.createDate}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/staff/staff.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-staff .row {\n  padding: 1rem; }\n\napp-staff .card {\n  padding: 0.5rem 0;\n  border-radius: 0.5rem; }\n\napp-staff .col-3 {\n  margin-bottom: 1rem; }\n\napp-staff .fa-user {\n  padding-right: 1rem; }\n\napp-staff .app-card-content-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-right: 0; }\n\napp-staff .staff-thmbnail-wrapper {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  padding: 0.5rem; }\n\napp-staff .staff-thumbnail {\n  font-size: 5rem;\n  color: #5F4D2C; }\n\napp-staff .card-text {\n  margin: 0;\n  white-space: nowrap; }\n\napp-staff .app-card-content-wrapper {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  padding: 0.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/staff/staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaffComponent = (function () {
    function StaffComponent(serverService) {
        this.serverService = serverService;
    }
    StaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getAllStaffMembers()
            .subscribe(function (response) {
            console.log(response._embedded);
            _this.staff = response._embedded.staffs;
            _this.formatStaffData();
        }, function (error) {
            console.log(error);
        });
    };
    StaffComponent.prototype.formatStaffData = function () {
        for (var i = 0; i < this.staff.length; i++) {
            var date = new Date(this.staff[i].createDtm);
            this.staff[i].createDate = date.toDateString().substr(date.toDateString().indexOf(" "));
        }
    };
    return StaffComponent;
}());
StaffComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-staff',
        template: __webpack_require__("../../../../../src/app/components/staff/staff.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/staff/staff.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object])
], StaffComponent);

var _a;
//# sourceMappingURL=staff.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/form-input.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputDirective; });
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

var FormInputDirective = (function () {
    function FormInputDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    FormInputDirective.prototype.onInputFocus = function ($event) {
        this.renderer.addClass(this.parentElement, 'focus');
    };
    FormInputDirective.prototype.onInputBlur = function ($event) {
        this.renderer.removeClass(this.parentElement, 'focus');
    };
    FormInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.parentElement = this.elementRef.nativeElement.parentElement;
        this.parentElement.addEventListener('click', function () {
            _this.elementRef.nativeElement.focus();
        });
        this.renderer.listen(this.parentElement, 'click', function () {
            _this.elementRef.nativeElement.focus();
        });
    };
    return FormInputDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormInputDirective.prototype, "onInputFocus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormInputDirective.prototype, "onInputBlur", null);
FormInputDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appFormInput]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object])
], FormInputDirective);

var _a, _b;
//# sourceMappingURL=form-input.directive.js.map

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

/***/ "../../../../../src/app/services/app-interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInteractionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppInteractionService = (function () {
    function AppInteractionService() {
        this.appSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.appSourceObservable = this.appSource.asObservable();
        this.childComponentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.childComponentObservable = this.childComponentSubject.asObservable();
    }
    AppInteractionService.prototype.announceRequestDetail = function (data) {
        console.log(data);
        this.appSource.next(data);
    };
    AppInteractionService.prototype.requestApplicationComponent = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.childComponentSubject.next(data);
        }, 100);
    };
    return AppInteractionService;
}());
AppInteractionService.QUOTE_REQUEST = "Quote Request";
AppInteractionService.SERVICE_REQUEST = "Service Request";
AppInteractionService.TYPE_MAIN = 'TYPE_MAIN';
AppInteractionService.TYPE_JOBS = 'TYPE_JOBS';
AppInteractionService.TYPE_BILLS = 'TYPE_BILLS';
AppInteractionService.TYPE_INVOICES = 'TYPE_INVOICES';
AppInteractionService.TYPE_COMMENTS = 'TYPE_COMMENTS';
AppInteractionService.TYPE_SCHEDULES = 'TYPE_SCHEDULES';
AppInteractionService.TYPE_FIELDWORKS = 'TYPE_FIELDWORKS';
AppInteractionService.CREATE_CUSTOMER = 'Create Customer';
AppInteractionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppInteractionService);

//# sourceMappingURL=app-interaction.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/app-pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppPagerService = (function () {
    function AppPagerService() {
    }
    AppPagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_1_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return AppPagerService;
}());
AppPagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AppPagerService);

//# sourceMappingURL=app-pager.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/form-validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormValidationService; });
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

var FormValidationService = (function () {
    function FormValidationService() {
    }
    return FormValidationService;
}());
FormValidationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FormValidationService);

//# sourceMappingURL=form-validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
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
JobService.TYPE_COMMENTS = 'TYPE_COMMENTS';
JobService.TYPE_SCHEDULES = 'TYPE_SCHEDULES';
JobService.TYPE_FIELDWORKS = 'TYPE_FIELDWORKS';
JobService.TYPE_TIMELINE = 'TYPE_TIMELINE';
JobService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], JobService);

//# sourceMappingURL=job.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/nav-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NavBarService);

//# sourceMappingURL=nav-bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/party.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
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
PartyService.TYPE_COMMENTS = 'TYPE_COMMENTS';
PartyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PartyService);

//# sourceMappingURL=party.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/server-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerService = ServerService_1 = (function () {
    function ServerService(http) {
        this.http = http;
        this.baseUrl = ServerService_1.baseUrl;
        this.apiUrl = ServerService_1.apiUrl;
        this.partiesUrl = ServerService_1.partiesUrl;
        this.jobsUrl = ServerService_1.jobsUrl;
        this.staffUrl = ServerService_1.staffUrl;
        this.uploadUrl = ServerService_1.uploadUrl;
        this.commentsUrl = ServerService_1.commentsUrl;
    }
    ServerService.prototype.uploadFile = function (formData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */](headers);
        return this.http.post(this.uploadUrl, formData, options);
    };
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
    ServerService.prototype.getAllStaffMembers = function () {
        return this.http.get(this.staffUrl)
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
            console.log(response);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(ServerService_1.partiesUrl, party, { headers: headers });
    };
    ServerService.prototype.patchParty = function (id, party) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch(ServerService_1.partiesUrl + '/' + id, party, { headers: headers });
    };
    ServerService.prototype.patchCommentWithUploadedFiles = function (fileUuid, comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch(ServerService_1.uploadedFilesUrl + '/' + fileUuid, comment, { headers: headers });
    };
    ServerService.prototype.putParty = function (id, party) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(ServerService_1.partiesUrl + '/' + id, party, { headers: headers });
    };
    ServerService.prototype.saveJob = function (job) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(ServerService_1.jobsUrl, job, { headers: headers });
    };
    ServerService.prototype.postJobStatus = function (jobStatus) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(ServerService_1.jobStatusEntriesUrl, jobStatus, { headers: headers });
    };
    ServerService.prototype.putJob = function (id, job) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(ServerService_1.jobsUrl + '/' + id, job, { headers: headers });
    };
    ServerService.prototype.saveUserComment = function (userComment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(ServerService_1.commentsUrl, userComment, { headers: headers });
    };
    ServerService.prototype.getUploadedFilesFromCommentsId = function (id) {
        return this.http.get(ServerService_1.commentsUrl + '/' + id + '/uploadedFiles')
            .map(function (response) {
            console.log(response);
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    return ServerService;
}());
ServerService.baseUrl = "http://localhost:8081";
ServerService.apiUrl = ServerService_1.baseUrl + "/api";
ServerService.partiesUrl = ServerService_1.apiUrl + "/parties";
ServerService.jobsUrl = ServerService_1.apiUrl + "/jobs";
ServerService.staffUrl = ServerService_1.apiUrl + "/staffs";
ServerService.uploadUrl = ServerService_1.apiUrl + "/upload";
ServerService.commentsUrl = ServerService_1.apiUrl + "/comments";
ServerService.uploadedFilesUrl = ServerService_1.apiUrl + "/uploadedFiles";
ServerService.jobStatusEntriesUrl = ServerService_1.apiUrl + "/jobStatusEntries";
ServerService = ServerService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ServerService);

var ServerService_1, _a;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map