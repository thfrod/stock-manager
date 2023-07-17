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
      image: '/assets/products/1.jpg',
      departmentId: 7,
    };

    return of({
      numberOfSales: 77,
      totalAmount: 6160,
      totalProfit: 3850,
      totalCost: 2310,
      numberOfProducts: 15,
      mostSaledProducts: [product, product, product, product],
      lessSaledProducts: [product, product, product, product],
      mostProfitableProduct: product,
      lessProfitableProduct: product,
      numberOfSalesByMonth: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      amountByMonth: [40, 60, 80, 100, 120, 140, 160, 180, 210, 240, 250],
      profitByMonth: [30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160],
      costByMonth: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 90],
      listOfProducts: [product, product, product, product, product, product, product, product, product, product],
    });
  }
}
