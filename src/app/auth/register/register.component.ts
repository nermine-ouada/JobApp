import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
    App:false,
    Rec:false
  };
  constructor(private authService:AuthService, private router:Router) { }

  submit() {
  
  this.authService.register(this.form);

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
