import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'edureka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-edureka';
 
  userprofiles = [];

  constructor(private profiles: ProfileService) {

  }

  ngOnInit() {
    this.profiles.getProfiles(); 
    this.profiles.userprofiles.subscribe((response: any) => {
      this.userprofiles = response
    })
  }

  profileSelected(profile) {
    this.profiles.selectUserProfile(profile)
  }

  deleteUser(profile)
    {
      this.profiles.deleteUser(profile)
    }

}