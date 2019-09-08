import { Injectable } from '@angular/core';
import { LoginModel } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LoginService {
    private url = 'http://localhost:5000/api/auth/login';
    private userInfo = 'http://localhost:5000/api/auth/userinfo';

    constructor(private http: HttpClient) {}

    postLogin(login: LoginModel) {
        return this.http.post(this.url, login);
    }

    getUserRole(token) {
        localStorage.setItem('TOKEN_NUMBER', token);
        return this.http.get(this.userInfo, {headers: {'x-access-token': token}});

    }
}
