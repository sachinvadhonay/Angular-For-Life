import { Component, inject } from '@angular/core';
import { CompetitionService } from '../services/competition.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { CompetitionModel } from '../../model/compitition.model';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe,DatePipe,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  src = inject(CompetitionService);
 userservice = inject(UserService);

  competitionList$: Observable<CompetitionModel[]> = new Observable<CompetitionModel[]>

  constructor(){
    this.competitionList$ = this.src.getCompetition();

  }
}
