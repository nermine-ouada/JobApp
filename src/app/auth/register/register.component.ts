import { Component } from '@angular/core';
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
    confirm_password: ''
  };
  constructor(private authService:AuthService) { }

  submit() {
  
  this.authService.register(this.form);
}

  isApplicant:boolean=false;
  applicant(){
    this.isApplicant=true;
    
  }
  recruter(){
    this.isApplicant=false;
  }
}
