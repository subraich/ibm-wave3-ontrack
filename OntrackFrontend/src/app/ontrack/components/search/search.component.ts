import { Route } from '@angular/compiler/src/core';

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ontrack } from '../../classes/ontrack';
import { DailogComponent } from '../dailog/dailog.component';
import { MatDialog } from '@angular/material';

@Component({
selector: 'app-search',
templateUrl: './search.component.html',
styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
@Input() Ontrack: any;
private ontracks: Ontrack[];
q: any;
cart: any ;
brand: any;
@Output()
cartAddEvent = new EventEmitter<any>();
dialogResult: any;
products: any = [];
productName: String;
@Input()
product: any;
db: any;

constructor(public dialog: MatDialog, private route: Router, private searchService: SearchService, private ac: ActivatedRoute) { }
ngOnInit() {
   this.brand = this.ac.snapshot.params['brand'];
  this.searchService.searchByProductStartsWith(this.brand).subscribe((res: any) => {
     this.ontracks = res.body;
     console.log(res);
     console.log( this.ontracks);
  });
 }
 AddToCart(product): void {
   console.log(product, 'click event call');
   this.cartAddEvent.emit(product);
   this.Ontrack.cart = product;
  this.route.navigateByUrl('/AddToCart');
  this.db.list('/products').valueChanges().subscribe(data => {
   console.log('data value', data);
 });
 this.db.list('/products').push(product);

 }
 buys() {
   this.route.navigate([ '/', 'buys']);
 }

 openDialog(o): void {
   console.log(o, 'this is the data ');
  const dialogRef = this.dialog.open(DailogComponent,  {
    data: { o }
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.dialogResult = result;
   });

}
}
