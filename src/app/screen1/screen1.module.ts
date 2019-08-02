import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart1Component } from './chart1/chart1.component';
import { Screen1RoutingModule } from './screen1-routing.module';
import { ChartModule } from 'angular-highcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@NgModule({
  declarations: [Chart1Component],
  imports: [
    CommonModule,
    Screen1RoutingModule,
    ChartModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
    // FormBuilder,
    // FormGroup,
    // Validators
  ]
})
export class Screen1Module { }
