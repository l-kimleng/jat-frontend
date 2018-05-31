import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserValidators } from '../../commons/validators/userValidators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User;
  form: FormGroup;

  constructor(private _authService: AuthService) {    
  }

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
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(),
      isAgree: new FormControl('', Validators.requiredTrue)
    });
  }

  confirmPasswordValidation() {
    if(this.user.password != this.user.confirmPassword) {
      this.form.get('confirmPassword').setValidators(UserValidators.confirmPasswordNotMatched(this.user.password));
    }  
  }

  createAccount() {
    this._authService.register(this.user)
      .subscribe(res => {
        console.log(res);
      });
  }

  get name() {
    return this.form.get('name');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get email() {
    return this.form.get('email');
  }
}