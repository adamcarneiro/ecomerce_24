import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private endpoint = 'products';

  constructor(private apiService: ApiService) { }

  getProducts(): Observable<Product[]> {
    return this.apiService.get<Product[]>(this.endpoint);
  }

  addProduct(product: Product): Observable<Product> {
    return this.apiService.post<Product>(this.endpoint, product);
  }

  // Outros métodos como updateProduct, deleteProduct podem ser adicionados aqui
}
