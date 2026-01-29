import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

registerObj: any ={
  "fullName": "",
  "email": "",
  "password": "",
  "collegeName": "",
  "role": "Graduate"
};
http = inject(HttpClient)

onRgister(){
  
  this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/register",this.registerObj).subscribe((res:any)=>{
  
    alert("Register Sucessfull")
  })
}

}
