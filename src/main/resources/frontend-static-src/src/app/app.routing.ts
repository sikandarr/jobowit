import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './components/layout/full-layout.component';
import {CustomersComponent} from "./components/customers/customers.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {JobsComponent} from "./components/jobs/jobs.component";
import {MapComponent} from "./components/map/map.component";
import {InvoicesComponent} from "./components/invoices/invoices.component";
import {QuotesComponent} from "./components/quotes/quotes.component";
import {PurchasesComponent} from "./components/purchases/purchases.component";
import {SchedulerComponent} from "./components/scheduler/scheduler.component";
import {TimesheetsComponent} from "./components/timesheets/timesheets.component";
import {SuppliersComponent} from "./components/suppliers/suppliers.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {AddCustomerComponent} from "./components/customers/add-customer/add-customer.component";

export const routes: Routes = [

  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: {
      title: 'Customers'
    },
  },
  {
    path: 'customers/add-customer',
    component: AddCustomerComponent,
    data: {
      title: 'Add Customer'
    },
  },
  {
    path: 'jobs',
    component: JobsComponent,
    data: {
      title: 'Jobs'
    },
  },
  {
    path: 'map',
    component: MapComponent,
    data: {
      title: 'Map'
    },
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    data: {
      title: 'Invoices'
    },
  },
  {
    path: 'quotes',
    component: QuotesComponent,
    data: {
      title: 'Quotes'
    },
  },
  {
    path: 'purchases',
    component: PurchasesComponent,
    data: {
      title: 'Purchases'
    },
  },
  {
    path: 'scheduler',
    component: SchedulerComponent,
    data: {
      title: 'Scheduler'
    },
  },
  {
    path: 'timesheets',
    component: TimesheetsComponent,
    data: {
      title: 'Timesheets'
    },
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    data: {
      title: 'Suppliers'
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    },
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
