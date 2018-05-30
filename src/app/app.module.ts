import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: SignUpComponent },
      { path: 'register', component: SignUpComponent }
    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
