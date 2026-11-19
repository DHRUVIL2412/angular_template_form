import { Component, inject } from '@angular/core';
import { ProductHeader } from '../product-header/product-header';
import { ProductCart } from '../product-cart/product-cart';
import { ProductService, Product } from '../service/product-service';

@Component({
  imports: [ProductHeader, ProductCart],
  selector: 'app-product-main',
  styleUrl: './product-main.css',
  templateUrl: './product-main.html',
})
export class ProductMain {
  private api = inject(ProductService);

  dataFiels: Product[] = this.api.returndataFiels;

  get myList(): Product[] {
    return this.api.ourList;
  }
  get myCount():number{
    return this.myList.length
  }

  removeProds(productName: number): void {
  this.api.removeFromList(productName);
}

  addProducts(productName: string, productPrice: number): void {
    this.api.addValueInMyList(productName, productPrice);
  }

  get addtions():number{
    return this.myList.reduce((sum ,m)=> sum + m.productPrice ,0)
  }

}
