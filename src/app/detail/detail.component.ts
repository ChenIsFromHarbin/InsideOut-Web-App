import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';


export interface MatchResult {
  "Name": string,
  "Overall": number,
  "Company": number,
  "Team": number,
  "Teamwork": number,
  "Pressure": number,
  "Thinking": number,
  "Enthusiasm": number,
  "Communication": number,
  "Recommend": string,
}

const MATCH_RESULT: MatchResult[] = [
  {
    "Name": "Ev Williams",
    "Overall": 0.646,
    "Company": 0.695,
    "Team": 0.597,
    "Teamwork": 0.675,
    "Pressure": 0.516,
    "Thinking": 0.646,
    "Enthusiasm": 0.616,
    "Communication": 0.532,
    "Recommend": "Candidate would like to know about on-site library, Area 631, ECF, Amphitheatre movie days."
  },
  {
    "Name": "Mark Zuckerberg",
    "Overall": 0.643,
    "Company": 0.683,
    "Team": 0.603,
    "Teamwork": 0.668,
    "Pressure": 0.549,
    "Thinking": 0.652,
    "Enthusiasm": 0.614,
    "Communication": 0.534,
    "Recommend": "Candidate would like to know about on-site library, Area 631, ECF, Amphitheatre movie days."
  },
  {
    "Name": "Kevin Systrom",
    "Overall": 0.635,
    "Company": 0.675,
    "Team": 0.595,
    "Teamwork": 0.668,
    "Pressure": 0.519,
    "Thinking": 0.643,
    "Enthusiasm": 0.614,
    "Communication": 0.529,
    "Recommend": "Candidate would like to know about on-site library, Area 631, ECF, Amphitheatre movie days."
  },
  {
    "Name": "Daniel Ek",
    "Overall": 0.633,
    "Company": 0.690,
    "Team": 0.577,
    "Teamwork": 0.648,
    "Pressure": 0.526,
    "Thinking": 0.636,
    "Enthusiasm": 0.576,
    "Communication": 0.499,
    "Recommend": "Candidate would like to know about on-site library, ECF, Amphitheatre movie days."
  }
]



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})

export class DetailComponent implements OnInit {
  @Input() name: string;
  @ViewChild(MatSort) sort: MatSort;
  @Output() displayCompare: EventEmitter<any> = new EventEmitter;
  @Output() backFromDetail: EventEmitter<any> = new EventEmitter;

  displayedColumns: string[] = [
    "Name",
    "Overall",
    "Company",
    "Team",
    "Teamwork",
    "Pressure",
    "Thinking",
    "Enthusiasm",
    "Communication",
    "Recommend"
  ];
  dataSource = new MatTableDataSource(MATCH_RESULT);

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  seeCompare(){
    this.displayCompare.emit(true);
  }
  back(){
    this.backFromDetail.emit(true);
  }
}