import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfileSelected: BehaviorSubject<any> = new BehaviorSubject(null);
  userprofiles: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }



  getProfiles(limit?) {
    // return this.userprofiles.splice(0, limit);

    // CRUD
    // Create - POST
    // Read   - GET
    // Update - PATCH or PUT
    // Delete - DELETE

    return this.http.get("http://localhost:3000/profiles")
      .subscribe((response) => {
        this.userprofiles.next(response)
      })
  }

  addUserProfile(profile) {
    this.http.post("http://localhost:3000/profiles", profile)
      .toPromise().then(() => {
        this.getProfiles()
      })

    // .subscribe(()=>{
    //     this.getProfiles()
    // })
  }

  deleteUser(profile) {
    console.log(profile);
    this.http.delete(`http://localhost:3000/profiles/${profile.id}`).subscribe(() => {
      this.getProfiles()
    })
  }


  updateUser(profile) {
    console.log(profile);
    this.http.put(`http://localhost:3000/profiles/${profile.id}`, profile).subscribe(() => {
      this.getProfiles()
    })
  }

  selectUserProfile(profile) {
    this.userProfileSelected.next(profile);
  }

}

// profile = new ProfileService()