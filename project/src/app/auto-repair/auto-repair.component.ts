import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-auto-repair',
  templateUrl: './auto-repair.component.html',
  styleUrls: ['./auto-repair.component.css'],
})
export class AutoRepairComponent {
  title = 'Auto Repair Service';
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
