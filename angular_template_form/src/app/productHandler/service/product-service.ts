import { Injectable } from '@angular/core';

export interface Product {
  productName: string;
  productPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataFiels: Product[] = [
    { productName: 'Wireless Mechanical Keyboard', productPrice: 2499 },
    { productName: 'Ergonomic Optical Mouse', productPrice: 899 },
    { productName: '27-Inch 4K Monitor', productPrice: 24500 },
    { productName: 'Noise Cancelling Headphones', productPrice: 4999 },
    { productName: 'USB-C Multiport Hub', productPrice: 1250 },
    { productName: 'Laptop Cooling Pad', productPrice: 1100 },
    { productName: '1080p HD Webcam', productPrice: 1850 },
    { productName: 'Portable SSD 1TB', productPrice: 6499 },
    { productName: 'Adjustable Aluminum Laptop Stand', productPrice: 950 },
    { productName: 'Smart LED Desk Lamp', productPrice: 1499 }
  ];

  private myCartList: Product[] = [];

  get ourList(): Product[] {
    return this.myCartList;
  }

  get returndataFiels(): Product[] {
    return this.dataFiels;
  }

  addValueInMyList(productName: string, productPrice: number): void {
    this.myCartList = [...this.myCartList, { productName, productPrice }];
  }
  removeFromList(Listindex:number){
    this.myCartList = this.myCartList.filter((prodName , index ) => index!==Listindex);
  }
}
