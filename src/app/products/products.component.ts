import { Component, OnInit } from '@angular/core';
import { Bid } from '../bid';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productShow = this.productService.getProductToBeShown();
  user = this.userService.getUser()
  newBid = new Bid();
  currentBids : Bid[] = [];
  constructor(private productService:ProductService, private userService: UserService) { }

  ngOnInit(): void {
    this.getBids();
  }
  addBid(){
    this.newBid.username = this.user.username;
    this.newBid.productId = this.productShow.uid;
    this.newBid.bidAmount = 500;
    this.productService.setBid(this.newBid).subscribe(response=>{
      alert(response.toString())
    });
  }

  getBids(){
    this.productService.getBids(this.productShow).subscribe(data=>{
      this.currentBids = data;
      console.log(this.currentBids);
    });
  }

  


}
