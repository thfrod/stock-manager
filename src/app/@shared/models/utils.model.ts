import { ProductModel } from './products.model';

export interface DashboardDataModel {
  totalSales: number;
  totalProducts: number;
  totalProfit: number;
  totalCost: number;
  numberOfSales: number;
  mostSaledProduct: ProductModel;
  lessSaledProduct: ProductModel;
  mostProfitableProduct: ProductModel;
  lessProfitableProduct: ProductModel;
  TotalofProductsOnStock: ProductModel[];
  productsOffStock: ProductModel[];
}
