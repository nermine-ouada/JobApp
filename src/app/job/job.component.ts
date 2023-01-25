import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../types/types';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
@Input() job:Job={} as Job;
@Output()jobEmitter=new EventEmitter<Job>();

applications(){
  this.jobEmitter.emit(this.job);
}
}
