
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: any; //un tableau de chînes de caractères
  constructor(private CarService : CarService, private router : Router,
    public authService: AuthService,)  {  
    // this.cars = CarService.listecars();
   }

  ngOnInit(): void {
    this.CarService.listecars()
    .subscribe(res=>{
      console.log(res)
      this.cars = res
    })

  }
  chargerCars(){
    this.CarService.listecars().subscribe(sers => {
      console.log(sers);
      this.cars = sers;
      });
  }


  DeleteCar( ca: Car){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.CarService.DeleteCar(ca.carId).subscribe(() => {
            console.log("serie supprimée");
            this.chargerCars();     
          
    });
    }

  }

