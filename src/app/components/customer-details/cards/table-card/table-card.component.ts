import { Component, Input } from '@angular/core';
import { Customer } from '../../../../models/customer.model';
import { Package } from '../../../../models/package.model';
import { getSubscriptionsTypes } from '../../../../utils/texts';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css'],
})
export class TableCardComponent {
  @Input() customer: Customer = {};
  displayedColumns: string[] = [
    'subscriptionNumber',
    'subscriberName',
    'subscriptionType',
    'packageName',
    'amount',
    'used',
  ];
  public getSubscriptionsTypes = getSubscriptionsTypes;
}
