import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  public productList: any;
  searchKey = '';
  constructor(
    private itemService: ItemService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.itemService.getProducts().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quanity: 1, total: a.total });
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  OnAllProductsClick() {
    console.log('click');
    this.itemService.getProducts().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quanity: 1, total: a.price });
      });
    });
  }
  OnCakeClick() {
    console.log('click');
    this.itemService
      .getProducts()
      .pipe(map((item) => item.filter((item: any) => item.tag === 'cake')))
      .subscribe((res) => {
        this.productList = res;
      });
    this.productList.forEach((a: any) => {
      Object.assign(a, { quanity: 1, total: a.price });
    });
  }
  OnCookieClick() {
    console.log('click');
    this.itemService
      .getProducts()
      .pipe(map((item) => item.filter((item: any) => item.tag === 'cookies')))
      .subscribe((res) => {
        this.productList = res;
      });
    this.productList.forEach((a: any) => {
      Object.assign(a, { quanity: 1, total: a.price });
    });
  }
  OnBrowniesClick() {
    console.log('click');
    this.itemService
      .getProducts()
      .pipe(map((item) => item.filter((item: any) => item.tag === 'brownies')))
      .subscribe((res) => {
        this.productList = res;
      });
    this.productList.forEach((a: any) => {
      Object.assign(a, { quanity: 1, total: a.price });
    });
  }
}
