import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isApplicant:boolean=false;
  isRecruter:boolean=false;
  constructor(private router: Router) { }

  login(form: LoginForm) {


    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        
        localStorage.setItem('user', JSON.stringify(userCredential))
        if(form.App==true){
           this.router.navigate(['jobs']);
           this.isAuthenticated = true;

           this.isApplicant=true;
           this.isRecruter=false;
 
        }
        if(form.Rec==true){
          this.router.navigate(['profiles']);
          this.isAuthenticated = true;

          this.isApplicant=false;
           this.isRecruter=true;
        }
        if(form.App==form.Rec){
          alert('choose recruter or applicant');
          this.isAuthenticated = false;

         }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert('unseccsseful login')
      })
  }

  passwordMatched: boolean = true;
  register(form: RegisterForm) {


    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        localStorage.setItem('user', JSON.stringify(userCredential))
         if(form.App==true){
          this.router.navigate(['jobs']);
          this.isAuthenticated = true; 
          this.isApplicant=true;
           this.isRecruter=false; 
       }
       if(form.Rec==true){
         this.router.navigate(['profiles']);
         this.isAuthenticated = true;
         this.isApplicant=false;
           this.isRecruter=true;
       }
       if(form.App==form.Rec){
        alert('choose recruter or applicant')
        this.isAuthenticated = false;


       }

      })
      .catch((error) => {
        this.isAuthenticated = false;

        alert('unseccsseful register')
        const errorCode = error.code;
        const errorMessage = error.message;

      })
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['/home']);
        this.isAuthenticated = false;
        localStorage.removeItem('user');
      })
      .catch((error) => {
        // An error happened.
      });
  }
 
  
}