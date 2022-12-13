import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  cars! : Car[];
  nomCar! : Car[];
  allCars! : Car[];
  searchTerm!:string;
  constructor(private CarService : CarService,private router : Router,
    public authService: AuthService,) { }

  ngOnInit(): void {
    this.CarService.listecars().subscribe(car=>{
      console.log(car);
      this.cars=car;
      this.allCars=car;
          })
  }

  onKeyUp(filterText : string){
    this.cars=this.allCars.filter(item=>
      item.carName.toLowerCase().includes(filterText));

}}