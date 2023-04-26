import { Component, Input } from '@angular/core';
import { Customer } from '../../../../models/customer.model';
import { Package } from '../../../../models/package.model';
import { getSubscriptionsTypes } from '../../../../utils/texts';
import { MatDialog } from '@angular/material/dialog';
import { GraphDialogComponent } from '../../../../modals/graph-dialog/graph-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  openGraph(packageData: any): void {
    const dialogRef = this.dialog.open(GraphDialogComponent, {
      data: packageData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
