import { Injectable } from '@angular/core';
import { persona  } from '../../app/model/persona';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  public personas: persona[] = [
    { id: 1, nombre: 'Gerald', pais: 'Nicaragua'},
    { id: 2, nombre: 'Pedro', pais: 'Costa Rica'}
  ];
  public _persona: persona = new persona();
  constructor() { }

  editarEmpleadoServicio(person: persona)  {
    console.log(person);
    // this._persona = person;
  }
}
