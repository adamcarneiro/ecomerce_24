import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private endpoint = 'customers';

  constructor(private apiService: ApiService) { }

  getCustomers(): Observable<Customer[]> {
    return this.apiService.get<Customer[]>(this.endpoint);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.apiService.post<Customer>(this.endpoint, customer);
  }

  // Outros métodos como updateCustomer, deleteCustomer podem ser adicionados aqui
}
