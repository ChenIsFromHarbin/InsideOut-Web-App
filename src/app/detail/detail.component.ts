import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  detail: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H', detail: "lalalala"},
  {name: 'Helium', weight: 4.0026, symbol: 'He', detail: "lalalala"},
  {name: 'Lithium', weight: 6.941, symbol: 'Li', detail: "lalalala"},
  {name: 'Beryllium', weight: 9.0122, symbol: 'Be', detail: "lalalala"},
  {name: 'Boron', weight: 10.811, symbol: 'B', detail: "lalalala"},
  {name: 'Carbon', weight: 12.0107, symbol: 'C', detail: "lalalala"},
  {name: 'Nitrogen', weight: 14.0067, symbol: 'N', detail: "lalalala"},
  {name: 'Oxygen', weight: 15.9994, symbol: 'O', detail: "lalalala"},
  {name: 'Fluorine', weight: 18.9984, symbol: 'F', detail: "lalalala"},
  {name: 'Neon', weight: 20.1797, symbol: 'Ne', detail: "lalalala"},
];

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})

export class DetailComponent implements OnInit {
  @Input() name: string;
  @ViewChild(MatSort) sort: MatSort;
  @Output() displayResult: EventEmitter<any> = new EventEmitter;
  @Output() backFromDetail: EventEmitter<any> = new EventEmitter;

  displayedColumns: string[] = ['name', 'weight', 'symbol','detail'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  seeResult(candidateName: string){
    this.displayResult.emit({
      candidateName: candidateName,
    })
  }
  back(){
    this.backFromDetail.emit(true);
  }
}