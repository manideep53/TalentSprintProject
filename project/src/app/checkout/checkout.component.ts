import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  name: string = '';
  phoneNumber: string = '';
  address: string = '';
  emailId: string = '';
  grandTotal: any;
  paymentHandler: any = null;
  constructor(
    private _service: ProjectService,
    private toastr: ToastrService,
    private _cartService: CartService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.grandTotal = this._cartService.getTotalPrice();
    this.invokeStripe();
  }

  // getCustomerDetails() {
  //   this._service.getAllCustomers().subscribe((data) => {
  //     console.log(data);
  //     this.customers = data;
  //   });
  // }

  initializePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
      locale: 'auto',

      token: function (stripeToken: any) {
        console.log({ stripeToken });

        alert('Payment Successfull....!');
      },
    });

    paymentHandler.open({
      name: 'Garage Genius',
      description: 'Serving you with the best',
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MSx31SHnxP6PXXDnAio65UHliFfb0riODZ3ldt7d3DvzEdntRMSGNU27APigKFKIjVfHDJm23AczOkZEmQuwOmR00M8SiEqdp',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment successfull...!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  clearInput() {
    this.name = '';
    this.phoneNumber = '';
    this.address = '';
    this.emailId = '';
    this.toastr.success('Bill Generated Successfully...!');
  }
}
