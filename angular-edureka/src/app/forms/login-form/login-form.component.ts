import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'edureka-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form = {
    email: "",
    password: ""
  }

  constructor(private account: AccountService) { }

  ngOnInit(): void {
  }

  login(form) {
    this.account.login(form.value);
  }

}
