import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmpleadoService } from '../../../services/empleado.service';
import { persona  } from '../../../model/persona';
@Component({
  selector: 'app-listem',
  templateUrl: './listem.component.html',
  styleUrls: ['./listem.component.css']
})
export class ListemComponent implements OnInit {


  constructor(private empleadoservicio: EmpleadoService) {

   }
   personas = this.empleadoservicio.personas;

  @Output() eventseleccion: EventEmitter<persona> = new EventEmitter<persona>();

  ngOnInit() {
  }

  editarPersona(person: persona) {
   this.eventseleccion.emit(person);
   console.log(person);
  }

}
