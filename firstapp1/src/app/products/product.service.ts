import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

    private url  = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private http: HttpClient) {}

    getProduct(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.url);
    }

    getProductDetails(id): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.url}?productId=${id}`);
    }
}
