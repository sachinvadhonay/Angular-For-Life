import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { APIResposneModel } from '../model/Product';
import { Customer } from '../model/customer';
import { LoginModel } from '../model/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = '/api/BigBasket/';

  // 🔹 SIMPLE LOGIN STATE
  private loginState = new BehaviorSubject<boolean>(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  loginState$ = this.loginState.asObservable();

  constructor(private http: HttpClient) {}

  signup(customer: Customer): Observable<APIResposneModel> {
    return this.http.post<APIResposneModel>(
      this.apiUrl + 'RegisterCustomer',
      customer
    );
  }

  login(data: LoginModel): Observable<APIResposneModel> {
    return this.http.post<APIResposneModel>(
      this.apiUrl + 'Login',
      data
    );
  }

  // ✅ CHANGE 1: update subject
  setLogin(userName: string): void {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', userName);
    this.loginState.next(true);  
  }

  // ✅ CHANGE 2: update subject
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    this.loginState.next(false);  
  }
}
