import { KeyValuePair } from './keyValuePair.model';

export interface ProductModel extends KeyValuePair {
  acquisitionPrice?: number;
  sellingPrice?: number;
  quantity?: number;
  quantitySold?: number;
  description?: string;
  image?: string;
  department?: DepartmentModel;
  search?: string;
}

export interface DepartmentModel extends KeyValuePair {}
