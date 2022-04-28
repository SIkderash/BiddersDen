import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }
  
  API_URL = 'http://127.0.0.1:8000';

  uploadProductImage(image:any) {
    return this.http.post(this.API_URL + '/imageUpload/', image);
  }
  addProduct(product:any) {
    return this.http.post(this.API_URL + '/upload-product-info/', product);
  }
  getAllProducts(): Observable<any[]> {
      return this.http.get<any[]>(this.API_URL + '/products/');
  }
}
