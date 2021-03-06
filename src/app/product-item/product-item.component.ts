import { Component, OnInit,Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products =products;
  
  @Input()  categoryId: number;
  constructor() { }

 
  remove(product){
    product.check=false;

  }
  like(product){
    product.likes+=1;
  }
   ngOnInit() {
  }
  share(product) {
    const url: string = window.location.href;
    window.alert('The product has been shared!');
    window.open(`https://telegram.me/share/url?url=${product.link }&text=${ product.name }`);
  }
  onNotify(){
    window.alert("You will be notified when the product goes on sale ");
  }


}