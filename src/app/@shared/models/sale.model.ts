import { ProductModel } from './products.model';

export interface SaleModel {
  id: number;
  product: ProductModel;
  quantity: number;
  discount: number;
}
