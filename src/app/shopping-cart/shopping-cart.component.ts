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
  addFormVisible: boolean = false;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  toggleAddForm() {
    this.addFormVisible = !this.addFormVisible;
  }

  getCart(): void {
    this.cart.getAllItems().subscribe(response => {
      this.shoppingCart = response;
    });
  }

  addItem(form: any): void {
    let newItem: CartItem = {
      ...form.value
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

  updateItem(item: CartItem): void {
    this.cart.updateItem(item).subscribe(response => {
      this.shoppingCart = response;
    });
  }

}
