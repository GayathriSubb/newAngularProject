import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edureka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public userprofile={
    name :"gayu",
    number:12345677,
    age:22,
    initials:"gs"
  }
  getUserProfile()
  {
    return this.userprofile;
  }
  changeName(){
    this.userprofile.name="scibi";
  }
  constructor() { }
  toggleUserProfile=true;
  ngOnInit(): void {
  }
  clearProfileData(event){
    //this.userprofile=null;

   this.userprofile.initials=event;
  }
  ChangeValue(){
    this.userprofile.initials="scibi"
  }
  ChangeRef(){
    this.userprofile={...this.userprofile, initials:"Hello"}
  }
}
