import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { SimpleResponse } from '../../model/simple-response.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {
    username: '',
    email: '',
    password: '',
    role: 'User'
  };

 private authService = inject(AuthService);
 private router = inject(Router);



 register(): void{
  this.authService.register(this.user).subscribe(
    {
      next:(res: SimpleResponse) => {
        alert(res.message);
        this.router.navigate(['/login']);
      },

      error: (err) => {
      console.error('Register error:', err);

      if (err.error && typeof err.error === 'string') {
        alert(err.error);
      }
      else if (err.error?.message) {
        alert(err.error.message);
      }
      else {
        alert('Registration failed. Please try again.');
      }
      }
    });
  

}

 
}