import { Component, Input } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent {
  customer: Customer = {};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customer = this.customerService.getCustomer();
  }
}
