import { Component, Input, OnInit } from '@angular/core';
import { KeyValuePair } from '@app/@shared/models/keyValuePair.model';
import { ProductModel } from '@app/@shared/models/products.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  public busy$: Subscription[] = [];
  public departmentsFiltered: KeyValuePair[] = [];
  @Input() product: ProductModel;
  @Input() departments: KeyValuePair[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.busy$.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  compareWithFn(item1: KeyValuePair, item2: KeyValuePair) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
