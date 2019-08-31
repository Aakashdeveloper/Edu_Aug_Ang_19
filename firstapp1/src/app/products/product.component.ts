import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    styles: [
        `.online{
            background-color:gray
        }`
    ]
})

export class ProductComponent implements OnInit  {
    title: string  = 'Products List';
    showTable: boolean = true;
    showImage: boolean = false;
    userText: string;
    imageWidth: number = 100;
    serverStatus: String = 'Offline';

    constructor(private productservice: ProductService ) {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    products: IProduct[];

    ngOnInit(): void {
       this.productservice.getProduct()
        .subscribe((data) => this.products = data);
    }

    getColor(){
        return this.serverStatus === 'Online' ? 'green': 'red'
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    dataRecive(message:string): void{
        this.title = "Products List >>> "+message
    }
}
