import { Component } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent {
  customer: Customer = {};

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customer = this.customerService.getCustomer();
    if (Object.keys(this.customer).length === 0) {
      this.router.navigate(['/identification']);
    }
  }

  goToIdentification(): void {
    this.customerService.setCustomer({});
    this.router.navigate(['/identification']);
  }
}
