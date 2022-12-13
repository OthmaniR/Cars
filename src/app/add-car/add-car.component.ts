
import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Type } from '../model/type.model';
import { TypeService } from '../services/type.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: []
})
export class AddCarComponent implements OnInit {

  newcar = new Car();
  type! : Type;
  types! : Array<Type>;
newTypeId! : Number;
newType! : Type;
  constructor(private carServices: CarService, private typeService: TypeService,
    private router : Router) { }

  ngOnInit(): void {
    this.carServices.listeTypes().
          subscribe((typs: any) => {
            //this.types = typs._embedded.types;
            console.log(typs);
            this.types=typs;
    })
  }

  addcar(){
    this.newcar.type = this.types.find(typ => typ.typeId == this.newTypeId)!;
    this.carServices.ajoutercar(this.newcar)
                      .subscribe((res:any)=> {
                      console.log(res);
                      this.router.navigate(['cars']);
                     
                      }); 
    }

    }


