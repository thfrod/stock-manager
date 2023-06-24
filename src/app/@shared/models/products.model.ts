import { KeyValuePair } from './keyValuePair.model';

export interface ProductModel extends KeyValuePair<number, string> {
  acquisitionPrice: number;
  sellingPrice: number;
  quantity: number;
  quantitySold?: number;
  description?: string;
  image?: string;
  departmentId?: number;
}
