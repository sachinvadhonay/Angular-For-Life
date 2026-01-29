import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { APIResposneModel } from '../model/Product';
import { Cart } from '../model/cart';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})

export class CartService{

private apiurl = '/api/BigBasket/';

private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor(private http: HttpClient) {}

  addtoCart(cart:Cart): Observable<APIResposneModel>{
  return this.http.post<APIResposneModel>(this.apiurl+'AddToCart',cart);
  }

    updateCartCount(count: number): void  {
    this.cartCountSubject.next(count);
  }

 getCartProductsByCustomer(custId: number): Observable<APIResposneModel> {
  return this.http.get<APIResposneModel>(
    this.apiurl + 'GetCartProductsByCustomerId?id=' + custId
  );
}

 

removeCartItem(cartId:number):Observable<APIResposneModel>{
  return this.http.get<APIResposneModel>(
    this.apiurl + 'DeleteProductFromCartById?id='+ cartId
  );
}

placeOrder(order: Order) {
  return this.http.post<APIResposneModel>(
    this.apiurl + 'PlaceOrder',
    order
  );

}



}