import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Job } from '../types/types';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
@Input() job:Job={} as Job;
@Output()jobEmitter=new EventEmitter<Job>();

constructor(private authservice:AuthService){

}
isApplicant(){
  return true
}
applications(){
  this.jobEmitter.emit(this.job);
}
}
