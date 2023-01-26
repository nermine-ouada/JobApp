import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { JobsService } from '../jobs/jobs.service';
import { ProfilesService } from '../profiles/profiles.service';
import { Job, JobForm } from '../types/types';

@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.scss']
})
export class JobformComponent {


  @Input() job: Job = {} as Job;
  constructor(private route: ActivatedRoute, private router: Router, private jobsService: JobsService) { } form: JobForm = {
    job: '',
    company: '',
    field: '',
    logo: '',
    description: ''


  };


  updateMode: boolean = false;
  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if (param['id']) {
        this.jobsService.getJobById(parseInt(param['id'])).subscribe((job: any) => {
          this.job = job;
          this.form = job;
          this.updateMode = true;
        })
      }


    })
  }

  updateJob() {
    this.form = this.job;
    this.jobsService.updateJob(this.job).subscribe()
    this.router.navigate(['jobs'])


  }

  addJob() {
    if (this.updateMode) {
      this.updateJob();
    } else {
      this.jobsService.addJob(this.form).subscribe();

    }
    this.router.navigate(['jobs']);
  }
}
