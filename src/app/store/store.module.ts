import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cartDetail.component';
import { CounterDirective } from './counter.directive';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/model.module';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CartSummaryComponent } from './cartSummary.component';


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }