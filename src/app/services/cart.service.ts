import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  get cartItems$ (){
    return this.cartItemsSubject.value;
  }

  constructor() { }

  addToCart(product: Product) {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentItems, product]);
    alert(product.name + ' Adicionado com sucesso ao carrinho.')
  }

  getCartItems(): Product[] {
    return this.cartItemsSubject.value;
  }

  removeItem(item:Product):void{
      this.cartItemsSubject.value.splice(this.cartItemsSubject.value.findIndex(a=>a.id==item.id),1)
  }

  clearCart() {
    this.cartItemsSubject.value.splice(0,this.getCartItems().length);
  }
}
