import { Component, OnInit } from '@angular/core';
import { data } from './data';
import { Chart } from 'angular-highcharts';
import { interval } from 'rxjs';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {
  public categoryArray;
  public dataArray;
  public jsondata;
  intervals;
  public typeChart;
  allCharts:any = [];
  i;


  constructor() {

    this.jsondata = data;
    this.categoryArray = this.jsondata.map((data) => { return data["year"] });
    this.dataArray = this.jsondata.map((data) => { return data["avgRainfall"] });

    // console.log(this.categoryArray);
    // console.log(this.categoryArray.length);
    // console.log(this.dataArray);

    this.typeChart = ["line", "area"]; 

    // call drawChart function for line and area graph
    for(this.i of this.typeChart) {
      console.log(this.i);
      this.drawChart(this.i);
    }

    this.initRandom();
  }

  ngOnInit() {
  }

  // Draw Charts
  drawChart(i){ 

    i = new Chart({
      chart: {
        type: i
      },
      title: {
        text: 'Yearly Average Rainfall'
      },
      xAxis: {
        categories: this.categoryArray,
        title: {
          text: 'Year'
        }
      },
      yAxis: {
        title: {
          text: 'Yearly Average Rainfall'
        },
        labels: {
          overflow: 'justify'
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Mumbai',
          data: this.dataArray,
          type: undefined
        }
      ]
    });
    this.allCharts.push(i);
  }
  
  // Generates Random Data using Random Generator Function
  randomDataGeneration() {
    for(this.i of this.allCharts ) {
    let rainy = Math.floor(Math.random() * 1000);
    let yearly = (parseInt(this.categoryArray[this.categoryArray.length-1]) + 1).toString();
    this.dataArray.push(rainy);
    this.categoryArray.push(yearly);
    // console.log(this.dataArray);
    // console.log(this.categoryArray);
    this.i.addPoint([yearly,rainy]);
    }
  }

  // Calls randomDataGeneration() funtion after every 2 sec
  initRandom() {
    this.intervals = interval(2000).subscribe((val)=> {
      console.log("val", val);
      this.randomDataGeneration();
    })
  }

  // Function to stop plotting of random numbers
  stop() {
    this.intervals.unsubscribe();
  }
  
}
