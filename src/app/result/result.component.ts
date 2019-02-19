import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Ev Williams', 'Mark Zuckerberg', 'Kevin Systrom', 'Daniel Ek'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [0.646,0.643,0.635,0.633], label: 'Overall match'},
    {data: [0.695,0.683,0.675,0.690], label: 'Company match'},
    {data: [0.597,0.603,0.595,0.577], label: 'Team match'},
    {data: [0.675,0.668,0.668,0.648], label: 'Teamwork scores'},
    {data: [0.516,0.549,0.519,0.526], label: 'Ability to work under pressure scores'},
    {data: [0.646,0.652,0.643,0.636], label: 'Thinking skills scores'},
    {data: [0.616,0.614,0.614,0.576], label: 'Enthusiasm scores'},
    {data: [0.532,0.534,0.529,0.499], label: 'Communication scores'},
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }
}
