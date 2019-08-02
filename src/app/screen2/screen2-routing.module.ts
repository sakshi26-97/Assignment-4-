import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chart2Component } from './chart2/chart2.component';


const childRoutes: Routes = [

  { path: 'chart2', component:Chart2Component}
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class Screen2RoutingModule { }
