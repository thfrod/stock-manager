import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KeyValuePair } from '@app/@shared/models/keyValuePair.model';

@Component({
  selector: 'app-side-filter-products',
  templateUrl: './side-filter-products.component.html',
  styleUrls: ['./side-filter-products.component.scss'],
})
export class SideFilterProductsComponent implements OnInit {
  public departmentSelected: KeyValuePair;
  public productSelected: KeyValuePair;
  public departments: KeyValuePair[] = this.data.departments;
  public products: KeyValuePair[] = this.data.products;
  public departmentsFiltered = this.departments.slice();
  public productsFiltered = this.products.slice();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { departments: KeyValuePair[]; products: KeyValuePair[] },
    public dialogRef: MatDialogRef<SideFilterProductsComponent>
  ) {}

  ngOnInit(): void {}
}
