import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() isAuthorized: boolean;
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
