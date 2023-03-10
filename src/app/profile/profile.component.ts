import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ProfilesService } from '../profiles/profiles.service';
import { RecrutementsService } from '../recrutements/recrutements.service';
import { Profile } from '../types/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() profile:Profile={} as Profile;
  @Output()updateProfileList=new EventEmitter<null>();
  
  constructor(private authservice:AuthService, private profileService:ProfilesService, private router:Router, private recrutementsService:RecrutementsService, private authService: AuthService){
  
  }
recrutement(){
  this.recrutementsService.addRecruments(this.profile).subscribe();
}
  updateProfile(){
    this.router.navigate(['profileform'],{queryParams:{ id:this.profile.id}})
    this.profileService.updateProfile(this.profile)  }

  deleteProfile(){
    this.profileService.deleteProfile(this.profile.id).subscribe(
    data => {
      this.updateProfileList.emit();
    }
  );
  
 
  } 
login(){
  this.router.navigate(["login"]);
}

  isApplicant() {
    return this.authService.isApplicant;
  }
  isRecruter() {
    return this.authService.isRecruter;

  }
  
  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
