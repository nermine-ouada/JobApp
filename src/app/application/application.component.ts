import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationsService } from '../applications/applications.service';
import { Job } from '../types/types';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  @Input() application: Job = {} as Job;
  @Output() updateApplicationList = new EventEmitter<null>();

  constructor(private applicationsService: ApplicationsService, private router: Router) {

  }
  deleteApplication() {
    this.applicationsService.deleteApplication(this.application.id).subscribe(
      data => {
        this.updateApplicationList.emit();
      }
    );
  }

}
