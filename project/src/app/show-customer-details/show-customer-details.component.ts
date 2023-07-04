import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-show-customer-details',
  templateUrl: './show-customer-details.component.html',
  styleUrls: ['./show-customer-details.component.css'],
})
export class ShowCustomerDetailsComponent {
  customers: any;
  customerToUpdate = {
    id: '',
    name: '',
    gender: '',
    phoneNumber: '',
    address: '',
    emailId: '',
    password: '',
  };
  constructor(private _service: ProjectService) {
    this.customers = [];
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this._service.getAllCustomers().subscribe((data) => {
      console.log(data);
      this.customers = data;
    });
  }

  deleteCustomer(customer: any) {
    this._service.deleteCustomer(customer.id).subscribe((data) => {
      console.log(data);
      this.getCustomerDetails();
    });
  }

  edit(customer: any) {
    this.customerToUpdate = customer;
  }

  updateCustomer() {
    this._service.updateCustomer(this.customerToUpdate).subscribe((data) => {
      console.log(data);
    });
  }
}
