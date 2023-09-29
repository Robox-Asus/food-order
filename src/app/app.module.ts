import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ImageComponent,
    CartPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbRating,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
