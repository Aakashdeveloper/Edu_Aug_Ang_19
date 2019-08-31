import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './products/product.component';

import { DiscountPipe } from './products/discont.pipe';
import { ProductSearchPipe } from './products/productFilter.pipe';
import { ProductService } from './products/product.service';
import { MyUpperPipe } from './products/myupper.pipe';
import { StarComponent } from './shared/star.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/NotFound.component';


// decorator
@NgModule({

    // All the module will be declare are
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'product/:id', component: ProductDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ])
    ],

    // All the component & pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        StarComponent,
        HomeComponent,
        OrderComponent,
        ProductDetailComponent,
        NotFoundComponent
    ],

    // Only first component
    bootstrap: [
        AppComponent
    ],

    // All Services
    providers: [
        ProductService
    ]

})

export class AppModule {

}
