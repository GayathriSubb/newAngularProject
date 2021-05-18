import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductdetailsListingComponent } from './pages/productdetails-listing/productdetails-listing.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    // "" > /
    path: "", component: HomePageComponent, canActivate : [AuthGuard]
  },
  {
    // "products" > /products
    path: "products", component: ProductListingComponent, canActivate : [AuthGuard]
  },
  {
    // "products/:productname" > /products/iphone
    path: "products/:productname", component: ProductdetailsListingComponent, canActivate : [AuthGuard]
  },
  {
    // "products/:productname" > /products/iphone
    path: "login", component: LoginPageComponent
  },
  {
    // "products/:productname" > /products/iphone
    path: "register", component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
