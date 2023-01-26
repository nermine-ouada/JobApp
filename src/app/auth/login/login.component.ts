import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form:LoginForm={
    email:'',
    password:'',

  };

  constructor(private authService:AuthService, private router:Router ) {}


submit(){
  
  this.authService.login(this.form);
  }


isApplicant:boolean=false;
applicant(){
  this.isApplicant=true;
  
}
recruter(){
  this.isApplicant=false;
}

}
