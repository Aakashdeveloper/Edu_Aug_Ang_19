import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './registerForm/registerForm.compnent';
import { RegisterService } from './registerForm/register.service';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginService } from './loginForm/login.service';
import { AdminRegisterComponent } from './AdminregisterForm/AdminregisterForm.compnent';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginFormComponent,
    ProfileComponent,
    AdminRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
