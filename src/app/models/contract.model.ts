import { SubscriptionType } from './enums';
import { Package } from './package.model';
import { Customer } from './customer.model';

export interface Contract {
  id: string;
  customerID: string;
  subscriptionNumber: string;
  subscriberName: string;
  subscriptionType: SubscriptionType;
  packages?: Package[];
}
