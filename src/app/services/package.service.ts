import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Package } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'api/packages';

  constructor(private http: HttpClient) { }

  getAllPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(this.apiUrl);
  }

  getPackageById(id: number): Observable<Package> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Package>(url);
  }
}
