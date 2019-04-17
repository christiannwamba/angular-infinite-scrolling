import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  cart: Product[] = [];

  ngOnInit() {}
}
