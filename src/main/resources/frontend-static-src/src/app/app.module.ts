import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './components/layout/full-layout.component';
import { CustomersComponent } from './components/customers/customers.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { JobsComponent } from './components/jobs/jobs.component';
import { MapComponent } from './components/map/map.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { TimesheetsComponent } from './components/timesheets/timesheets.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DisplayCustomersComponent } from './components/customers/display-customers/display-customers.component';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';
import { HttpModule } from "@angular/http";
import {ServerService} from "./services/ServerService";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    CustomersComponent,
    DashboardComponent,
    JobsComponent,
    MapComponent,
    InvoicesComponent,
    QuotesComponent,
    PurchasesComponent,
    SchedulerComponent,
    TimesheetsComponent,
    SuppliersComponent,
    SettingsComponent,
    DisplayCustomersComponent,
    CreateCustomerComponent
  ],
  providers: [ServerService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
