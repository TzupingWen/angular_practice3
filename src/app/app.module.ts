import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// 匯入FormsModule用雙向繫結接收input的輸入值
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// 使用HttpClient
import { HttpClientModule } from '@angular/common/http';


// 設定路由
import { AppRoutingModule, routingComponent } from'./app-routing.module';

// 元件
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { ServiceComponent } from './service';
import { VehiclesComponent } from './vehicles';
import { ShoppingComponent } from './shopping';
import { CartComponent } from './cart';
import { BookingComponent } from './booking';
import { ContactusComponent } from './contactus';
import { ProductDetailsComponent } from './product-details';
import { CartService } from './cart.service';
// api
import { VehicleapiComponent } from './vehicleapi';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule放BrowerModule後
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'service', component: ServiceComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'shopping', component: ShoppingComponent },
      { path: 'cart', component: CartComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'contactus', component: ContactusComponent},
      { path: 'vehicleapi', component: VehicleapiComponent },

      // otherwise redirect to home
      { path:'**', redirectTo:'' }
    ])
  ],
  declarations: [
    AppComponent,
    routingComponent,
    HomeComponent,
    ServiceComponent,
    VehiclesComponent,
    ShoppingComponent,
    BookingComponent,
    ContactusComponent,
    ProductDetailsComponent,
    CartComponent,
    VehicleapiComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}