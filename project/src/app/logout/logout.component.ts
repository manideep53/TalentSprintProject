import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GoogleApiService } from '../google-api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private _router: Router,
    private toastr: ToastrService,
    private googleApi: GoogleApiService
  ) {}
  ngOnInit(): void {
    // this.googleApi.signOut();
    localStorage.removeItem('customer');
    this._router.navigate(['/mainPage']);
    this.toastr.success('You have been Logged out');
  }
}
