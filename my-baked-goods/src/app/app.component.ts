import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-baked-goods';
  public productList: any;
  item: Item[] = [];
  searchText: any = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getProducts().subscribe((items) => (this.item = items));
  }
}
