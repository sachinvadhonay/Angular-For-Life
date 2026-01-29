import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { CartItem } from '../../model/cart-item';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';
import { APIResposneModel } from '../../model/Product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}
  private router = inject(Router);
  ngOnInit(): void {
    const custId = Number(localStorage.getItem('custId'));
     this.loadCart(custId);
  }

  loadCart(custId:number): void
  {
      this.cartService.getCartProductsByCustomer(custId).subscribe(res=>{
        this.cartItems = res.data as CartItem[];
        this.calculateTotal();
      })
  }

  calculateTotal():void{
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.productPrice * item.quantity,0
    );
  }

  removeItem(item: any): void {
  this.cartService.removeCartItem(item.cartId).subscribe({next: (res) => {
      if (res.result) {
        this.cartItems = this.cartItems.filter(
          x => x.cartId !== item.cartId
        );

      
        this.calculateTotal();

         
        const newCount = this.cartItems.length;
        localStorage.setItem('cartCount', newCount.toString());

       
        this.cartService.updateCartCount(newCount);
      }
    },
    error: (err) => {
      console.error('Delete failed', err);
      alert('Failed to remove item');
    }
  });



  
}
    
   proceedToCheckout(): void {
  localStorage.setItem('cartTotal', this.totalAmount.toString());
  this.router.navigate(['/checkout']);
}

}
