import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { initializeApp } from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean = false;
 
  constructor(private authService: AuthService ) { }
  ngOnInit(): void {

   
      this.isLoggedIn = localStorage.getItem('user') ? true : false;
      initializeApp();
}
  
  isAuthenticated() {
      return this.authService.isAuthenticated;
  }

  logout() {
      this.isLoggedIn = false;
      this.authService.logout();
  }
}
