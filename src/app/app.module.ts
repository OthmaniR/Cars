import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { UpdateCarComponent } from './update-car/update-car.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ResearchWithBrandComponent } from './research-with-brand/research-with-brand.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeBrandsComponent } from './liste-brands/liste-brands.component';
import { TypesListComponent } from './types-list/types-list.component';
import { UpdateTypeComponent } from './update-type/update-type.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCarComponent,
    UpdateCarComponent,
    LoginComponent,
    ForbiddenComponent,
    ResearchWithBrandComponent,
    RechercheParNomComponent,
  
    ListeBrandsComponent,
       TypesListComponent,
       UpdateTypeComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
