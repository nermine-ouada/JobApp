import { Component, OnInit } from '@angular/core';
import {  Job } from '../types/types';
import { ApplicationsService } from './applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit{
 

  constructor(private applicationsService: ApplicationsService) { }
  ngOnInit(): void {
    this.getApplicationsList()
  }
  applications: Job [] = [];


  getApplicationsList() {

    this.applicationsService.getApplications().subscribe((applications: any) => { this.applications = this.applications; });
    
  }



}
