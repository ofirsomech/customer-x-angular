import { PackageType } from './enums';
import { Contract } from './contract.model';

export interface Package {
  id: number;
  contractID: string;
  packageType: PackageType;
  packageName: string;
  amount: number;
  used: number;
}
