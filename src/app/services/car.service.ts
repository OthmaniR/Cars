import { Router } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { Car } from '../model/car.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '../model/type.model';
import { TypeWrapper } from '../model/typeWrapper.model';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

  

export class CarService {

apiURL: string = 'http://localhost:8888/Cars/api';

apiUrlType : string = 'http://localhost:8888/Cars/api/types';

cars! : Car[]; 

  //cars : Car[];

  types! : Type[];
  carResearch! : Car[];
  carResearch2! : Car[];
  
  
  constructor(private http : HttpClient,private router:Router) {}
    // this.brand=[ {idBrand : 1, nomBrand : "Sport"},
    // {idBrand : 2, nomBrand : "Sedan"}]; 
    // this.cars = [
    //   { idvoiture : 1, nomvoiture : "Audi ", prixvoiture : 300.600, dateCreation  : new Date("01/14/2011"),brand :{idBrand : 1, nomBrand : "sedan"} },
    //   { idvoiture : 2, nomvoiture : "porshe ", prixvoiture : 1500.000, dateCreation  : new Date("01/14/2011"),brand :{idBrand : 1, nomBrand : "Sport"} },
    //   { idvoiture : 3, nomvoiture : "BMW ", prixvoiture : 150.000, dateCreation  : new Date("01/14/2011"),brand :{idBrand : 2, nomBrand : "sedan"} },
    //   { idvoiture : 4, nomvoiture : "mercedes ", prixvoiture : 200.000, dateCreation  : new Date("01/14/2011"),brand :{idBrand : 1, nomBrand : "sedan"} },
    // ];
    
      listecars():Observable<Car[]>{
        return this.http.get<Car[]>(this.apiURL);
      }

      ajoutercar( c: Car):Observable<Car>{
        // this.cars.push(c);
        // this.router.navigate(['/cars'])
        return this.http.post<Car>(this.apiURL, c, httpOptions);
      }
     

//       updateCar(c : car){
// // console.log(p);
// this.supprimervoiture(c);
// this.ajoutercar(c);
// }


 DeleteCar(id : Number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
  // consultervoiture(id : Number): Car {
    
    // this.car = this.cars.find(d => d.idvoiture == id)!;
    // return this.car;

    
  // }
  consulterCars(carId: number): Observable<Car> {
    const url = `${this.apiURL}/${carId}`;
    return this.http.get<Car>(url);
    }

  updateCar(c :Car): Observable<Car>
  {
  return this.http.put<Car>(this.apiURL, c, httpOptions);
  }
       triercar(){
        // this.cars = this.cars.sort((n1,n2) => {
        // if (n1.idvoiture! > n2.idvoiture!) {
        // return 1;
        // }
        // if (n1.idvoiture! < n2.idvoiture!) {
        // return -1;
        // }
        // return 0;
        // });
        }
 
 
    listeTypes():Observable<TypeWrapper[]>{
      return this.http.get<TypeWrapper[]>(this.apiUrlType);
      
        }
      
      consulterType(id:Number): Type{
        return this.types.find(ty => ty.typeId == id)!;
        }

       

        //  trierCars(){
        //     this.cars = this.cars.sort((n1,n2) => {
        //       if (n1.carId > n2.carId) {
        //           return 1;
        //       }
        //      if (n1.carId < n2.carId) {
        //           return -1;
        //       }
        //     return 0;
        //   });
        //   } 
          
          

        rechercheType(typeId: Number):Observable< Car[]> {
          const url = `${this.apiURL}/CarType/${typeId}`;
            return this.http.get<Car[]>(url);
            }

           AddType( type: Type):Observable<Type>{
              return this.http.post<Type>(this.apiUrlType, type, httpOptions);
                    }

                    deleteType(id : number) {
                      const url = `${this.apiUrlType}/${id}`;
                      return this.http.delete(url, httpOptions);
                      }
            }
          


   




