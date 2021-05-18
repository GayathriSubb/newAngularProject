import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'edureka-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.css']
})
export class AddNewProfileComponent implements OnInit {

  @Output() adduserprofile: EventEmitter<any> = new EventEmitter();

  user = {
    name: "",
    address: "",
    picture: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  addUserProfile() {
      this.adduserprofile.emit(this.user)
  }

}
