import { ProductModel } from './products.model';

export interface DashboardDataModel {
  numberOfSales: number;
  totalSales: number; // total sales not counting costs
  totalProfit: number;
  totalCost: number;
  numberOfProducts: number;
  mostSaledProduct: ProductModel;
  lessSaledProduct: ProductModel;
  mostProfitableProduct: ProductModel;
  lessProfitableProduct: ProductModel;
  listOfProducts: ProductModel[];
}
