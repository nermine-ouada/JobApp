import { Component } from '@angular/core';
import { Job } from '../types/types';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {


  jobs:Job[]=[
 {   
job: 'developper',
company:'ELYADATA',
field:'IT',
logo:''
},
{   
  job: 'developper',
  company:'ELYADATA',
  field:'IT',
  
logo:''
},
{   
  job: 'developper',
  company:'ELYADATA',
  field:'IT',
  logo:''},
  {   
    job: 'developper',
    company:'ELYADATA',
    field:'IT',
    logo:''
    }
  
]
applications(event:Job){
  console.log(event)
}



}
