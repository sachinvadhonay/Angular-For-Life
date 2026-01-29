import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentsComponent } from './pages/students/students.component';
import { SubmitprojectComponent } from './pages/submitproject/submitproject.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { AboutComponent } from './pages/about/about.component';

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
        path:'register',
        component:RegisterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'students',
        component:StudentsComponent
    },
    {
        path:'submitproject/:id',
        component:SubmitprojectComponent
    },
    {
        path:'all-project',
        component:ProjectsComponent
    },
    {
        path:'competition',
        component:CompetitionComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
];
