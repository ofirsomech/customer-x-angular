import { Component, Input } from '@angular/core';
import { Customer } from '../../../../models/customer.model';
import { CustomerService } from '../../../../services/customer.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  @Input() customer: Customer = {};
  isEditingAddress: boolean = false;
  isExpanded = false;

  constructor(private customerService: CustomerService) {}

  toggleAddressExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  toggleAddressEditing() {
    this.isEditingAddress = !this.isEditingAddress;

    // If the user finished editing and clicked "שמור שינויים", save the changes to the server
    if (!this.isEditingAddress) {
      this.customerService.updateCustomerAddress(this.customer).subscribe(
        (response) => {
          console.log('Customer updated successfully');
        },
        (error) => {
          console.error('Failed to update customer: ', error);
        }
      );
    }
  }
}
