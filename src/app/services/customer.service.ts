import { catchError, Observable, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from './session.service';
import { Customer } from '../models/customer.model';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { ModalService } from './modal.sercvice';
import { SessionExpiredModalComponent } from '../modals/session-expired-modal/session-expired-modal.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = `${environment.apiUrl}customers`;
  customer: Customer = {};

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private modalService: ModalService,
    private sessionService: SessionService
  ) {}

  getCustomerByIdentityNumber(identityNumber: string): Observable<Customer> {
    return this.http
      .get<Customer>(`${this.apiUrl}/identity/${identityNumber}`)
      .pipe(
        tap((customer: Customer) => {
          this.setCustomer(customer);
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error getting customer by identity number:', error);
          if (error.status === 404) {
            return throwError(error.error);
          } else if (error.status === 401) {
            this.authService.logout();
            this.modalService.open(SessionExpiredModalComponent);
            return throwError('Session expired');
          } else {
            return throwError('Could not retrieve customer');
          }
        })
      );
  }

  updateCustomerAddress(customer: Customer): Observable<any> {
    const url = `${this.apiUrl}/address/${customer.id}`;
    return this.http.put(url, customer).pipe(
      tap(
        (customer: Customer) => {
          this.setCustomer(customer);
        },
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      )
    );
  }

  setCustomer(customer: Customer): void {
    this.customer = customer;
    this.sessionService.setItem('customer', customer);
  }

  getCustomer(): Customer {
    const customer = this.sessionService.getItem('customer');
    return customer ?  this.sessionService.getItem('customer') : {};
  }
}
