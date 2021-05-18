import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
import { AccountService } from 'src/app/services/account.service';
import { CompareValidator } from '../validators/compare';
import { ProdaptEmail } from '../validators/prodapt-email';
@Component({
  selector: 'edureka-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(8)]),
    email: new FormControl("", [Validators.required, ProdaptEmail]),
    // email : new FormControl("", [Validators.required, Validators.pattern(/[a-z]@prodapt.com/)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    dept: new FormControl("", [Validators.required]),
    otherDept: new FormControl("", [Validators.required])

  }, [CompareValidator("password", "confirmPassword")])


  constructor(private account: AccountService) { }

  ngOnInit(): void {

    // HTTP Response
    // const user = { email : "abc@xyz.com", username : "abc" };
    // this.registerForm.setValue({ ...this.registerForm.value, email : user.email, username : user.username })
    // this.registerForm.get("username").setValue("new value");
  }

  register() {

    // const controls = Object.keys(this.registerForm.controls)
    // controls.forEach((control)=>{
    //     this.registerForm.get(control).markAsTouched()
    // })

    // console.log(this.registerForm);
    this.account.register(this.registerForm.value)
  }


  deptSelected() {
    const deptValue = this.registerForm.get("dept").value;
    console.log(deptValue);

    console.log(deptValue !== "OTHER")

    if (deptValue !== "OTHER") {
      this.registerForm.get("otherDept").clearValidators()
      this.registerForm.get("otherDept").updateValueAndValidity()
    }
    else {
      this.registerForm.get("otherDept").setValidators([Validators.required]);
      this.registerForm.get("otherDept").updateValueAndValidity()
    }
    this.registerForm.updateValueAndValidity();
  }

  get email() {
    return this.registerForm.get("email");
  }

  get username() {
    return this.registerForm.get("username");
  }

  get password() {
    return this.registerForm.get("password");
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword");
  }

}