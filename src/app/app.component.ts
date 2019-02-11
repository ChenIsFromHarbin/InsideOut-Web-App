import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inside-out';
  isAuthorized = false;
  showPost = false;
  showCandidate = false;
  postName: string;
  isCompleted: boolean;
  candidateName: string;
  logIn(event){
    this.isAuthorized = true;
  }
  logOut(event){
    this.isAuthorized = false;
  }
  postDisplay(event){
    this.postName = event.PositionName;
    this.isCompleted = event.isCompleted;
    this.showPost = true;
  }
  backHome(event){
    if(this.isAuthorized){
      this.showPost = false;
      this.showCandidate = false;
    }
  }
  candidateDetail(event){
    this.candidateName = event.candidateName;
    this.showCandidate = true;
  }
}
