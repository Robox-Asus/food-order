import CartItem from "./cartItem";

export default class Cart {

    items: CartItem[] = [];

    get totalPrice(): number {
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.Price;
        });
        return totalPrice;
    }
}