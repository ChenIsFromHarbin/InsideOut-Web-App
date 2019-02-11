import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() authorize: EventEmitter<any> = new EventEmitter;
  @Output() home: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  signOut(){
    this.authorize.emit(false);
  }
  goHome(){
    this.home.emit(true);
  }
}
