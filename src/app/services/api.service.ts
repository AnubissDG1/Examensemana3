import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uni } from '../interface/universidad.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url: string = "http://universities.hipolabs.com/search?country="



  constructor(private http:HttpClient) { }


Buscar(pais:string):Observable<any>{
  const url = `${this.url}${pais}`;
  return this.http.get(this.url);
}


}
