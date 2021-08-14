import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioDetalleComponent } from './components/usuarios/usuario-detalle/usuario-detalle.component';

const routes: Routes = [  
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      {path: 'usuario/:id', component: UsuarioDetalleComponent}
    ] 
  },
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
