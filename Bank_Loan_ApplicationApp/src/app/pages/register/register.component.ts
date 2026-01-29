import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerObj: any={

 "userId":0,
  "userName": " ",
  "emailId": " ",
  "fullName": " ",
  "password": " "
 
  };

  http = inject(HttpClient)

 onRegister() {
   
   this.http.post("/api/BankLoan/RegisterCustomer",this.registerObj).subscribe((res:any) => {
    if (res.result) {
      alert("Customer Registeted Success");
      
    }  
    
     else {
        alert(res.message);
      }
  });
}


}
