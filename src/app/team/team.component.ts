import { Component, OnInit } from '@angular/core';

export interface TeamMember {
  name: string;
  traits: any;
  path: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  members: TeamMember[] = [
    {
      name: 'Chen Zhang',
      traits: ['Curious', 'Conscientious', 'Extrovert'],
      path: "../../assets/chen.png",
    },
    {
      name: 'Effy Wu',
      traits: ['Open to challenge', 'Confident', 'Detail-oriented'],
      path: "../../assets/effy.png",
    },
    {
      name: 'Safura Suleymanova',
      traits: ['Purposeful', 'Analytical', 'Motivated'],
      path: "../../assets/safura.png",
    },
    {
      name: 'Shahrukh Suhail',
      traits: ['Self-disciplined', 'Creative', '	Expressive'],
      path: "../../assets/shahrukh.png",
    },
    {
      name: 'Suman Dutta',
      traits: ['Intellectual', 'Idealistic', 'Cooperative'],
      path: "../../assets/suman.png",
    },
    {
      name: 'Yanan Chen',
      traits: ['Flexible', 'Logical', 'Insightful'],
      path: "../../assets/yanan.png",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
