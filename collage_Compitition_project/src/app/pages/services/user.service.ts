import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   loggedUserId : string ="";
   loggedUserData : any = undefined;

  constructor(private http: HttpClient) { 
    const loggedData = localStorage.getItem("studentId");
    const loggedUserData = localStorage.getItem("loggedUser")
    if(loggedData != null && loggedUserData != null)
    {
      this.loggedUserId = loggedData;
      this.loggedUserData = JSON.parse(loggedUserData)
    }

  }


  onUserLogin(obj:any){

    return this.http.post(Constant.API_URL+"login",obj)
  }



  isUser(): boolean {
    return this.loggedUserId !== "";
  }

  isAdmin(): boolean {
    return this.loggedUserData?.role === 'admin';
  }

   
}
