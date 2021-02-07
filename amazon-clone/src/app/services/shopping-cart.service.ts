import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any[] = [];

  constructor() { }

  addProduct = (product) => {
    // console.log('Added: ', product)

    let items = this.getShoppingCartItems();
    if(items) {
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    } else {
      this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }

    // localStorage.setItem('shopping_cart', JSON.stringify(product))
  }

  getShoppingCartItems = () => {
    let items = localStorage.getItem('shopping_cart')
    return JSON.parse(items)
  }

  getCartLength = () => {
    let items = this.getShoppingCartItems();
    return items ? this.getShoppingCartItems().length : 0
  }
}
