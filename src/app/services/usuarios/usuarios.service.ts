import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/components/usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private API_SERVER = "http://localhost:8080/gtc/gestion/usuarios/";

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<IUsuario[]>{
    return this.httpClient.get<IUsuario[]>(this.API_SERVER);
  }

  public getById(id: number) : Observable<IUsuario>{
    return this.httpClient.get<IUsuario>(this.API_SERVER + id);
  }

  public save(usuario: IUsuario){
    return this.httpClient.post(this.API_SERVER + "crear/", usuario);
  }

  public delete(id: number):Observable<IUsuario>{
    return this.httpClient.delete<IUsuario>(this.API_SERVER + "eliminar/" + id);
  }
}
