import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalService } from '../../service/goal.service';
import { IGoalList } from '../../model/User';
import { DatePipe } from '@angular/common';
import { elementAt, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-goal-list',
  imports: [DatePipe],
  templateUrl: './goal-list.component.html',
  styleUrl: './goal-list.component.css'
})
export class GoalListComponent implements OnInit, OnDestroy{

ngOnInit(): void {
    this.getAllGoalsCreatedByMe();
}

router = inject(Router);
goalsrv = inject(GoalService);
// interface
goalList:IGoalList[] =[];
subscriptionList : Subscription[]=[]


navigateToNewgoal(){
  this.router.navigateByUrl("/new-goal")
}

getAllGoalsCreatedByMe(){
 const newSub = this.goalsrv.getallgoalBYuser(this.goalsrv.loggedUserData.userId).subscribe((res:any)=>{
 this.goalList = res;
  })
}
ngOnDestroy(): void {
   this.subscriptionList.forEach(element => {
    element.unsubscribe();
   });
}
}
