import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { ToastrService } from 'ngx-toastr';
import { GoogleApiService } from '../google-api.service';
import { ProjectService } from '../project.service';
import { Customer } from './../customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  customer = new Customer();

  constructor(
    private _router: Router,
    private _projectservice: ProjectService,
    private toastr: ToastrService,

    private googleApi: GoogleApiService
  ) {}
  ngOnInit(): void {}

  googleLogin() {
    this.googleApi.login();
    this.googleApi.userProfileSubject.subscribe(
      (info) => {
        console.log(info);

        this._projectservice.setUserLoggedIn();
        localStorage.setItem('customer', JSON.stringify(info));

        this.toastr.success('You have signed in successfully');
        this._router.navigate(['/home']);
      },
      (error: any) => {
        this.toastr.error('Login Failed..!', 'Error');
      }
    );
  }
  loginFormSubmit() {
    this._projectservice.loginFromDatabase(this.customer).subscribe(
      (data) => {
        this.toastr.success('You have signed in successfully');
        console.log('response received');
        localStorage.setItem('customer', JSON.stringify(data));
        this._projectservice.setUserLoggedIn();
        this._router.navigate(['/home']);
      },
      (error) => {
        this.toastr.error(
          'Bad Credentials, Please Enter valid Email Address and Password',
          'Login Failed..!'
        );
      }
    );
  }
}
