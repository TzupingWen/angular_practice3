import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // addToCart()：用product做引數，使用CartService addToCart()新增商品到購物車
  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('此商品已加入購物車');
  }

  // 透過private route:ActivatedRoute新增為建構函式括號內的引數，把ActivatedRoute注入到建構式中
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  // 在ngOnInit()中從路由引數中提取productId，並在products陣列中找到相應產品
  ngOnInit() {
    // 商品id
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // 找出對應id的商品
    this.product = products.find(product => product.id === productIdFromRoute);

    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });

  }

}
