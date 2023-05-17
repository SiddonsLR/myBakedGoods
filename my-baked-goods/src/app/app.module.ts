import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { SearchComponent } from './components/search/search.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardHomeComponent,
    SearchComponent,
    CartViewComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
