import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { ServiceComponent } from './service';
import { VehiclesComponent } from './vehicles';
import { ShoppingComponent } from './shopping';
import { BookingComponent } from './booking';
import { ContactusComponent } from './contactus';
import { CartComponent } from './cart';
import { ProductDetailsComponent } from './product-details';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'cart', component: CartComponent },
  {path: 'booking', component: BookingComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'products/:productId', component: ProductDetailsComponent},
  
  // otherwise redirect to home
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ServiceComponent, VehiclesComponent, ShoppingComponent, BookingComponent, ContactusComponent, CartComponent, ProductDetailsComponent]