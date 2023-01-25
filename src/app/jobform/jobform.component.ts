import { Component, Input } from '@angular/core';
import { from } from 'rxjs';
import { Job, JobForm } from '../types/types';

@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.scss']
})
export class JobformComponent {
  @Input() job: Job = {} as Job;
  form: JobForm = {
    job: '',
    company: '',
    field: '',
    logo: '',
    description: ''


  };
  
  addJob() {

  }
}
