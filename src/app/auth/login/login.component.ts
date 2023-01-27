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

  form: LoginForm = {
    email: '',
    password: '',
    App:false,
    Rec:false

  };

  constructor(private authService: AuthService, private router: Router) { }
  isApplicant: boolean = false
  isRecruter: boolean = false

  submit() {

    this.authService.login(this.form);
  }
  Applicant() {
    this.form.App=true;
this.form.Rec=false
  }

  Recruter() {
    this.form.App=false;
    this.form.Rec=true;
  }

}
