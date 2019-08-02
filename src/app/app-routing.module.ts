import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [

  {
    path : 'screen1',
    loadChildren: './screen1/screen1.module#Screen1Module'
  },

  {
    path : 'screen2',
    loadChildren: './screen2/screen2.module#Screen2Module'
  },

  {
    path : 'screen3',
    loadChildren: './screen3/screen3.module#Screen3Module'
  },

  {
    path : 'screen3',
    redirectTo: '/AppComponent'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
