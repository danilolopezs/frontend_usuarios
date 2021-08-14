import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component'
import { UsuarioDetalleComponent } from './components/usuarios/usuario-detalle/usuario-detalle.component'
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { MainComponent } from './components/main/main.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CiudadesComponent,
    UsuarioDetalleComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
