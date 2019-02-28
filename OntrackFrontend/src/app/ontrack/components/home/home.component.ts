import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  productDTO: any = [];

  constructor(private route: Router) { }

  ngOnInit() {
  }
  Login() {
    this.route.navigate(['/' , 'login']);
  }
  Signup() {
    this.route.navigate(['/' , 'Signup']);
  }
 Profile() {
    this.route.navigate(['/' , 'profile']);
  }
  search() {
    if (this.productDTO.Product_name !== '') {
     this.productDTO = this.productDTO.filter(res => {
       return res.this.productDTO.Product_name.toLocaleLowerCase().match(this.productDTO.Product_name.toLocaleLowerCase());
     });
    } else if (this.productDTO.Product_name === '') {
      this.ngOnInit();
    }
  }
}
