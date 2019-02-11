import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Post {
  name: string;
  created: Date;
  completed: boolean;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Output() postInfo: EventEmitter<any> = new EventEmitter;
  posts: Post[] = [
    {
      name: 'Data scientist',
      created: new Date('1/1/19'),
      completed: false,
    },
    {
      name: 'Java developer',
      created: new Date('1/17/19'),
      completed: false,
    },
    {
      name: 'Web developer',
      created: new Date('1/28/19'),
      completed: true,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  goToPost(name:string, completed: boolean){
    this.postInfo.emit({
      PositionName: name,
      isCompleted: completed,
    })
  }  

}
