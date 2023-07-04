import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, UserInfo } from 'angular-oauth2-oidc';
import { ToastrService } from 'ngx-toastr';
import { GoogleApiService } from '../google-api.service';
import { ProjectService } from '../project.service';
declare var jQuery: any;

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  customer: any;
  receivedData: any;
  customerToUpdate: any;

  // userInfo: UserInfo | undefined;
  constructor(
    private _service: ProjectService,
    private _toastr: ToastrService,
    private _router: Router,
    private readonly oAuthService: OAuthService,
    private readonly _googleapi: GoogleApiService
  ) {
    this.customerToUpdate = {
      id: '',
      name: '',
      gender: '',
      phoneNumber: '',
      address: '',
      emailId: '',
      password: '',
    };
  }
  ngOnInit(): void {
    this.receivedData = localStorage.getItem('customer');
    this.customer = JSON.parse(this.receivedData);

    // this._googleapi.userProfileSubject.subscribe((info: any) => {
    //   this.userInfo = info;
    // });
  }

  edit(customer: any) {
    this.customerToUpdate = customer;
  }

  updateCustomer() {
    this._service.updateCustomer(this.customerToUpdate).subscribe((data) => {
      console.log(data);
    });
  }

  // loginFormSubmit() {
  //   this.receivedData = localStorage.getItem('customer');
  //   return (this.customer = JSON.parse(this.receivedData));
  // }

  // isGoogleLoggedIn(): boolean {
  //   return this._googleapi.isGoogleLoggedIn();
  // }
}
