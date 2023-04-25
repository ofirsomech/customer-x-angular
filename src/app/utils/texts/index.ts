import { subscriptionsTypes } from './subscriptions-type';
import { getTextValue } from './utils';

export const getSubscriptionsTypes = (name: string) =>
  getTextValue(name, subscriptionsTypes);

