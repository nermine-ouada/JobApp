import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean = false;
 
  constructor(private authService: AuthService, private router:Router ) { }
  ngOnInit(): void {

/* this.router.navigate(['home'])*/
      this.isLoggedIn = localStorage.getItem('user') ? true : false;
      initializeApp(firebaseConfig);
}
  
  isAuthenticated() {
      return this.authService.isAuthenticated;
  }
  isShowing:boolean=false;
show(){
  this.isShowing=!this.isShowing;
}
  logout() {
      this.isLoggedIn = false;
      this.authService.logout();
  }
}
