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
      traits: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness'],
      path: "../../assets/chen.png",
    },
    {
      name: 'Effy Wu',
      traits: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness'],
      path: "../../assets/effy.png",
    },
    {
      name: 'Safura Suleymanova',
      traits: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness'],
      path: "../../assets/safura.png",
    },
    {
      name: 'Shahrukh Suhail',
      traits: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness'],
      path: "../../assets/shahrukh.png",
    },
    {
      name: 'Suman Dutta',
      traits: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness'],
      path: "../../assets/suman.png",
    },
    {
      name: 'Yanan Chen',
      traits: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness'],
      path: "../../assets/yanan.png",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
