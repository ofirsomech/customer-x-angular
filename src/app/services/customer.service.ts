import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'https://localhost:44357/api/customers';
  customer: Customer = {};

  constructor(private http: HttpClient) {}

  getCustomerByIdentityNumber(identityNumber: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/identity/${identityNumber}`);
  }

  updateCustomerAddress(customer: Customer): Observable<any> {
    const url = `${this.apiUrl}/address/${customer.id}`;
    return this.http.put(url, customer);
  }

  setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  getCustomer(): Customer {
    return this.customer;
  }
}
