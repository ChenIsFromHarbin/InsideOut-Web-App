import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Candidate {
  name: string;
  hasCandidate: boolean;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() name: string;
  @Input() hasCandidate: boolean;
  @Output() backFromUpdate: EventEmitter<any> = new EventEmitter;

  candidates: Candidate[] = [
    {
      name: 'Wilson Baker',
      hasCandidate: this.hasCandidate,
    },
    {
      name: 'Daisy Harris',
      hasCandidate: this.hasCandidate,
    },
    {
      name: 'Evelyn Moore',
      hasCandidate: this.hasCandidate,
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  back(){
    this.backFromUpdate.emit(true);
  }
}
