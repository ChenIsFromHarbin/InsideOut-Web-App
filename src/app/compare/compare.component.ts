import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  @Output() backFromCompare: EventEmitter<any> = new EventEmitter;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Kevin Systrom','Mark Zuckerberg'];
  public barChartType:string = 'bar';
  public horizonBarChartType:string = 'horizontalBar';
  public barChartLegend:boolean = true;
 
  public barChartData_p:any[] = [
    {data: [0.69,0.73], label: 'Challenge'},
    {data: [0.65,0.61], label: 'Self-expression'},
    {data: [0.7,0.7], label: 'Practicality'},
  ];

  public barChartData_d:any[] = [
    {data: [0.65,0.66], label: 'Self-enhancement'},
    {data: [0.63,0.61], label: 'Hedonism'},
    {data: [0.83,0.83], label: 'Self-transcendence'},
    {data: [0.58,0.60], label: 'Conservation'},
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
  
  back(){
    this.backFromCompare.emit(true);
  }
}
