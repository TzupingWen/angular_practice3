import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// 匯入FormsModule用雙向繫結接收input的輸入值
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
// pipe試作
import { TaiwanDatePipe } from './vehicle-list/taiwan-date.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    TaiwanDatePipe
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}