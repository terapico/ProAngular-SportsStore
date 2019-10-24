import { AuthService } from './auth.service';
import { RestDataSource } from './rest.datasource';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Order, OrderRepository, {provide: StaticDataSource, useClass: RestDataSource}, RestDataSource, AuthService]
})
export class ModelModule { }