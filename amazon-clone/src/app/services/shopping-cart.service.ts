import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  addProduct = (product) => {
    console.log('Added: ', product)
    localStorage.setItem('shopping_cart', product)
  }
}
