import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestapiService {

  constructor(
    private http: HttpClient
  ) { }

  // get()取得url資料
  getData () {
    // 預設的port已取得api其他無法使用
    let url="https://ptx.transportdata.tw/MOTC/v2/Bus/Vehicle/InterCity?$top=30&$format=JSON";
    return this.http.get(url);
  }

}
