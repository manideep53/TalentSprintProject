import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-vehiclewashing',
  templateUrl: './vehiclewashing.component.html',
  styleUrls: ['./vehiclewashing.component.css'],
})
export class VehiclewashingComponent implements OnInit {
  title = 'Car Washing Services';

  productList: any;

  constructor(
    private _productService: ProductService,

    private _router: Router,
    private _cartService: CartService,
    private _toastr: ToastrService
  ) {
    this.productList = [];
  }
  ngOnInit(): void {
    this._productService.getProduct().subscribe((data) => {
      this.productList = data;
      this.productList.array.forEach((a: any) => {
        Object.assign(a, { productQuantity: 1, total: a.ProductPrice });
      });
    });
  }

  addToCart(item: any) {
    this._cartService.addToCart(item);
    this._router.navigate(['/cart']);
  }

  onLoggedIn() {
    return localStorage.getItem('customer');
  }

  notLoggedIn() {
    this._toastr.warning('You must be logged in to Book Our Service');
  }
}
