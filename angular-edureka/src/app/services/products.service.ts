import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

    getProductList()
      {
        return this.http.get(`${environment.apiBaseUrl}/products`)
      }

    getProductDetails(id)
      {
        return this.http.get(`${environment.apiBaseUrl}/products/${id}`)
      }
}
