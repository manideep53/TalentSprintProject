import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-bike-service',
  templateUrl: './bike-service.component.html',
  styleUrls: ['./bike-service.component.css'],
})
export class BikeServiceComponent {
  title = 'Two Wheeler Service';
  productList: any;

  constructor(
    private _productService: ProductService,

    private _cartService: CartService,
    private _router: Router,
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
