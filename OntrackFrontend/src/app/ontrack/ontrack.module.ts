import { ProfileComponent } from './components/profile/profile.component';
import { BuyComponent } from './components/buy/buy.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClient } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatIconModule, MatLabel, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatRadioModule } from '@angular/material';
import { OntrackMaterialModule } from './ontrack.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { RegistrationcompComponent } from './components/registrationcomp/registrationcomp.component';
import { DailogComponent } from './components/dailog/dailog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
  import { from } from 'rxjs';
 @NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HomeComponent, CardComponent, SearchComponent, RegistrationcompComponent, DailogComponent, CartComponent, HeaderComponent, LoginComponent, BuyComponent, ProfileComponent],


  imports: [
  CommonModule,
  MatCardModule,
  OntrackMaterialModule,
  BrowserAnimationsModule,
  BrowserModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  FormsModule,
  MatProgressSpinnerModule, MatRadioModule,
  MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    Ng2CarouselamosModule

  ],

  providers: [{ provide: MatDialogModule, useValue: {} },
    { provide: MatIconModule, useValue: [] },
    {
       provide: MatLabel, useValue: {}
    },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: MAT_DIALOG_DATA, useValue: {}
    }
     ],
    entryComponents: [
      DailogComponent,
    ],


  // tslint:disable-next-line:max-line-length
  exports: [HomeComponent, CardComponent, SearchComponent, DailogComponent, RegistrationcompComponent, CartComponent, HeaderComponent, LoginComponent, BuyComponent ]

})
export class OntrackModule { }