import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadItems, GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private fruitService: FruitsService,
    private store: Store<{ items: []; cart: [] }>
  ) {}

  @Input() fruits: Product[] = [];
  throttle = 300;
  scrollDistance = 0.2;
  limit = 20;
  page = 1;

  onScrollEnd() {
    this.page += 1;

    if (this.page <= 5) {
      this.store.dispatch(new GetItems({ page: this.page, limit: this.limit }));
    }
  }

  ngOnInit() {}
}
