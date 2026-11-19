import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-header',
  styleUrl: './product-header.css',
  templateUrl: './product-header.html',
})
export class ProductHeader {
  @Input() ourList = 0
}
