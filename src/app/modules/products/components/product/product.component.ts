import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/products/product.interface';
import { ProductService } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }
    )
  }
}
