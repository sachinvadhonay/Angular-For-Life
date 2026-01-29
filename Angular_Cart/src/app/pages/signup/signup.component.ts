import { Component, inject } from '@angular/core';
import { Customer } from '../../model/customer';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { APIResposneModel } from '../../model/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  
  customer: Customer = {
    CustId: 0,
    Name: '',
    MobileNo: '',
    Password: ''
  };
   private authService = inject(AuthService);
  private router = inject(Router);

   signup(): void {
    this.authService.signup(this.customer).subscribe({next: (res: APIResposneModel) => {
        if (res.result) {
          alert('Signup successful');
          this.router.navigate(['/login']);
        } else {
          alert(res.message);
        }
      },
      error: () => alert('Signup failed')
    });
  }
}