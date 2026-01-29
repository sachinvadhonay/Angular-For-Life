import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = {

    email:'',
    password:''
  };

  private authService = inject(AuthService);
  private router = inject(Router);


  login(): void{

    this.authService.login(this.credentials).subscribe({
      next:(res)=>{

        localStorage.setItem('token',res.token);
        localStorage.setItem('role',res.role);
        localStorage.setItem('username',res.username);

        if(res.role === 'Admin')
        {
          this.router.navigate(['/admin-notes']);
        }
        else
        {
          this.router.navigate(['/notes']);
        }

      },
       error: (err) => {
        alert(err?.error.message || 'Invalid email or password');
      }

    })
  }
}
