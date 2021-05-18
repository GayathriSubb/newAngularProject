import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/products';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'edureka-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  productsListing : Product[] = [];

  constructor(private products : ProductsService) { }

  ngOnInit(): void {
      this.products.getProductList().subscribe((response : Product[])=>{
          this.productsListing = response
          console.log(this.productsListing);
      })
  }

}
