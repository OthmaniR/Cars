import { Type } from './../model/type.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {
  @Input()
  type! : Type;
  @Output()
  TypeUpdated = new EventEmitter<Type>();
  @Input()
  add!:boolean;

  updatedType:Type = {"typeId":0,"typeName":"","TypeDescription":""};
  

  constructor() { }

  ngOnInit(): void {console.log("ngOnInit du composant UpdateCategorie ",this.type);

  }

  saveType(){
    this.TypeUpdated.emit(this.type);
    }
    

}
