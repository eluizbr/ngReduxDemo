import { IAddress } from './address.model';
import { ICompany } from './company.model';

export interface IUser {
  id: string;
  username: string;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
