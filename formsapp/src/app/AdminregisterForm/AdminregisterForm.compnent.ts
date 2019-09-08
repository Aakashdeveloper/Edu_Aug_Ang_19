import { Component } from '@angular/core';
import { RegisterModel } from './Adminregister.model';
import { NgForm } from '@angular/forms';
import {RegisterService } from '../registerForm/register.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-adminregister',
    templateUrl: './AdminregisterForm.compnent.html'
})

export class AdminRegisterComponent {

    role: any[] = ['admin', 'user'];

    constructor(private registerService: RegisterService,
                private router: Router) {}

    user = new RegisterModel ('Aakash', 'a@a.com', '12345678', 'admin');

    firstToUpper(value): void {
        if (value.length > 0) {
            this.user.name = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.user.name = value;
        }
    }

    submitForm(form: NgForm): void {
        this.registerService.postUser(form.value)
            .subscribe((res) => this.router.navigate(['/login']));

    }
}
