import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Customer } from '../customer';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  customer = new Customer();

  constructor(
    private _service: ProjectService,
    private _router: Router,
    private toastr: ToastrService
  ) {}

  register(registerForm: NgForm) {
    this._service.registerCustomer(registerForm.value).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('Customer registered', 'SUCCESSFUL');

        registerForm.reset();
      },
      (error) => {
        this.toastr.error('Email-Id already registered', 'ERROR');
      }
    );
  }
}
