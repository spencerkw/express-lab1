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

}
