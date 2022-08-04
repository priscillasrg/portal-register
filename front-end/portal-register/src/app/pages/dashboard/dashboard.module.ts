import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CarsComponent } from './cars/cars.component';


@NgModule({
  declarations: [DashboardComponent, CarsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppMaterialModule,
  ]
})
export class DashboardModule { }
