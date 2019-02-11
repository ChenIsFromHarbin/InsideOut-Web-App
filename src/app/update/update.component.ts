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
      name: 'Candidate 1',
      hasCandidate: this.hasCandidate,
    },
    {
      name: 'Candidate 2',
      hasCandidate: this.hasCandidate,
    },
    {
      name: 'Candidate 3',
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
