import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import {map } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{ 
items: Item[]=[]
public productList:any;

constructor(private itemService:ItemService, ){}


ngOnInit(): void {
  this.itemService.getProducts().subscribe(res=>{this.productList=res})
  // this.itemService.getProducts().subscribe((items)=>(this.items=items));
}



// onClickAllProducts(){
//   this.itemService.getProducts().subscribe((items)=>(this.items=items))
// }


// onClickCake(){
//   this.itemService.getProducts()
//     .pipe(map(productList=>productList.filter((productList:any)=>productList.type==="cake")))
//     .subscribe((productList)=>(this.productList=productList))
// }


// onClickCookies(){
//   this.itemService.getProducts()
//   .pipe(map(items=>items.filter((productList:any)=>productList.type==="cookies")))
//   .subscribe((items)=>(this.items=items))
// }
// onClickBrownies(){
//   this.itemService.getProducts()
//   .pipe(map(this.productList.filter((item:any)=>item.type==="brownies"))).subscribe(res=>{this.productList=res})
// }

}
 



