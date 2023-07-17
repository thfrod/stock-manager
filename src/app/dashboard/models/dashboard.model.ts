import { ProductModel } from '@app/@shared/models/products.model';

export interface ChartDataModel {
  profit: number[];
  cost: number[];
  amount: number[];
}

export interface TopListCardModel {
  title: string;
  subtitle?: string;
  icon: string;
  products: ProductModel[];
}
