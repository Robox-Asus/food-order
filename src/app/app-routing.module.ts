import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:id', component: HomeComponent },
  { path: 'cart-page', component: CartPageComponent },

  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
