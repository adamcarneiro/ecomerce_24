// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './services/api.service';
import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { PaymentService } from './services/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CartService,
    ProductService,
    CustomerService,
    OrderService,
    PaymentService,
    ApiService,
    AuthGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
