import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'Product 1', 'Category 1', 'Description 1', 100),
        new Product(2, 'Product 2', 'Category 1', 'Description 2', 100),
        new Product(3, 'Product 3', 'Category 1', 'Description 3', 100),
        new Product(4, 'Product 4', 'Category 1', 'Description 4', 100),
        new Product(5, 'Product 5', 'Category 1', 'Description 5', 100),
        new Product(6, 'Product 6', 'Category 2', 'Description 6', 100),
        new Product(7, 'Product 7', 'Category 2', 'Description 7', 100),
        new Product(8, 'Product 8', 'Category 2', 'Description 8', 100),
        new Product(9, 'Product 9', 'Category 2', 'Description 9', 100),
    ];
    getProducts(): Observable<Product[]>{
        return Observable.from([this.products]);
    }
}