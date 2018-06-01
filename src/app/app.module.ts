import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { JobListComponent } from './jobs/job-list/job-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    JobListComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: SignUpComponent },
      { path: 'register', component: SignUpComponent },
      { path: 'login', component: SignInComponent},
      { path: 'jobs', component: JobListComponent}
    ])  
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
