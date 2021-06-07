import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  qty:number;
  subPrice:number;
  totalQty:number;
  totalPrice:number;
  

  // 購物車數量
  subQty(){
    this.qty = 0;
    if(this.items){
      this.qty += 1;
      return this.qty;
    }
  }

  // 購物車總計
  sum() {
    this.subPrice = 0;
    this.totalQty = 0;
    this.totalPrice = 0;
    // if(this.items){
    //   this.items.map(item => {
    //     this.subPrice += item.price;
    //     this.totalQty += this.qty;
    //     this.totalPrice += item.price * this.qty;
    //   })
    // } 

    for(var i=0; i< this.items.length ; i++){
      this.subPrice += this.items[i].price;
      this.totalQty += this.qty;
      this.totalPrice += this.items[i].price * this.qty;
    }

  }

  // 移除購物車某項商品
  remove(index: number) {
    this.cartService.remove(index);
    this.subQty();
    this.sum();
  }

  constructor(
    private cartService: CartService
  ) { }

  
  
  ngOnInit():void {
    console.log(this.cartService.getItems());
    this.items = this.cartService.getItems();
    this.subQty();
    this.sum();

    // this.items.forEach(item => {
    //   this.calcPrice += (item.price * this.qty);
    // })

  };


  // test
  // x=0;
  // y=0;
  // result=0;
  // calculate(){
  //   this.result = this.x * this.y;
  // }

}
