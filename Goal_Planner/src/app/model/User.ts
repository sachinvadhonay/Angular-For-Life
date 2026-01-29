export class LoginUser {
     emailId: string;
     password: string;

     constructor(){
        this.emailId='';
        this.password='';
     }
     
}

export interface IGoalList {
  goalId: number;
  goalName: string;
  description: string;
  startDate: string;
  endDate: string;
  isAchieved: boolean;
  userId: number;
}
