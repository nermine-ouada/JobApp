import { Component, OnInit } from '@angular/core';
import { Profile } from '../types/types';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent  implements OnInit {
  constructor(private profilesService:ProfilesService){}
   ngOnInit(): void {
     this.getProfileList()
   }
     profiles:Profile[]=[];
   
     
   
   getProfileList(){
   
     this.profilesService.getProfiles().subscribe((profiles: any) => { this.profiles = profiles; })
   }
 
  recrutement(event: Profile) {
    console.log(event)
  }



}
