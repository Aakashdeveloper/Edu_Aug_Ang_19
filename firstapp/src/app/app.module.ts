import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './products/product.component';

// decorator
@NgModule({

    // All the module will be declare are
    imports: [
        BrowserModule
    ],

    // All the component & pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent
    ],

    // Only first component
    bootstrap: [
        AppComponent
    ],

    // All Services
    providers: []

})

export class AppModule {

}
