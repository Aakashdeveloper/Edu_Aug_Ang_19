import { Component } from '@angular/core';
import { ICustomer } from '../modals/customer.model';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})

export class CustomerFormComponent {
    maxdays: any[] = ['1-Day', '2-Days', '3-Days'];
    mycust = new ICustomer ('Alis', '', '', '', true, '', '', '');

    firstToUpper(value): void {
        if (value.length > 0) {
            this.mycust.firstname = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.mycust.firstname = value;
        }
    }
}
