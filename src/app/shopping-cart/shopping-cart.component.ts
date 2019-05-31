import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: CartItem[];

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  getCart(): void {
    this.cart.getAllItems().subscribe(response => {
      this.shoppingCart = response;
    });
  }

  addItem(form: any): void {
    let newItem: CartItem = {
      product: form.value.name,
      id: Number(form.value.id),
      price: Number(form.value.price),
      quantity: Number(form.value.quantity)
    };
    this.cart.addItem(newItem).subscribe(response => {
      this.shoppingCart = response;
    });
    form.resetForm();
  }

  deleteItem(id: number): void {
    this.cart.deleteItem(id).subscribe(response => {
      this.shoppingCart = response;
    });
  }

  updateItem(id: number, form: any): void {
    let updatedItem: CartItem = {
      product: form.value.name,
      id: Number(form.value.id),
      price: Number(form.value.price),
      quantity: Number(form.value.quantity)
    };
    this.cart.updateItem(id, updatedItem).subscribe(response => {
      this.shoppingCart = response;
    });
  }

}
