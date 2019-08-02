import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen3RoutingModule } from './screen3-routing.module';
import { Chart3Component } from './chart3/chart3.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [Chart3Component],
  imports: [
    CommonModule,
    Screen3RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    MatInputModule
  ]
})
export class Screen3Module { }
