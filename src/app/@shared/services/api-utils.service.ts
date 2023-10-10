import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DepartmentModel } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ApiUtilsService {
  constructor() {}

  public getDepartments(): Observable<DepartmentModel[]> {
    return of([
      { id: 1, value: 'Clothes' },
      { id: 2, value: 'Shoes' },
      { id: 3, value: 'Accessories' },
      { id: 4, value: 'Electronics' },
      { id: 5, value: 'Home' },
      { id: 6, value: 'Beauty' },
      { id: 7, value: 'Toys' },
      { id: 8, value: 'Sports' },
      { id: 9, value: 'Books' },
      { id: 10, value: 'Food' },
    ]);
  }
}
