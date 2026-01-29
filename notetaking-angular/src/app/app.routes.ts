import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AdminNotesComponent } from './pages/admin-notes/admin-notes.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },

       { 
        path: 'register',
         component: RegisterComponent 
        },

        {
            path:'login', 
            component:LoginComponent
        },
        {
            path: 'notes', 
            component: NotesComponent,
            canActivate:[authGuard],
            data:{roles:['User','Admin']}
        },
    
     {
        path:'admin-notes',
        component:AdminNotesComponent,
        canActivate:[authGuard],
            data:{roles:['Admin']}
     }
     
];
