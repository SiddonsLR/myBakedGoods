import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Checkout} from '../models/checkout'
import { Observable } from 'rxjs';
;
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
private URL:string = 'http://localhost:3100/checkout'
  constructor( private http:HttpClient) { }

  postsCheckout(registerObj:Checkout) {
    return this.http.post<Checkout>(`${this.URL}`,registerObj)
  };

  getCheckout(){
    return this.http.get<Checkout[]>(`${this.URL}`)
  }
  
  // checkoutPost(checkout:Checkout): Observable<Checkout>{
  //   return this.http.post<Checkout>(this.URL,checkout)
  // }
}
