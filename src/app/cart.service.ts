import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any> {
    return this.http.get("/api/cart-items", { responseType: "json" });
  }

  addItem(newItem: CartItem): Observable<any> {
    return this.http.post("/api/cart-items", newItem, { responseType: "json" });
  }

  updateItem(newItem: CartItem): Observable<any> {
    return this.http.put(`/api/cart-items/${newItem.id}`, newItem, { responseType: "json" });
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`/api/cart-items/${id}`, { responseType: "json" });
  }
}
