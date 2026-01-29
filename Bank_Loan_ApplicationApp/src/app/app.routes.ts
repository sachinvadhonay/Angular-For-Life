import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BankerListComponent } from './pages/banker-list/banker-list.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { LoanApplicationlistComponent } from './pages/loan-applicationlist/loan-applicationlist.component';
import { NewLoanFormComponent } from './pages/new-loan-form/new-loan-form.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [


    {
        path:'',
        redirectTo:"login",
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },

    {
        path:'bankerList',
        component:BankerListComponent
    },
    {
        path:'customerList',
        component:CustomerListComponent
    },
    {

        path:'application-list',
        component:LoanApplicationlistComponent
    },
    {
        path:'new-loan',
        component:NewLoanFormComponent
    },
    {
        path:'register',
        component:RegisterComponent
    }



];
