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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'invoices',
        component: InvoicesComponent
      },
      {
        path: 'quotes',
        component: QuotesComponent
      },
      {
        path: 'purchases',
        component: PurchasesComponent
      },
      {
        path: 'scheduler',
        component: SchedulerComponent
      },
      {
        path: 'timesheets',
        component: TimesheetsComponent
      },
      {
        path: 'suppliers',
        component: SuppliersComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
    ]
  },
  {
    path: 'pages',
    component: FullLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
