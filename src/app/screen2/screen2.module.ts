import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart2Component } from './chart2/chart2.component';
import { Screen2RoutingModule } from './screen2-routing.module';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [Chart2Component],
  imports: [
    CommonModule,
    Screen2RoutingModule,
    ChartModule
  ]
})
export class Screen2Module { }
