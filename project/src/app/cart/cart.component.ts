import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
  products: any = [];
  grandTotal!: number;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.getProducts().subscribe((data) => {
      this.products = data;
      this.grandTotal = this._cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this._cartService.removeFromCart(item);
  }

  emptyCart() {
    this._cartService.removeAllCart();
  }
}
