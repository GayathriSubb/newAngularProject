import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'edureka-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private profile : ProfileService) { }

  ngOnInit(): void {
  }

  addUserProfile(profile)
  {
      this.profile.addUserProfile(profile)
  }
}
