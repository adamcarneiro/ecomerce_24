import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    // Aqui pode-se implementar a lógica de autenticação real
    if (username === 'user' && password === 'password') {
      localStorage.setItem('authToken', 'dummy-token');
      this.isLoggedInSubject.next(true);
      return of(true);
    }
    return of(false);
  }

  logout() {
    localStorage.removeItem('authToken');
    this.isLoggedInSubject.next(false);
  }

   hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
