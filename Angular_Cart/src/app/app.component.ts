import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName: string | null = '';
  isLoggedIn = false;
  cartCount: number = 0;

  constructor(
    private auth: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  // ✅ ONLY ONE ngOnInit
  ngOnInit(): void {

    // 🔹 auth state
    this.auth.loginState$.subscribe(val => {
      this.isLoggedIn = val;
      this.userName = localStorage.getItem('userName');
    });

    // 🔹 cart count initial
    this.cartCount = Number(localStorage.getItem('cartCount') || 0);

    // 🔹 cart count live update
    this.cartService.cartCount$.subscribe((count: number) => {
      this.cartCount = count;
    });
  }

  // ✅ LOGOUT
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  // ✅ CART NAVIGATION
  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  goHome(): void{
    this.router.navigate(['/home'])
  }
  
}
