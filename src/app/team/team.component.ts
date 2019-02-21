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
      traits: ['Enthusiasm', 'Negotiation and persuasion', 'Leadership skills'],
      path: "../../assets/chen.png",
    },
    {
      name: 'Effy Wu',
      traits: ['Willingness to learn', 'Confidence', 'Detail-oriented'],
      path: "../../assets/effy.png",
    },
    {
      name: 'Safura Suleymanova',
      traits: ['Strong work values', 'Thinking skills', 'Perseverance and Motivation'],
      path: "../../assets/safura.png",
    },
    {
      name: 'Shahrukh Suhail',
      traits: ['Self-management', 'Creativity', 'Teamwork'],
      path: "../../assets/shahrukh.png",
    },
    {
      name: 'Suman Dutta',
      traits: ['Thinking skills', 'Creativity', 'Communication'],
      path: "../../assets/suman.png",
    },
    {
      name: 'Yanan Chen',
      traits: ['Ability to work under pressure', 'Thinking skills', 'Willingness to learn'],
      path: "../../assets/yanan.png",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
