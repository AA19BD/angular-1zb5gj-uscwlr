import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products ,Product } from '../products';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{
  
  public categoryId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routeParams.get('categoryId'));
    console.log(this.categoryId);
  }
  // share(product) {
  //   const url: string = window.location.href;
  //   window.alert('The product has been shared!');
  //   window.open(`https://telegram.me/share/url?url=${product.link }&text=${ product.name }`);
  // }
  // onNotify(){
  //   window.alert("You will be notified when the product goes on sale ");
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/