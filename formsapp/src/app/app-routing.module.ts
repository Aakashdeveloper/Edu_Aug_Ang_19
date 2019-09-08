import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './registerForm/registerForm.compnent';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminRegisterComponent } from './AdminregisterForm/AdminregisterForm.compnent';
import { LoginGaurdService } from './login-gaurd.service';
import { AdminGaurdService } from './admin-gaurd.service';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'profile', canActivate: [LoginGaurdService],  component: ProfileComponent},
  {path: 'adminRegister', canActivate: [AdminGaurdService], component: AdminRegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGaurdService, LoginGaurdService]
})
export class AppRoutingModule { }
