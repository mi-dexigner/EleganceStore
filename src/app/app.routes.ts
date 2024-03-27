import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { MywishlistComponent } from './pages/mywishlist/mywishlist.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'myaccount',component:MyaccountComponent},
  {path:'mywishlist',component:MywishlistComponent},
  // Wildcard route to catch all non-existing routes
  { path: '**', component: NotFoundComponent }
];
