import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './components/item/item.component';
import { HomeComponent } from './components/home/home.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';

// modules start

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {
  MatOptionModule,
  MatOptionParentComponent,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './search/filter.pipe';

// modules end

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartViewComponent,
    PageNotFoundComponent,
    ItemComponent,
    HomeComponent,
    CheckoutFormComponent,
    FooterComponent,
    FilterPipe,
  ],
  // modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
