import { KeyValuePair } from './keyValuePair.model';

export interface ProductModel extends KeyValuePair {
  acquisitionPrice: number;
  sellingPrice: number;
  quantity: number;
  quantitySold: number;
  description: string;
  thumbnail?: string;
  images: string[];
  department: DepartmentModel[];
  active: boolean;
  search?: string;
}
export interface ProductKVPModel extends KeyValuePair {
  search?: string;
}

export interface DepartmentModel extends KeyValuePair {}
