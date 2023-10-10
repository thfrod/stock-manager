import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KeyValuePair } from '@app/@shared/models/keyValuePair.model';

@Component({
  selector: 'app-side-filter-products',
  templateUrl: './side-filter-products.component.html',
  styleUrls: ['./side-filter-products.component.scss'],
})
export class SideFilterProductsComponent implements OnInit {
  @ViewChild('f') filterForm: NgForm;
  public departmentSelected: KeyValuePair;
  public productSelected: KeyValuePair;
  public departments: KeyValuePair[] = this.data.departments;
  public products: KeyValuePair[] = this.data.products;
  public departmentsFiltered = this.departments.slice();
  public productsFiltered = this.products.slice();
  public minSalePrice: number = 0;
  public maxSalePrice: number = 0;
  public minPurchasePrice: number = 0;
  public maxPurchasePrice: number = 0;
  public minQtdInStock: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { departments: KeyValuePair[]; products: KeyValuePair[] },
    public dialogRef: MatDialogRef<SideFilterProductsComponent>
  ) {}

  ngOnInit(): void {}

  public close() {
    if (this.filterForm.valid) {
      this.dialogRef.close(this.filterForm.value);
    }
  }
}
