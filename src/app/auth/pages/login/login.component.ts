import { UserLogin } from './../../../interfaces/auth.intreface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `.container{
      padding: 10px
    }
    `
  ],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  userLogin : UserLogin = {
    email: '',
    password: ''
  }

  login() {

    // if ( this.userLogin.email.trim().length <= 0){
    //   return
    // }
    // if ( this.userLogin.password.trim().length <= 0){
    //   return
    // }
    this.authService.login().subscribe((resp) =>{
      if(resp.user){
          this.router.navigate(['./location']);

        }
    })
  }
}
