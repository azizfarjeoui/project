import { Injectable, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) {}
  
  private _apiUrl: string = 'http://localhost:3000/product';
  
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this._apiUrl);
  }
  getProduct(id:string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this._apiUrl}?id=${id}`);
  }

  addProduct(g: Product): Observable<Product> {
    return this.http.post<Product>(this._apiUrl, g);
  }
  deleteProduct(g:Product ): Observable<Product> {
    return this.http.delete<Product>(this._apiUrl + '/' + g.id);
  }
  
}
