import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProfilesService } from '../profiles/profiles.service';
import { Profile, ProfileForm } from '../types/types';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.scss']
})
export class ProfileformComponent {


  @Input() profile: Profile = {} as Profile;
  constructor(private route:ActivatedRoute, private router:Router,private profileService:ProfilesService){}
  form: ProfileForm = {
    name: '',
    age: '',
    degree: '',
    email: '',
    resume: ''


  };
  updateMode: boolean = false;
  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if(param['id']) {
        this.profileService.getProfileById(parseInt(param['id'])).subscribe((profile: any) => {
        this.profile = profile;
        this.form = profile;
        this.updateMode = true; })
      }
      
     
    })
  }

updateProfile(){
  this.form= this.profile;
  this.profileService.updateProfile(this.profile).subscribe()
  this.router.navigate(['profiles'])
  

}

  addProfile(){
    if(this.updateMode) {
      this.updateProfile();
    } else {
      this.profileService.addProfile(this.form).subscribe();
     
    }
    this.router.navigate(['profiles']);
  }
}
