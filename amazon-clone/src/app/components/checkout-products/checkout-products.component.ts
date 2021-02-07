import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any[];

  constructor(private shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products: ', this.checkout_products)
  }

}
