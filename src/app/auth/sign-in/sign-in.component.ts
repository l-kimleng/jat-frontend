import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserValidators } from '../../commons/validators/userValidators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user: User;
  form: FormGroup;
  isDisplayMessage: Boolean;
  message: String;
  success: Boolean;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.user = {
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    };

    this.form = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  login() {
    this._authService.login(this.user)
      .subscribe(res => {
        localStorage.setItem("jat-token", res.headers.get('x-auth-token'));
        this._router.navigate(['/jobs']);
      }, error => {
          this.displayMessage({isSuccess: false, msg: error.message});
      });
  }

  displayMessage(option: any) {
    this.isDisplayMessage = true;
    this.success = option.isSuccess;
    this.message = option.msg;
    setTimeout(() => {
      this.isDisplayMessage = false;
      this.message = "";
    }, 5000); 
  }

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }
}
