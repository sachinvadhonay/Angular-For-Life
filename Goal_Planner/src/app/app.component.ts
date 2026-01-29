import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginUser } from './model/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

   @ViewChild("Loginmodel") loginModel!:ElementRef

  isLoginFormVisible = signal<boolean>(true)

  registerObj:any = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
};

logginObj: LoginUser = new LoginUser();

http = inject(HttpClient);
router= inject(Router);

loggedUserData:any;

  ngOnInit(): void {
    const localData = localStorage.getItem("golUser")
    if(localData)
    {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  toggleForm(){
    this.isLoginFormVisible.set(!this.isLoginFormVisible())
  }

   openModel(){
    if(this.loginModel){
      this.loginModel.nativeElement.style.display = "block";
    }
   }

    closeModel(){
    if(this.loginModel){
      this.loginModel.nativeElement.style.display = "none";
    }
   }

   onRegister(){
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.registerObj).subscribe((res:any)=>{
      alert("Registration Sucessfull")
      this.closeModel()
    },error=>{
      alert(error.error)
    })

 
   }
    onLogin() {
       if (!this.logginObj.emailId || !this.logginObj.password) 
        {
         alert('Email and Password are required');
         return;
        }
       else
        {
            this.http.post("https://api.freeprojectapi.com/api/GoalTracker/login",this.logginObj).subscribe((res:any)=>{
            alert("Login Sucessfull")
            localStorage.setItem('golUser',JSON.stringify(res))
             this.loggedUserData = res;
             this.logginObj = 
             {
                emailId: '',
                password: ''
             };
            this.closeModel()
          },error=>{
            alert(error.error)
          })
        }
    }

    onLogOff(){
      this.loggedUserData = null;
      localStorage.removeItem("golUser")

      this.router.navigateByUrl('/home');
    }
}
