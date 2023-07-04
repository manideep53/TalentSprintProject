import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ToastrModule } from 'ngx-toastr';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AutoRepairComponent } from './auto-repair/auto-repair.component';
import { BikeServiceComponent } from './bike-service/bike-service.component';
import { CarDetailingComponent } from './car-detailing/car-detailing.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GenderPipe } from './gender.pipe';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { ShowCustomerDetailsComponent } from './show-customer-details/show-customer-details.component';
import { ShowMoreComponent } from './show-more/show-more.component';
import { VehicleServicesComponent } from './vehicle-services/vehicle-services.component';
import { VehiclewashingComponent } from './vehiclewashing/vehiclewashing.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    AboutUsComponent,
    VehiclewashingComponent,
    HomeComponent,
    GenderPipe,
    CartComponent,
    CarDetailingComponent,
    ShowCustomerDetailsComponent,
    AccessoriesComponent,
    CheckoutComponent,
    ViewProfileComponent,
    VehicleServicesComponent,
    ShowMoreComponent,
    AutoRepairComponent,
    BikeServiceComponent,
    ContactUsComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,

    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
