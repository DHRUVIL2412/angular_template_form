import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../service/product-service';

@Component({
  imports: [CommonModule],
  selector: 'app-product-cart',
  styleUrl: './product-cart.css',
  templateUrl: './product-cart.html',
})
export class ProductCart {
@Input() ProductLists: Product[] = [];
@Output() prodRemode = new EventEmitter<number>();

removeItem(productTitle: number): void {
  this.prodRemode.emit(productTitle);
}
}
