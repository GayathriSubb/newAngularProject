import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'edureka-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
  @Input() profiles = [];

  @Output() profileselected : EventEmitter<any> = new EventEmitter();
  @Output() deleteuser : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  selectuser(profile)
    {
        this.profileselected.emit(profile)
    }

    deleteUser(profile){
        this.deleteuser.emit(profile)
    }
}
