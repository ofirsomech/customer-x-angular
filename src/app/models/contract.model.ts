import { SubscriptionType } from './enums';
import { Package } from './package.model';
import { Customer } from './customer.model';

export interface Contract {
  id: number;
  customerID: number;
  subscriptionNumber: string;
  subscriberName: string;
  subscriptionType: SubscriptionType;
  packages?: Package[];
}
