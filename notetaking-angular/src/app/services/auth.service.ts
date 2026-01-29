import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '/api/Auth';

  constructor(private http: HttpClient) { }

   register(user: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/Register`,
      user
    );
  }

  // 🔹 Login
  login(credentials: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/Login`,
      credentials
    );
  }
}
