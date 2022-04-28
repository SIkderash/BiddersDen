import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Emitters } from '../emiiters/Emitter';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userdata!: any;
  
  products:Product[] = [];
  constructor(private userService:UserService, private service: ProductService) { }

  ngOnInit(): void {
    this.authenticate();
    this.getProducts();
  }
  authenticate(){
    this.userService.authenticate().subscribe(response => {
      this.userdata = response;
      this.userService.setUser(this.userdata);
      alert("Logged In as .. " + String(this.userdata.username) )
      Emitters.authEmitter.emit(true);
    },
    err => {
      alert("not Logged In")
      Emitters.authEmitter.emit(false);
    }
  );
  }

  getProducts(){
    this.service.getAllProducts().subscribe(data=>{
      this.products = data;
      console.log(this.products);
    });
  }

}
