import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GoalService } from '../../service/goal.service';

@Component({
  selector: 'app-new-goal',
  imports: [ReactiveFormsModule],
  templateUrl: './new-goal.component.html',
  styleUrl: './new-goal.component.css'
})
export class NewGoalComponent {

  goalForm: FormGroup = new FormGroup({});

  goalSrv = inject(GoalService)

   constructor(){
    this.initializeForm();
    this.createNewMilestoneForm();
    const localData = localStorage.getItem("golUser");
    if (localData) {
      const loggedData = JSON.parse(localData);
      this.goalForm.get("userId")?.setValue(loggedData.userId);
    }
   }

  initializeForm() {
    this.goalForm = new FormGroup({
      goalId: new FormControl(0),
      goalName: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      isAchieved: new FormControl(false),
      userId: new FormControl(''),
      milestones: new FormArray([])
    })
  }
      get milestoneList(): FormArray {
        return this.goalForm.get('milestones') as FormArray;
      }

    createNewMilestoneForm() {
    const newForm = new FormGroup({
    milestoneId: new FormControl(0),
    milestoneName: new FormControl(''),
    description: new FormControl(''),
    targetDate: new FormControl(''),
    isCompleted: new FormControl(false)
  });
  this.milestoneList.push(newForm)
}

onSaveGoal(){
  debugger;
  const formValue = this.goalForm.value;
  this.goalSrv.saveGoal(formValue).subscribe((res:any)=>{
    alert("goal is created")
  },error=>{
    alert(error.error)
  });
   
}

}
