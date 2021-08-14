import { ICiudad } from "../ciudades/ciudad";

export interface IUsuario {
    sec_usuario: number;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;    
    fecha_nacimiento: Date;
    direccion: string;
    ciudad: ICiudad;
}
