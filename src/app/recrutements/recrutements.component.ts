import { Component, OnInit } from '@angular/core';
import { Profile } from '../types/types';
import { RecrutementsService } from './recrutements.service';

@Component({
  selector: 'app-recrutements',
  templateUrl: './recrutements.component.html',
  styleUrls: ['./recrutements.component.scss']
})
export class RecrutementsComponent implements OnInit {
  constructor(private recrutementsService: RecrutementsService) { }
  ngOnInit(): void {
    
    this.  getRecrutementList() 
  }
  recrutements: Profile[] = [];



  getRecrutementList() {

    this.recrutementsService.getRecruments().subscribe((recrutements: any) => { this.recrutements= recrutements; });

  }
}