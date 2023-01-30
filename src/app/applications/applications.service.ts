import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job  } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  baseUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getApplications() {
    return this.http.get(this.baseUrl + 'my_applications');
  }

  addApplications(job: Job) {
    return this.http.post(this.baseUrl + 'my_applications', job);

  }
  
  deleteApplication(id: number) {
    return this.http.delete(this.baseUrl + 'my_applications/' +id );
  }


}
