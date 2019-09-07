import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
    selector: 'app-form',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit {
    employeeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName: ['John', [Validators.required, Validators.minLength(3)]],
            email: ['a@a', [Validators.required, Validators.pattern('^[a-zA-Z]+@[a-zA-Z]$')]],
            password: ['12345678', [Validators.required, Validators.maxLength(8)]],
            phone: [''],
            notification: ''
        });
    }


    setNotification(notifyVia: string): void {
        const phoneControl = this.employeeForm.get('phone');
        if (notifyVia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
}
