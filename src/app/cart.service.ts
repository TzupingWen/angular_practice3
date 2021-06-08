import { Injectable, EventEmitter, Output } from '@angular/core';
// 把HttpClient服務注入
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    // 定義items，將當前商品陣列儲存在購物車
    items = [];

    constructor (
        private http: HttpClient
    ) {}

    @Output() event = new EventEmitter();

    addToCart(product) {
        // 加入購物車的商品要給一物件，待解決:檢查是否有重複商品
        this.items.push({
            // 定義新物件的商品與數量
            product: product,
            qty: 1,
        });


        // 原先push的product沒有定義新物件，[(ngModel)]會一直共用同個id
        // this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    // 移除購物車某項商品
    remove(index: number) {
        this.items.splice(index,1);
    }

}