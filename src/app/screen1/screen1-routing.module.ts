import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chart1Component } from './chart1/chart1.component';


const childRoutes: Routes = [

  { path: 'chart1', component:Chart1Component}
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class Screen1RoutingModule { }
