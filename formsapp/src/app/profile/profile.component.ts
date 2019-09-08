import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginForm/login.service';
import { Router} from '@angular/router';



@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    token;
    userinfo;

    constructor(private loginService: LoginService,
                private router: Router) {}

    ngOnInit() {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.loginService.getUserRole(this.token)
            .subscribe((res) => this.userinfo = res);
    }

    logout(): void {
        localStorage.removeItem('TOKEN_NUMBER');
        localStorage.removeItem('ROLE_TYPE');
        this.router.navigate(['/login']);
    }

}
