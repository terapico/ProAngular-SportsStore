import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { Injectable } from "@angular/core";


@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSource) { }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order) {
        return this.dataSource.saveOrder(order);
    }
}