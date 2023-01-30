import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationsService } from '../applications/applications.service';
import { AuthService } from '../auth/auth.service';
import { JobsService } from '../jobs/jobs.service';
import { Job } from '../types/types';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
@Input() job:Job={} as Job;
@Output()updateJobList=new EventEmitter<null>();
  
constructor(private authservice:AuthService, private jobsService:JobsService, private router:Router, private applicationsService: ApplicationsService){

}
isRecruter(){
  return this.authservice.isRecruter
}
application(){
  this.applicationsService.addApplications(this.job).subscribe();
  this.updateJobList.emit();
  
}
updateJob(){
  this.router.navigate(['jobform'],{queryParams:{ id:this.job.id}})
  this.jobsService.updateJob(this.job)  }

deleteJob(){
  this.jobsService.deleteJob(this.job.id).subscribe(
  data => {
    this.updateJobList.emit();
  }
);


}
}
