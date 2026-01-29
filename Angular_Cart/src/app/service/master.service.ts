import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResposneModel } from '../model/Product';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

   
apiUrl: string = '/api/BigBasket/';

  constructor(private http:HttpClient ) { }
  getAllProducts(): Observable<APIResposneModel> {
    return this.http.get<APIResposneModel>(this.apiUrl + "GetAllProducts")
    }


     getAllCategory(): Observable<APIResposneModel> {
    return this.http.get<APIResposneModel>(this.apiUrl + "GetAllCategory")
    }


      getAllProductsByCategoryId(categoryId: number): Observable<APIResposneModel> {
    return this.http.get<APIResposneModel>(this.apiUrl + "GetAllProductsByCategoryId?id="+categoryId)
    }
}
