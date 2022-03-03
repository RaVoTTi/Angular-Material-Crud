import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/interfaces/auth.intreface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  mat-sidenav{
    width: 200px
  }
  .container {
    padding: 10px
  }
  `
  ]
})
export class HomeComponent{
  get user() :User {
    return this.authService.user!
  }

  constructor(private router:Router, private authService:AuthService) {
   }


  logout(){
    this.router.navigate(['./auth'])

  }

}
