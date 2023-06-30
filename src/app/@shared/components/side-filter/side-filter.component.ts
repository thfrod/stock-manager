import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel } from '@app/@shared/models/products.model';
import { UserModel } from '@app/@shared/models/user.model';
import { Moment } from 'moment';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss'],
})
export class SideFilterComponent implements OnInit {
  @ViewChild('f') filterForm: NgForm;
  public user: UserModel;
  public product: ProductModel;
  public startDate: Moment;
  public endDate: Moment;

  public variables = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  public filteredVariables = this.variables.slice();
  constructor() {}

  ngOnInit(): void {}
}
