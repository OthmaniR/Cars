import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { Observable } from 'rxjs';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styles: [
  ]
})
export class UpdateCarComponent implements OnInit {
  currentcar = new Car();
  types! : Array<Type>;
updateTypeId! : Number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private CarService: CarService) { }

  ngOnInit(): void {
    this.CarService.listeTypes().
    subscribe((typs: any) => {
    console.log(typs);
    this.types=typs;
    });
    
    this.CarService.consulterCars(this.activatedRoute.snapshot.params['id']).
    subscribe( typs =>{ this.currentcar = typs; 
      this.updateTypeId =  this.currentcar.type.typeId;
    
    } ) ;
//     this.currentcar = this.CarService.consultervoiture(
//       this.activatedRoute.snapshot.params['id']
//       );
// console.log(this.currentcar);
  }


  updatecar()
  {
    this.currentcar.type = this.types.find(typ => typ.typeId == this.updateTypeId)!;
         this.CarService.updateCar(this.currentcar).subscribe(ser => {
      this.router.navigate(['cars']); }
      );
  }
  
  
}
