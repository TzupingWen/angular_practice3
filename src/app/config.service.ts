import {Injectable} from '@angular/core';
// 把HttpClient服務注入
import{HttpClient} from '@angular/common/http';
// 匯入Rxjs可觀察物件和運算子
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class ConfigService{
    constructor(
        private http:HttpClient
    ) {}
}