import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uni } from '../interface/universidad.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url: string = "http://universities.hipolabs.com/search"


  constructor(private http:HttpClient) { }

getUser(){
  return this.http.get(this.url);
}
Enviar(sesion:any){
  
  return this.http.post(this.url,sesion);

}
Buscar(pais:string){
  return this.http.post(this.url,pais);
  
}


}
