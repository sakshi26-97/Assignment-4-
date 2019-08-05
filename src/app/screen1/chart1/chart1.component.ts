import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})

export class Chart1Component implements OnInit {
  public typeChart;
  public pieChart;
  public donutChart;
  allCharts:any = [];
  i;
  inputFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.typeChart = ["column", "bar"]; 

    // call drawChart function for column chart and bar graph
    for(this.i of this.typeChart ){
      console.log(this.i);
      this.drawChart(this.i);
      
    }

    this.drawPie();
    this.drawDonut();
   }

  ngOnInit() {
    // Checks whether input string is not empty
    this.inputFormGroup = this._formBuilder.group({
      year: ['', Validators.required],
      rainfall: ['', Validators.required]
    });

  }

  // function to Draw Charts
  drawChart(i) {
    i = new Chart({
      chart: {
        type: i
      },
      title: {
        text: 'Yearly Average Rainfall' + " (" + i + " " + "Graph)"
      },
      legend : {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 250,
        y: 100,
        floating: true,
        borderWidth: 1
      },
      xAxis:{
        categories: ["1999", "2000", "2001", "2002"], 
        title: {
        text: 'Year'
        } 
      },
      yAxis : {
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
        data: [200, 300, 450, 209],
        type: undefined
      }
     ]
    });
    this.allCharts.push(i);
  }

// function for Pie Chart
  drawPie() {
  this.pieChart = new Chart ({
    chart: {
      type: "pie"
    },
    
    title : {
      text: 'Yearly Average Rainfall (Pie Chart)'   
    },
    credits: {
    enabled: false
    },
    series : [
    {
      name : 'Mumbai',
      data : [["1999",200],["2000",300],["2001",450],["2002",209]],
      type : undefined
  }]
  })
}

// function for Donut Chart
drawDonut() {
  this.donutChart = new Chart ({
    chart: {
      type: "pie"
    },
    title : {
        text: 'Yearly Average Rainfall (Donut Chart)'   
    },
    credits: {
      enabled: false
    },
    plotOptions : {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        size : '45%',
        innerSize : '50%'
      }
    },
    series : [
      {
        name : 'Mumbai',
        data : [["1999",200],["2000",300],["2001",450],["2002",209]],
        type : undefined
    }]
  })
}

  // function to add new point in graph
  add(year, rainfall) {
    console.log(year, rainfall)

    if (year != "" && rainfall != "") {
      for(this.i of this.allCharts ) {
        this.i.options.xAxis.categories.push(year);
        this.i.addPoint(parseInt(rainfall));
      }
    // console.log(typeof(year));
      this.pieChart.addPoint([year,parseInt(rainfall)]);
      this.donutChart.addPoint([year,parseInt(rainfall)]);
    }

    else {
      window.alert("Please Enter the values");
    }
  }

}
