import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICiudad } from 'src/app/components/ciudades/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private API_SERVER = "http://localhost:8080/gtc/gestion/ciudades/";

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<ICiudad>{
    return this.httpClient.get<ICiudad>(this.API_SERVER);
  }

  public getById(id: number){
    return this.httpClient.get(this.API_SERVER + id)
  }
}
