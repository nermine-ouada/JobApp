import { Component } from '@angular/core';
import { Profile } from '../types/types';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent /* implements OnInit*/ {
  /* constructor(private profilesService:ProfilesService){}
   ngOnInit(): void {
     this.getProfileList()
   }
     profiles:Profile[]=[];
   
     
   
   getProfileList(){
   
     this.ProfilesService.getProfiles().subscribe((profiles: any) => { this.profiless = profiles; })
   }*/
  profiles: Profile[] = [
    {
      id:1,
  name:'name1',
  age:'25',
  degree:'degree1',
  email:'email1',
  resume:'resume1'
    },
    {
      id: 2,
      name:'name1',
  age:'25',
  degree:'degree1',
  email:'email1',
  resume:'resume1'
    },
    {
      id: 3,
      name:'name1',
      age:'25',
      degree:'degree1',
      email:'email1',
      resume:'resume1'
    },
    {
      id: 4,
      name:'name1',
      age:'25',
      degree:'degree1',
      email:'email1',
      resume:'resume1'
    }

  ]


  recrutement(event: Profile) {
    console.log(event)
  }



}
