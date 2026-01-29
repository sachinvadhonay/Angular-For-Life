import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { GoalListComponent } from './pages/goal-list/goal-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { RemaindersComponent } from './pages/remainders/remainders.component';
import { NewGoalComponent } from './pages/new-goal/new-goal.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'dashboard',
        component:DashboardsComponent
    },
    {
        path:'goals',
        component:GoalListComponent
    },
     {
        path:'new-goal',
        component:NewGoalComponent
    },
    {
        path:'tasks',
        component:TaskListComponent
    },
    {
        path:'remainders',
        component:RemaindersComponent
    },
    {
        path:'dashboard',
        component:DashboardsComponent
    }
];
