import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  loggedUserData: any;

  constructor(private http: HttpClient) { 
const localData = localStorage.getItem("golUser");
    if (localData) {
      const loggedData = JSON.parse(localData);
      this.loggedUserData = loggedData
    }

  }

  saveGoal(obj:any){
    return this.http.post("https://api.freeprojectapi.com/api/GoalTracker/createGoalWithMilestones",obj)
  }
  getallgoalBYuser(userId: number){
    return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllGoalsByUser?userId="+userId)
  }
}
