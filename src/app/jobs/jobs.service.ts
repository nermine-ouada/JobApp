import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job, JobForm } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  baseUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get(this.baseUrl + 'job');
  }

  addJob(job: JobForm) {
    return this.http.post(this.baseUrl + 'job', job);

  }
  updateJob(job:Job){
    return this.http.put(this.baseUrl + 'job/'+ job.id, job);
  }
  deleteJob(id: number) {
    return this.http.delete(this.baseUrl + 'job/' +id );
  }
}
