import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobComponent } from '../job/job.component';
import { JobsService } from './jobs.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[],
  providers:[JobsService]
})
export class JobsModule { }
