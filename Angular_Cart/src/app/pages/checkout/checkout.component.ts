import { Component, OnInit,inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';
import { Order } from '../../model/order';

@Component({
  selector: 'app-checkout',
   standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

totalAmount = 0;

  order: Order = {
    SaleId: 0,
    CustId: 0,
    SaleDate: new Date().toISOString(),
    TotalInvoiceAmount: 0,
    Discount: 0,
    PaymentNaration: 'Online Payment',
    DeliveryAddress1: '',
    DeliveryAddress2: '',
    DeliveryCity: '',
    DeliveryPinCode: '',
    DeliveryLandMark: '',
    IsCanceled: false
  };

   private cartservice = inject(CartService);
   private router = inject(Router);

  ngOnInit(): void {
     this.totalAmount = Number(localStorage.getItem('cartTotal'));
    this.order.CustId = Number(localStorage.getItem('custId'));
    this.order.TotalInvoiceAmount = this.totalAmount;
  }

  placeOrder(): void {
    this.cartservice.placeOrder(this.order).subscribe(res => {
      if (res.result) {
        alert('Order placed successfully');

        // clear cart
        localStorage.removeItem('cartCount');

        
        this.cartservice.updateCartCount(0);
        // redirect
        this.router.navigate(['/home']);
      } else {
        alert(res.message);
      }
    });
  }


 
}
