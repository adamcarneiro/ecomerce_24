import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Order } from '../models/order.model';
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private endpoint = 'orders';

  constructor(private apiService: ApiService, private paymentService: PaymentService) { }

  getOrders(): Observable<Order[]> {
    return this.apiService.get<Order[]>(this.endpoint);
  }

  addOrder(order: Order): Observable<Order> {
    return this.apiService.post<Order>(this.endpoint, order);
  }

  // Outros métodos como updateOrder, deleteOrder podem ser adicionados aqui

  completeOrder(order: Order, paymentDetails: any): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.paymentService.processPayment(order, paymentDetails).subscribe(paymentSuccess => {
        if (paymentSuccess) {
          this.addOrder(order).subscribe(() => {
            observer.next(true);
            observer.complete();
          });
        } else {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}
