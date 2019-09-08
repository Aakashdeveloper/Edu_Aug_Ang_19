import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './loginForm.component.html'
})

export class LoginFormComponent {
    login = new LoginModel ('', '');


    constructor(private loginService: LoginService,
                private router: Router) {}


    submitForm(form: NgForm): void {
        this.loginService.postLogin(form.value)
            .subscribe((res) => this.loginService.getUserRole(res["token"])
            .subscribe((response) => this.userRole(response["role"])) );
    }

    userRole(typeOfUser): void {
        localStorage.setItem('ROLE_TYPE', typeOfUser);
        this.router.navigate(['/profile']);
    }
}
