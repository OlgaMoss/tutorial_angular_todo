import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
    selector: 'cart-summary',
    moduleId: module.id,
    templateUrl: 'CartSummary.component.html'
}
)

export class CartSummaryComponent {
    constructor(public cart: Cart) { };
}