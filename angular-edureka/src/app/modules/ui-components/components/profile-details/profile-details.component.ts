import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import {map}from 'rxjs/operators'
@Component({
  selector: 'edureka-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private profile : ProfileService) { }
selectedProfile=null;

// Observables Demo

    // const obOfArray = of([1, 2, 4])
    // obOfArray
    
    // .subscribe((value)=>{
    //   console.log(value, "value");
    // })

    // const obFromArray = from(["1", "2", "3"])
    // .pipe(find(()=>{
    //   return true;
    // }))
    // obFromArray.subscribe((value)=>{
    //   console.log(value);
    // })

    // interval(1000).subscribe(()=>{
    //     console.log("dasdjahsdhasjkda")
    // })
  ngOnInit(): void {
    // this.profile.userProfileSelected.subscribe((profile)=>{
    // this.selectedProfile=profile;
    // console.log(this.selectedProfile);
    // })
    this.profile.userProfileSelected

      // .toPromise().then((profile) => {
      //   this.selectedProfile = profile;
      //   console.log(this.selectedProfile, "selectedProfile");
      // })
      .pipe(map((profile) => {
        if (profile) {
          profile.address = profile.address.toUpperCase();
        }
        return profile
      }), map((profile) => {
        if (profile) {
          console.log(profile.address);
        }
        return profile
      }))
      .subscribe((profile) => {
        this.selectedProfile = profile;
        console.log(this.selectedProfile, "selectedProfile");
      })

  }

}
