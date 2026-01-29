import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CompetitionModel, Project } from '../../model/compitition.model';
import { CompetitionService } from '../services/competition.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-submitproject',
  imports: [CommonModule,FormsModule],
  templateUrl: './submitproject.component.html',
  styleUrl: './submitproject.component.css'
})
export class SubmitprojectComponent {

  curretCompetitionId: number = 0;
  srv = inject(CompetitionService)
  Usersrv = inject(UserService);
  competitionData: CompetitionModel = new CompetitionModel();
  projectObj: Project = new Project();



  constructor(private activatecRoute: ActivatedRoute) {
    this.activatecRoute.params.subscribe((result:any) => {
      this.curretCompetitionId = result.id;
      this.getCompetitionById();
    })
  }

  getCompetitionById(){
    this.srv.getCompetitionById(this.curretCompetitionId).subscribe({
      next:(res)=>{
         this.competitionData = res[0];
      }
    })
  }

  onSave(){
     
    this.projectObj.userId = Number(this.Usersrv.loggedUserId);
    this.projectObj.competitionId = this.curretCompetitionId;
 
    this.srv.submitproject(this.projectObj).subscribe({
      next:()=>{
      alert("submittion sucessfully")
      },
      error:()=>{
        
      }
    })
  }
}
