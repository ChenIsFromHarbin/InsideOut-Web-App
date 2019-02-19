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
  showCompare = false;
  postName: string;
  isCompleted: boolean;
  logIn(event){
    this.isAuthorized = true;
  }
  logOut(event){
    this.isAuthorized = false;
    this.showPost = false;
    this.showCompare = false;
  }
  postDisplay(event){
    this.postName = event.PositionName;
    this.isCompleted = event.isCompleted;
    this.showPost = true;
  }
  backHome(event){
    if(this.isAuthorized){
      this.showPost = false;
      this.showCompare = false;
    }
  }
  compareDetail(event){
    this.showCompare = true;
  }
}
