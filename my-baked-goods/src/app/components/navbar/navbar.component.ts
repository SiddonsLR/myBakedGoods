import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
public productList:any
public totalItems: number = 0;
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{this.productList=res;
      this.totalItems=res.length;
    })
  }
  
}
