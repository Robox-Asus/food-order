import { Component } from '@angular/core';
import Cart from '../shared/models/cart';
import { CartService } from '../services/food/cart.service';
import CartItem from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;

  ngOnInit(): void {
    this.setCart();
  }

  constructor(private cartService: CartService) { }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  increaseQuantity(cartItem: CartItem) {
    this.cartService.changeQuantity(cartItem.food.id);
    this.setCart();
  }

  decreaseQuantity(cartItem: CartItem) {
    this.cartService.reducedQuantity(cartItem.food.id);
    this.setCart();
  }

}
