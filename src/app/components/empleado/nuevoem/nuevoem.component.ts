import { Component, OnInit, Input } from '@angular/core';
import { persona  } from '../../../model/persona';
import { EmpleadoService } from '../../../services/empleado.service';
@Component({
  selector: 'app-nuevoem',
  templateUrl: './nuevoem.component.html',
  styleUrls: ['./nuevoem.component.css']
})

export class NuevoemComponent implements OnInit {

  @Input() persona: persona;

  constructor(private empleadoservicio: EmpleadoService) {

   }
  personas = this.empleadoservicio.personas;

  nuevaPersona() {

    if (this.persona.id === 0) {
      this.persona.id = this.personas.length + 1;
      this.personas.push(this.persona);
    }
    this.initObject();
  }
  borrarPersona() {
        console.log(this.persona);
    console.log((this.persona.id - 1));
    this.personas.splice((this.persona.id - 1), 1);
    this.initObject();

  }
  ngOnInit() {
    this.initObject();
  }

  initObject(): void {
    this.persona = new persona();
  }
}
