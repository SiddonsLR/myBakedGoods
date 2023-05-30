import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from './services/item.service';
import { Checkout } from './models/checkout';
import { CheckoutService } from './services/checkout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-baked-goods';
  public productList: any;
  checkout:Checkout[]=[]
  item: Item[] = [];
  searchText: any = '';
  

  constructor(private itemService: ItemService, private checkoutSeverice:CheckoutService) {}

  ngOnInit(): void {
    this.itemService.getProducts().subscribe((items) => (this.item = items));
  }


}
