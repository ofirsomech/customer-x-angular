import { Contract } from './contract.model';

export interface Customer {
  id?: string;
  firstName?: string;
  lastName?: string;
  identityNumber?: string;
  addressCity?: string;
  addressStreet?: string;
  addressHouseNumber?: string;
  postalCode?: string;
  contracts?: Contract[];
  expirationTime?: number;
}
