import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any [];

  constructor(private api: ApiService) { }

  // Angular initials this page  on this method.
  // This method is like viewDidLoad on iOS
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    // You subscribe when you have a service.
    this.api.getJson().subscribe(res => {
      this.items = res;
    })
  }

  // This function will connect to our "Add To Cart" button
  addToCart() {
    console.log('added to cart')
  }
}
