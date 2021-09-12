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
  public categoryArray: string[];
  public dataArray: number[];
  public jsondata:  {
    year: string;
    avgRainfall: number;
  }[];
  intervals;
  allCharts:any = [];


  constructor() {

    this.jsondata = data;
    this.categoryArray = this.jsondata.map((data) => { return data["year"] });
    this.dataArray = this.jsondata.map((data) => { return data["avgRainfall"] });

    // console.log(this.categoryArray);
    // console.log(this.categoryArray.length);
    // console.log(this.dataArray);

    const typeChart = ["line", "area"]; 

    // call drawChart function for line and area graph
    for(let type of typeChart) {
      this.drawChart(type);
    }

    this.initRandom();
  }

  ngOnInit() {
  }

  // Draw Charts
  drawChart(type: string): void { 

    const chart = new Chart({
      chart: {
        type: type
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
    this.allCharts.push(chart);
  }
  
  // Generates Random Data using Random Generator Function
  generateRandomData(): void {
    for(let chart of this.allCharts) {
      let rainy = Math.floor(Math.random() * 1000);
      let yearly = (parseInt(this.categoryArray[this.categoryArray.length-1]) + 1).toString();
      this.dataArray.push(rainy);
      this.categoryArray.push(yearly);
      // console.log(this.dataArray);
      // console.log(this.categoryArray);
      chart.addPoint([yearly,rainy]);
    }
  }

  // Calls generateRandomData() funtion after every 2 sec
  initRandom(): void {
    this.intervals = interval(2000).subscribe((val)=> {
      this.generateRandomData();
    })
  }

  // Function to stop plotting of random numbers
  stop(): void {
    this.intervals.unsubscribe();
  }
  
}
