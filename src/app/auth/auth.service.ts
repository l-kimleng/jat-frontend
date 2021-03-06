import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(private _http: HttpClient) { }

    register(user: User) {
        return this._http.post(`${environment.apiUrl}/api/register`, {
            name: user.name,
            email: user.email,
            password: user.password
        },
        {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            observe: 'response'
        });
    }

    login(user: User) {
        return this._http.post(`${environment.apiUrl}/api/login`, {
            email: user.email,
            password: user.password
        }, 
        {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            observe: 'response'
        });
    }

    getCurrentUser(token) {
        return this._http.get(`${environment.apiUrl}/api/login/me`, {
            headers: new HttpHeaders().set('x-auth-token', token)
        });
    }
}
