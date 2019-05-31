import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any> {
    return this.http.get("/api/cart-items", {responseType: "json"});
  }
}
