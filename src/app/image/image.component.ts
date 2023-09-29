import { Component, Input } from '@angular/core';
import { Food } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/food/cart.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input() src!: Food;

  food!: Food;
  constructor(private fs: FoodService, private cartService: CartService) {
  }

  addToCart() {
    let cartItem = this.fs.getFoodById(this.src.id);
    if (!cartItem) return;
    this.cartService.addtoCart(cartItem);
  }

  increaseCount() {
    let cartItem = this.cartService.getCart().items.find(item => item.food.id === this.src.id);
    if (!cartItem)
      this.addToCart();
    else
      this.cartService.changeQuantity(this.src.id);
  }


}
