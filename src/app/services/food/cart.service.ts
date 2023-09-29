import { Injectable } from '@angular/core';
import Cart from 'src/app/shared/models/cart';
import CartItem from 'src/app/shared/models/cartItem';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  constructor() { }

  addtoCart(food: Food) {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }

  changeQuantity(foodId: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = cartItem.quantity + 1;
  }

  reducedQuantity(foodId: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    if (cartItem.quantity === 1) {
      this.removeFromCart(cartItem.food.id);
    }
    else {
      cartItem.quantity = cartItem.quantity - 1;
    }
  }

  getCart(): Cart {
    return this.cart;
  }
}
