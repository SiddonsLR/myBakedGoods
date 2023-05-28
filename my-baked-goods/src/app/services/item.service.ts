import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ItemService {
// private URL = 'http://localhost:3000/products'
  constructor(private http:HttpClient) { }

getProducts(){
  return this.http.get<any>('http://localhost:3000/products')
  .pipe(map((res:any)=>{return res}))
}


  // getItems(): Observable<Item[]>{
  //       return this.http.get<Item[]>(this.URL)
  // }

  
}
