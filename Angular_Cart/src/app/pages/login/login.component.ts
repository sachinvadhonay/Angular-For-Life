import { Component, inject } from '@angular/core';
import { LoginModel } from '../../model/Login';
import { AuthService } from '../../service/auth.service';
import { Router,RouterModule  } from '@angular/router';
import { APIResposneModel } from '../../model/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 loginData: LoginModel = {
    UserName: '',
    UserPassword: ''
};

private authService = inject(AuthService);
private router = inject(Router);

login(): void {
    this.authService.login(this.loginData).subscribe({next: (res: APIResposneModel) => {
        if (res.result) {
           this.authService.setLogin(res.data.name)
           localStorage.setItem('userName', res.data.name);
           localStorage.setItem('custId',res.data.custId.toString())
          this.router.navigate(['/home']);
        } 
        else {
          alert(res.message);
        }
      },
      error: () => alert('Login failed')
    });
  }
} 