import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLinks = [{
    path : "screen1/chart1",
    label : "Screen1"
  },

  {
    path :  "screen2/chart2",
    label : "Screen2"
  },

  {
    path : "screen3/chart3",
    label : "Screen3"
  },
 ]
}
