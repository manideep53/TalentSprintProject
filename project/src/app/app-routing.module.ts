import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AuthGuard } from './auth.guard';
import { AutoRepairComponent } from './auto-repair/auto-repair.component';
import { BikeServiceComponent } from './bike-service/bike-service.component';
import { CarDetailingComponent } from './car-detailing/car-detailing.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { ShowCustomerDetailsComponent } from './show-customer-details/show-customer-details.component';
import { VehicleServicesComponent } from './vehicle-services/vehicle-services.component';
import { VehiclewashingComponent } from './vehiclewashing/vehiclewashing.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'mainPage', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  {
    path: 'vehiclewashing',

    component: VehiclewashingComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'carDetailing',

    component: CarDetailingComponent,
  },
  {
    path: 'customerDetails',
    canActivate: [AuthGuard],
    component: ShowCustomerDetailsComponent,
  },
  {
    path: 'accessories',
    component: AccessoriesComponent,
  },
  { path: 'checkout', component: CheckoutComponent },

  { path: 'viewProfile', component: ViewProfileComponent },
  {
    path: 'vehicleservices',

    component: VehicleServicesComponent,
  },
  {
    path: 'autoRepair',

    component: AutoRepairComponent,
  },
  {
    path: 'bikeService',

    component: BikeServiceComponent,
  },
  {
    path: 'contactUs',

    component: ContactUsComponent,
  },
  { path: 'mainPage', component: MainPageComponent },

  // {
  //   path: 'employee',
  //   canActivate: [AuthenticGuard],
  //   component: EmployeeComponent,
  // },
  // {
  //   path: 'products',
  //   canActivate: [AuthenticGuard],
  //   component: ProductComponent,
  // },
  // {
  //   path: 'profile',
  //   canActivate: [AuthenticGuard],
  //   component: ProfileComponent,
  // },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
