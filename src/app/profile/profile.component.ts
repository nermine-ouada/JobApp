import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Profile } from '../types/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() profile:Profile={} as Profile;
  @Output()profileEmitter=new EventEmitter<Profile>();
  
  constructor(private authservice:AuthService){
  
  }
  isRecruter(){
    return true
  }
  recrutement(){
    this.profileEmitter.emit(this.profile);
  }
}
