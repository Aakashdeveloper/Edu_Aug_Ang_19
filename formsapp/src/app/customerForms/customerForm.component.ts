import { Component } from '@angular/core';
import { ICustomer } from '../modals/customer.model';
import { NgForm } from '@angular/forms';
import {FormPosterService } from '../services/form-poster.service';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})

export class CustomerFormComponent {
    maxdays: any[] = ['1-Day', '2-Days', '3-Days'];
    mycust = new ICustomer ('Alis', '', '', '', true, '', '', '');
    hasDayError: Boolean = false;


    constructor(private formPosterService: FormPosterService) {}
    firstToUpper(value): void {
        if (value.length > 0) {
            this.mycust.firstname = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.mycust.firstname = value;
        }
    }

    validateDays(event): void {
        if (this.mycust.maxday === 'default') {
            this.hasDayError = true;
        } else {
            this.hasDayError = false;
        }
    }

    submitForm(form: NgForm): void {
        // console.log(form.value);
        this.formPosterService.postCustomer(form.value)
            .subscribe((res) => console.log('Data Submitted'));
    }
}
