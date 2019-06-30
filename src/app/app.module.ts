import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoemComponent } from './components/empleado/nuevoem/nuevoem.component';
import { ListemComponent } from './components/empleado/listem/listem.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/empleado/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    NuevoemComponent,
    ListemComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
