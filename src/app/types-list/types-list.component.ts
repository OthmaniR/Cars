import { CarService } from './../services/car.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: []
})
export class TypesListComponent implements OnInit {
  apiURL: string = 'http://localhost:8888/Cars/api';

apiUrlType : string = 'http://localhost:8888/Cars/api/types';
  types!:Type[];
  add:boolean=true;

  updatedType:Type = {"typeId":0,"typeName":"","TypeDescription":""};
  ajout:boolean=true;

  constructor(
    private http : HttpClient,
    private router: Router,
    private CarService: CarService) { }

  ngOnInit(): void {
    this.chargerTypes();
  }

chargerTypes(){
    this.CarService.listeTypes().
    subscribe((types:any)=>{
      //this.types=types._embedded.types;
    console.log(types);
    this.types=types;
    });
    }

  updateType(type:Type) {
      this.updatedType=type;
      this.add=false;  
    }
typeUpdated(type:Type){
  console.log("type updated event",type);
  this.CarService.AddType(type).
  subscribe(() => this.chargerTypes());
}

DeleteType(type : Type) {
  let conf = confirm("Etes-vous sûr ?");
     if (conf)
     {
       this.CarService.deleteType(type.typeId).subscribe(() => {
        console.log("Type supprimée");
        this.chargerTypes(); }  );
     }
}
AddType( type: Type):Observable<Type>{
  return this.http.post<Type>(this.apiUrlType, type, httpOptions);
        }

        deleteType(id : number) {
          const url = `${this.apiUrlType}/${id}`;
          return this.http.delete(url, httpOptions);
          }
}


