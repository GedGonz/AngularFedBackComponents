import { Component, OnInit, Input } from '@angular/core';
import { persona  } from '../../../model/persona';
import { EmpleadoService } from '../../../services/empleado.service';
@Component({
  selector: 'app-nuevoem',
  templateUrl: './nuevoem.component.html',
  styleUrls: ['./nuevoem.component.css']
})

export class NuevoemComponent implements OnInit {

  personas = this.empleadoservicio.personas;

  @Input() persona: persona;

  constructor(private empleadoservicio: EmpleadoService) {

   }


  nuevaPersona() {
    this.persona.id = this.personas.length + 1;
    this.personas.push(this.persona);
    this.persona = new persona();
  }
  ngOnInit() {
    this.persona = new persona();
  }
}
