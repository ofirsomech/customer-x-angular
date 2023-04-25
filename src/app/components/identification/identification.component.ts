import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css'],
})
export class IdentificationComponent implements OnInit {
  identityNumber: string = '';
  identityNumberValid: boolean = true;

  constructor(public customerService: CustomerService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Check if the identity number is valid
    this.identityNumberValid = /^[0-9]{9}$/.test(this.identityNumber);
    if (this.identityNumberValid) {
      // Call a service method to get the customer details based on the provided identity number
      this.customerService
        .getCustomerByIdentityNumber(this.identityNumber)
        .toPromise()
        .catch((error) => {
          // Handle errors
          console.error('Failed to retrieve customer details: ', error);
          throw error;
        });
    }
  }

  protected readonly Object = Object;
}
