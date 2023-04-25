import { PackageType } from './enums';
import { Contract } from './contract.model';

export interface Package {
  id: number;
  contractID: number;
  packageType: PackageType;
  packageName: string;
  amount: number;
  used: number;
}
