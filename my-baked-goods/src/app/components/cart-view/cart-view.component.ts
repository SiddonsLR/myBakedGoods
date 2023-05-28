import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  public products: any =[];
  public grandTotal : number =0 ;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{this.products=res;
    this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }



}
