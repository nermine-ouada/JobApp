import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job, Profile  } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class RecrutementsService {
  baseUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getRecruments() {
    return this.http.get(this.baseUrl + 'my_recrutements');
  }

  addRecruments(profile: Profile) {
    return this.http.post(this.baseUrl + 'my_recrutements', profile);

  }
  
  deleteRecrument(id: number) {
    return this.http.delete(this.baseUrl + 'my_recrutements/' +id );
  }
  
}
