import { Injectable } from '@angular/core';
import { ProductModel } from '@app/@shared/models/products.model';
import { DashboardDataModel } from '@app/@shared/models/utils.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getDashboardData(): Observable<DashboardDataModel> {
    const product: ProductModel = {
      id: 1,
      value: 'Product 1',
      acquisitionPrice: 234,
      sellingPrice: 86,
      quantity: 43,
      quantitySold: 18,
      description: '',
      image: '',
      departmentId: 7,
    };

    return of({
      numberOfSales: 77,
      totalAmount: 6160,
      totalProfit: 3850,
      totalCost: 2310,
      numberOfProducts: 15,
      mostSaledProduct: product,
      lessSaledProduct: product,
      mostProfitableProduct: product,
      lessProfitableProduct: product,
      listOfProducts: [product],
    });
  }
}
