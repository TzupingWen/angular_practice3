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
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    // 移除購物車某項商品
    remove(index: number) {
        this.items.splice(index,1);
    }

}