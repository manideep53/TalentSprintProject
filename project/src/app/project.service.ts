import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private isUserLogged: boolean;
  constructor(private _httpclient: HttpClient) {
    this.isUserLogged = false;
  }

  API = 'http://localhost:8085';

  setUserLoggedIn() {
    this.isUserLogged = true;
  }
  getUserLogged(): boolean {
    return this.isUserLogged;
  }

  public registerCustomer(customerData: any) {
    return this._httpclient.post(this.API + '/registerCustomer', customerData);
  }

  public getAllCustomers() {
    return this._httpclient.get(this.API + '/getAllCustomers');
  }

  public getCustomerById(id: any) {
    return this._httpclient.get(this.API + '/getCustomerById?id=', id);
  }

  public deleteCustomer(id: any) {
    return this._httpclient.delete(this.API + '/deleteCustomerById?id=' + id);
  }

  public updateCustomer(customer: any) {
    return this._httpclient.put(this.API + '/updateCustomer', customer);
  }

  public loginFromDatabase(customer: Customer) {
    return this._httpclient.post(this.API + '/login', customer);
  }
}
