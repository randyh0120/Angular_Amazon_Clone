import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(public shoping_cart_servie: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products: ', this.checkout_products)
  }

  removeItem(p) {
    this.shoping_cart_servie.removeItem(p);
    this.deleteEvent.emit(p);
  }
}
