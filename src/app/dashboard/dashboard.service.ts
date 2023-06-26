import { Injectable } from '@angular/core';
import { ProductModel } from '@app/@shared/models/products.model';
import { DashboardDataModel } from '@app/@shared/models/utils.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getDashboardData(): DashboardDataModel {
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

    return {
      numberOfSales: 77,
      totalSales: 6160, // total sales not counting costs
      totalProfit: 3850,
      totalCost: 2310,
      numberOfProducts: 15,
      mostSaledProduct: product,
      lessSaledProduct: product,
      mostProfitableProduct: product,
      lessProfitableProduct: product,
      listOfProducts: [product],
    };
  }
}
