import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Customer } from '../models/customer.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'https://localhost:44357/api/customers';
  customer: Customer = {};

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  getCustomerByIdentityNumber(identityNumber: string): Observable<Customer> {
    return this.http
      .get<Customer>(`${this.apiUrl}/identity/${identityNumber}`)
      .pipe(
        tap((customer: Customer) => {
          this.setCustomer(customer);
        })
      );
  }

  updateCustomerAddress(customer: Customer): Observable<any> {
    const url = `${this.apiUrl}/address/${customer.id}`;
    return this.http.put(url, customer);
  }

  setCustomer(customer: Customer): void {
    this.customer = customer;
    this.sessionService.setItem('customer', customer);
  }

  getCustomer(): Customer {
    return this.sessionService.getItem('customer');
  }
}
