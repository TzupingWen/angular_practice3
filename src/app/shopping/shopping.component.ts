import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
// import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  products = products;
  // shippingCosts;

  // addToCart(product) {
  //   this.cartService.addToCart(products);
  //   window.alert('此商品已加入購物車!')
  // }

  constructor(
    private route:ActivatedRoute,
    // private cartService:CartService
  ) { }

  ngOnInit() {
    // this.shippingCosts = this.cartService.getShippingPrices();
  }

}
