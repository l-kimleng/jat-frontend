import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  
  constructor(private _router: Router) {

  }

  isLogin() {
    var token = localStorage.getItem('jat-token');
    return token;
  }

  logout() {    
    localStorage.removeItem('jat-token');
    this._router.navigate(['/login']);
  }
}
