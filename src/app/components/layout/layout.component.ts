// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-layout',
//   templateUrl: './layout.component.html',
//   styleUrl: './layout.component.css'
// })
// export class LayoutComponent {

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private authService: AuthService, private router: Router, private cartService: CartService) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getTotalItemsCar(): number{
    return this.cartService.getCartItems().length;
  }
}
