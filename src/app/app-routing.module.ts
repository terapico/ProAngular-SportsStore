import { StoreFirstGuard } from './storeFirst.guard';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
  { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]},
  { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
  { path: "admin", loadChildren: "./admin/admin.module#AdminModule"},
  { path: "**", redirectTo: "/store"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
