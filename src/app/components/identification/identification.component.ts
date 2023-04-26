import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css'],
})
export class IdentificationComponent implements OnInit {
  identityNumber: string = '';
  identityNumberValid: boolean = true;
  errorMessage: string = '';

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
        .then((customer) => {
          // Customer found
          this.errorMessage = ''; // Set error message to empty string
        })
        .catch((error) => {
          // Handle errors
          console.error('Failed to retrieve customer details: ', error);
          this.errorMessage = error;
        });
    }
  }

  protected readonly Object = Object;
}
