import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Profile, ProfileForm } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  baseUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient,private router:Router) { }

  getProfiles() {
    return this.http.get(this.baseUrl + 'profile');
  }

  addProfile(profile: ProfileForm) {
    return this.http.post(this.baseUrl + 'profile', profile);

  }
  updateProfile(profile:Profile)
  {
    return this.http.put(this.baseUrl + 'profile/'+ profile.id, profile);
    
  }
  deleteProfile(id: number) {
    return this.http.delete(this.baseUrl + 'profile/' +id );
  }
  
  getProfileById(id: number) {
    return this.http.get(this.baseUrl+'profile/'+id)
  }

}
