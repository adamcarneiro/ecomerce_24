import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor() { }

  processPayment(order: Order, paymentDetails: any): Observable<boolean> {
    // Aqui pode-se implementar a lógica de pagamento real
    console.log('Processando pagamento...', order, paymentDetails);
    // Simulando uma resposta bem-sucedida do pagamento
    return of(true);
  }
}
