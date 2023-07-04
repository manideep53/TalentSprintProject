import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItem: number = 0;
  constructor(
    private _cartService: CartService,
    private readonly oAuthService: OAuthService
  ) {}

  ngOnInit(): void {
    this._cartService.getProducts().subscribe((data) => {
      this.totalItem = data.length;
    });
  }

  onLoggedIn() {
    return localStorage.getItem('customer');
  }
}
