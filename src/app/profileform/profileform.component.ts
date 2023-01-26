import { Component, Input } from '@angular/core';
import { Profile, ProfileForm } from '../types/types';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.scss']
})
export class ProfileformComponent {


  @Input() profile: Profile = {} as Profile;
  form: ProfileForm = {
    name: '',
    age: '',
    degree: '',
    email: '',
    resume: ''


  };
  
  addProfile() {

  }
}
