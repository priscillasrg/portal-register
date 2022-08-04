import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LoginModule,
    DashboardModule
  ]
})
export class PagesModule { }
