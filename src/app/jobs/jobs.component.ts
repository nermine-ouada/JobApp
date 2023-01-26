import { Component, OnInit } from '@angular/core';
import { Job } from '../types/types';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent  implements OnInit {
  constructor(private jobsService:JobsService){}
   ngOnInit(): void {
     this.getJobList()
   }
     jobs:Job[]=[];
   
     
   
   getJobList(){
   
     this.jobsService.getJobs().subscribe((jobs: any) => { this.jobs = jobs; })
   }

  applications(event: Job) {
    console.log(event)
  }



}
