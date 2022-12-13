import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-liste-brands',
  templateUrl: './liste-brands.component.html',
  styleUrls: ['./liste-brands.component.css']
})
export class ListeBrandsComponent implements OnInit {
  types! : Type[];
  updatedType:Type = {"typeId":0,"typeName":"","TypeDescription":""};
  ajout:boolean=true;
  constructor(private CarService : CarService) { }

  ngOnInit(): void {
    this.CarService.listeTypes().
    subscribe((types:any)=>{
      //this.types=types._embedded.types;
    console.log(types);
    this.types=types;
    });
    }

}
