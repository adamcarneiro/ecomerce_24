// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent {

// }

import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  isCheckout = false;
  paymentDetails = { cardNumber: '', expiryDate: '', cvv: '' };
  paymentSuccess = false;
  paymentFailed = false;

  constructor(private cartService: CartService,private orderService: OrderService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems$;
  }

  clearCart() {
    this.cartService.clearCart();
  }

  checkout() {
    this.isCheckout = true;
  }

  onSubmitPayment() {
    const order: Order = {
      id: 0, // Pode ser gerado pelo backend
      items: this.cartItems,
      totalAmount: this.cartItems.reduce((acc, item) => acc + item.price, 0),
      customerId: 1,
      orderDate: new Date(),
      status: 'closed'
    };

    this.orderService.completeOrder(order, this.paymentDetails).subscribe(success => {
      if (success) {
        this.paymentSuccess = true;
        this.cartService.clearCart();
        this.isCheckout = false;
      } else {
        this.paymentFailed = true;
      }
    });
  }

  removeFromCart(product: Product):void{
    this.cartService.removeItem(product);
  }


}
