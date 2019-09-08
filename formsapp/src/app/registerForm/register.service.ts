import { Injectable } from '@angular/core';
import { RegisterModel } from './register.model';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class RegisterService {
    private url = 'http://localhost:5000/api/auth/register';

    constructor(private http: HttpClient) { }

    postUser(register: RegisterModel) {
        return this.http.post(this.url, register);
    }
}
