import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { NotFoundComponent } from './shared/NotFound.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';


// decorator
@NgModule({

    // All the module will be declare are
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        AppRoutingModule
    ],

    // All the component & pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent
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
