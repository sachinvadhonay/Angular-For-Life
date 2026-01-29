import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GoalService } from '../../service/goal.service';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule,AsyncPipe,DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  newTask: any = {
  "taskId": 0,
  "taskName": "",
  "description": "",
  "frequency": "",
  "createdDate": new Date(),
  "dueDate": "",
  "isCompleted": false,
  "userId": 0
};

 @ViewChild("modal") modal!: ElementRef;

 goalService = inject(GoalService);
 taskService = inject(TaskService);
 taskList$:Observable<any[]>= new Observable<any[]>();

 constructor() {
  this.newTask.userId = this.goalService.loggedUserData.userId;
  this.taskList$ = this.taskService.getTaskByUser(this.newTask.userId)
}

 

openModal() {
  if (this.modal) {
    this.modal.nativeElement.style.display = "block";
  }
}

closeModal() {
  if (this.modal) {
    this.modal.nativeElement.style.display = "none";
  }
}


onSavetask(){
 this.taskService.createTask(this.newTask).subscribe((res:any)=>{
  alert("Task created")
  this.closeModal();
  this. newTask = {
        "taskId": 0,
        "taskName": "",
        "description": "",
        "frequency": "",
        "createdDate": new Date(),
        "dueDate": "",
        "isCompleted": false,
        "userId": 0
    };
    this.newTask.userId = this.goalService.loggedUserData.userId;
 })
}

}
