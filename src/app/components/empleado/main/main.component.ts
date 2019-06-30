import { Component, OnInit } from '@angular/core';
import { persona  } from '../../../model/persona';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  personaseleccionada: persona;
  ngOnInit() {
  }

}
