import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
