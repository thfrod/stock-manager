import { KeyValuePair } from './keyValuePair.model';

export interface UserModel extends KeyValuePair {
  email?: string;
}
