import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

username:string | null='';
role:string| null='';

constructor(private router: Router) {
    this.username = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
  }


  Logout():void{

    localStorage.clear();
    this.router.navigate(['/login'])

  }
}
