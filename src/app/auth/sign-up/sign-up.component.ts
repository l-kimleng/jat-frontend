import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User;

  constructor(private _authService: AuthService) {    
  }

  ngOnInit() {
    this.user = {
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    };
  }

  createAccount() {
    this._authService.register(this.user)
      .subscribe(res => {
        console.log(res);
      });
  }
}
