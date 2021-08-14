import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../services/usuarios/usuarios.service'
import { IUsuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario : any;
  tituloPagina = 'Lista de Usuarios';
  listaUsuarios: IUsuario[] = [];
  listaUsuariosFiltro: IUsuario[] = [];
  _filtroUsuario: string = "";
  errorMessage: string = "";

  constructor(public usuariosService: UsuariosService) { }

  performFilter(filterBy: string): IUsuario[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listaUsuarios.filter((user: IUsuario) =>
      user.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      user.apellido.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.usuariosService.getAll().subscribe(
      resp => {
        this.listaUsuarios = resp;
        this.listaUsuariosFiltro = this.listaUsuarios;
      },
      error => this.errorMessage = <any>error);
  }

  get filtroUsuario(): string {
    return this._filtroUsuario;
  }

  set filtroUsuario(value: string) {
    this._filtroUsuario = value;
    this.listaUsuariosFiltro = this.filtroUsuario
      ? this.performFilter(this.filtroUsuario) 
      : this.listaUsuarios;
  }
}
