import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeyValuePair } from '@app/@shared/models/keyValuePair.model';
import { Moment } from 'moment';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss'],
})
export class SideFilterComponent implements OnInit {
  @ViewChild('f') filterForm: NgForm;
  public userSelected: KeyValuePair;
  public productSelected: KeyValuePair;
  public users: KeyValuePair[] = this.data.users;
  public products: KeyValuePair[] = this.data.products;
  public usersFiltered = this.users.slice();
  public productsFiltered = this.products.slice();
  public startDate: Moment;
  public endDate: Moment;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { users: KeyValuePair[]; products: KeyValuePair[] }) {}

  ngOnInit(): void {}
}
