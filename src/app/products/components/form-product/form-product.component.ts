import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChild('f') f: NgForm;
  @Input() product: ProductModel;
  @Input() departments: KeyValuePair[] = [];
  @Output() submit = new EventEmitter<ProductModel>();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.busy$.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  compareWithFn(item1: KeyValuePair, item2: KeyValuePair) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  public OnSubmit(): void {
    if (this.f.valid) {
      console.log(this.product);
      this.submit.emit(this.product);
    } else {
      this.f.form.markAllAsTouched();
    }
  }
}
