import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { UsuariosService } from './../../../services/usuarios/usuarios.service'
import { CiudadesService } from './../../../services/ciudades/ciudades.service'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  titulo = "Información de usuario:"
  usuarioForm: FormGroup;
  usuario: any;
  ciudades: any;
  usuarios: any;
  current_day: any;
  min_date : any;

  constructor(
    public fb: FormBuilder,
    public usuariosService: UsuariosService,
    public ciudadesService: CiudadesService,
    public datepipe: DatePipe
  ) {
    this.min_date = "2021-08-05"
    this.current_day = this.datepipe.transform(new Date(), 'yyyy-MM-dd')?.toString();
    console.log(this.current_day)
    this.usuarioForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      edad: new FormControl('', [Validators.max(130), Validators.min(0)]),
      email: new FormControl('', [Validators.email]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.maxLength(200)]),
      ciudad: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.ciudadesService.getAll().subscribe(
      resp => { this.ciudades = resp; },
      error => { console.error(error); }
    );
  }

  get_usuario(id: any){
    this.usuariosService.getById(id).subscribe(
      data=>{this.usuario = data},
      error=>{console.error(error)},
      ()=>console.log("usuario loader")
    )
  }

  registrar(): void {
    console.log("registrando")
    this.usuariosService.save(this.usuarioForm.value).subscribe(
      resp => {
        console.log("agregado exitosamente");
        this.limpiar();
      },
      error => {console.error(error)}
    )    
  }

  limpiar(): void{
    this.usuarioForm.reset(); 
  }

  get nombre(){ return this.usuarioForm.get('nombre'); }
  get apellido(){ return this.usuarioForm.get('nombre'); }
  get edad(){ return this.usuarioForm.get('edad'); }
  get email(){ return this.usuarioForm.get('edad'); }
  get fecha_nacimiento(){ return this.usuarioForm.get('edad'); }
  get direccion(){ return this.usuarioForm.get('edad'); }
}
