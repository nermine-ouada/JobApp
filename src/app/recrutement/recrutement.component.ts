import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RecrutementsService } from '../recrutements/recrutements.service';
import { Profile } from '../types/types';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.scss']
})
export class RecrutementComponent implements OnInit {
  @Input() recrutement: Profile = {} as Profile;
  @Output() updateRecrutementsList = new EventEmitter<null>();

  constructor(private recrutementsService: RecrutementsService, private router: Router) {

  }
ngOnInit(): void {
  
}
  deleteRecrutements() {
    this.recrutementsService.deleteRecrument(this.recrutement.id).subscribe(
      data => {
        this.updateRecrutementsList.emit();
        
      }
    );
  }




}
