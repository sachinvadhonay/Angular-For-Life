import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notetaking-angular';
  
  constructor(private router:Router)
  {

  }
  shouldShowNavbar(): boolean {
    return !this.router.url.startsWith('/login')
        && !this.router.url.startsWith('/register');
  }
}

