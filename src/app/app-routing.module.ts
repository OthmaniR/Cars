import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CarGuard } from './car.guard';
import { ResearchWithBrandComponent } from './research-with-brand/research-with-brand.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { TypesListComponent } from './types-list/types-list.component';



const routes: Routes = [

  {path: "cars", component : CarsComponent},
  {path: "cars", component : CarsComponent},
  {path: "add-car", component : AddCarComponent,canActivate:[CarGuard]},
  {path: "updateCar/:id", component: UpdateCarComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "research-with-brand", component : ResearchWithBrandComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeTypes", component : TypesListComponent},
{ path: "", redirectTo: "cars", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




