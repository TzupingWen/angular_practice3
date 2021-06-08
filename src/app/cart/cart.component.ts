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
  // qty:number;
  // subPrice:number;
  // totalQty:number;
  // totalPrice:number=0;

  // 數量
  // subQty(){
  //   this.qty = 0;
  //   if(this.items){
  //     this.qty += 1;
  //   }
  // }

  totalPrice:number;

  // 用get()方法取得總金額的計算；參考get computedName()
  get computedTotal(){
    this.totalPrice = 0;
    for(let i=0; i< this.items.length ; i++){
      this.totalPrice += (this.items[i].product.price * this.items[i].qty);
    }
    return this.totalPrice;
  }

  // 購物車總計--(無法將所有商品的小計加總)
  // sum() {
  //   this.subPrice = 0;
  //   this.totalQty = 0;
  //   this.totalPrice = 0;
  //   for(var i=0; i< this.items.length ; i++){
  //     this.subPrice += this.items[i].price;
  //     this.totalQty += this.qty;
  //     this.totalPrice += this.items[i].price * this.qty;
  //   }

  // }

  // 移除購物車某項商品
  remove(index: number) {
    this.cartService.remove(index);
    // this.subQty();
    // this.sum();
  }


  constructor(
    private cartService: CartService
  ) { }

  ngOnInit():void {
    console.log(this.cartService.getItems());
    this.items = this.cartService.getItems();
    // this.subQty();
    // this.sum();
  };

}
