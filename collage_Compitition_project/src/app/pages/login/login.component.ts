import { Component, inject } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    loginForm: FormGroup = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
      
    });

    userServices = inject(UserService)
    router = inject(Router)

    onlogin()
    {
      const formValue = this.loginForm.value; 
      this.userServices.onUserLogin(formValue).subscribe({
        next:(res:any)=>{
          localStorage.setItem("studentId", res.userId)
          localStorage.setItem("loggedUser",JSON.stringify(res))
          this.router.navigateByUrl("/home");
          this.userServices.loggedUserId = res.userId;
          this.userServices.loggedUserData = res;
          alert("Login Sucessfull")
        },  
        error:()=>{
          alert("wrong Credentials")
        }
      })
    }

}
