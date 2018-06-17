import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from '../models/customer.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/customers';

  public getCustomers() {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  public deleteCustomer(customer) {
    return this.http.delete(this.baseUrl + "/"+ customer.id);
  }

  public createCustomer(customer) {
    return this.http.post<Customer>(this.baseUrl + "/create", customer);
  }

}
