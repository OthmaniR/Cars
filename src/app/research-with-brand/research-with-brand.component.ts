import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { AuthService } from '../services/auth.service';
import { CarService } from '../services/car.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-research-with-brand',
  templateUrl: './research-with-brand.component.html',
  styleUrls: ['./research-with-brand.component.css']
})
export class ResearchWithBrandComponent implements OnInit {
car! : Car[];
types!:Array<Type>;
typeId! : Number; //un tableau de chînes de caractères
constructor(private CarService : CarService,private router : Router,
  public authService: AuthService,) { }

  ngOnInit(): void {
    this.CarService.listeTypes().
    subscribe((typs: any) => {
      //this.types = typs._embedded.types;
    console.log(typs);
    this.types=typs;
    });
  }

  onChange(){
    this.CarService.rechercheType(this.typeId).
    subscribe(c =>{this.car=c});
  }



  DeleteCar( ca: Car){

    const index = this.car.indexOf(ca, 0);
    if (index > -1) {
    this.car.splice(index, 1);
    }
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
     this.CarService.DeleteCar(ca.carId);
    
    
    // let conf = confirm("Etes-vous sûr ?");
    //     if (conf)
    //     this.CarService.supprimerProduit(ca);
    //     }
    
      }
}
