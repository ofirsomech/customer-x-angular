import {Component, Input} from '@angular/core';
import {Customer} from "../../../../models/customer.model";

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css']
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
}
