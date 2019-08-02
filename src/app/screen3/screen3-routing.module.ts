import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chart3Component } from './chart3/chart3.component';


const childRoutes: Routes = [

  { path: 'chart3', component:Chart3Component}
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class Screen3RoutingModule { }
