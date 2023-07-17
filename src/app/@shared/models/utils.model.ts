import { ProductModel } from './products.model';

export interface DashboardDataModel {
  numberOfSales: number;
  totalAmount: number; // total sales not counting costs
  totalProfit: number;
  totalCost: number;
  numberOfProducts: number;
  mostSaledProducts: ProductModel[];
  lessSaledProducts: ProductModel[];
  mostProfitableProduct: ProductModel;
  lessProfitableProduct: ProductModel;
  profitByMonth: number[];
  amountByMonth: number[];
  costByMonth: number[];
  listOfProducts: ProductModel[];
}
