import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { RegistarFormComponent } from './components/registar-form/registar-form.component';
import { CakeViewComponent } from './components/cake-view/cake-view.component';
import { CookiesViewComponent } from './components/cookies-view/cookies-view.component';
import { BrowniesViewComponent } from './components/brownies-view/brownies-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    CartViewComponent,
    CollectionViewComponent,
    ItemViewComponent,
    RegistarFormComponent,
    CakeViewComponent,
    CookiesViewComponent,
    BrowniesViewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
