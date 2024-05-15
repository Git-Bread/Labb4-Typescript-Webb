import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obj } from './obj';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private http: HttpClient) {}

  private url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

  getData(): Observable<Obj[]> {  
    return this.http.get<Obj[]>(this.url);
  }
}