import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
 
  {
    path: 'cart',
    component: CartViewComponent,
  },
  {
    path: 'cart/checkout',
    component: CheckoutFormComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
