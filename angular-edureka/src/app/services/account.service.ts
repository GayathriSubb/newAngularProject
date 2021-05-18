import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import IRegisterResponse from '../Interfaces/register-response'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient, private router:Router) { }

    // login({ username, password })
    //   {
    //       this.http.post("http://localhost:3000/login", { username, password }).subscribe((response)=>{
    //           console.log(response);
    //       })
    //   }
      // register({ email, username, password }) {
      //   this.http.post("http://localhost:3000/register", { username, password, email }).subscribe((response) => {
      //     console.log(response);
      //   })
      // }
      login({ email, password }) {
        this.http.post("http://localhost:3000/login", { email, password }).subscribe((response: IRegisterResponse) => {
          window.localStorage.setItem("access-token", response.accessToken);
          this.router.navigate([""])
        })
      }
    
      register({ email, username, password }) {
        this.http.post("http://localhost:3000/register", { username, password, email }).subscribe((response : IRegisterResponse) => {
         window.localStorage.setItem("access-token",response.accessToken)
         this.router.navigate([""])
        })
      }
}