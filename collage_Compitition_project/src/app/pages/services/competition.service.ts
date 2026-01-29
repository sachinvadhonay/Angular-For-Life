import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../constant/constant';
import { CompetitionModel, Project } from '../../model/compitition.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }

  getCompetition():Observable<CompetitionModel[]>{
    return this.http.get<CompetitionModel[]>(Constant.API_URL+"GetAllCompetition")
  }


   getCompetitionById(id:number):Observable<CompetitionModel[]>{
    return this.http.get<CompetitionModel[]>(Constant.API_URL+"Competition/"+id)
  }

  createCompetition(obj:CompetitionModel)
  {
    return this.http.post(Constant.API_URL+"competition",obj)
  }

  submitproject(obj:Project)
  {
    return this.http.post(Constant.API_URL+"project",obj)
  }
}
