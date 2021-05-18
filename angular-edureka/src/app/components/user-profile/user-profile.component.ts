import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component,EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';


interface IProfile{
  name :string,
    number:number,
    age:number,
    initials:string
}
@Component({
  selector: 'edureka-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit,OnChanges,OnDestroy,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
//  @Input() profile: IProfile|null =null;
@Input("profile") userProfile: IProfile|null =null;

@Output() logout = new EventEmitter();
  timer: number;
constructor() { }

  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngOnInit(): void {
    // console.log(this.profile)
    // console.log(this.userProfile)
  //API request
  //Setup data
  console.log("ngOnInit");
  this.timer=setInterval(function(){console.log("hello"),1000})
  }
  ngOnDestroy(){
   clearInterval(this.timer)
   console.log("ngDestroy");
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked");
  }
  ngAfterContentInit(){
    console.log("AfterContentInit");
  }
  ngAfterViewChecked(){
    console.log("AfterViewdChecked");
  }
  ngAfterViewInit(){
    console.log("AfterViewInit");
  }
logoutUser(){
  // this.logout.emit();
  this.logout.emit("random text");
}
}
