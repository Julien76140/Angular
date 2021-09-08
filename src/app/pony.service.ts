import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Pony} from "./pony";

@Injectable({
  providedIn: 'root'
})
export class PonyService {

  url="http://www.ludivinecrepin.fr/api";

  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getAllPonies(): Observable<Pony[]>{
    return this.http.get<Pony[]>(this.url+'/pony-get.php',this.httpOption);
  }

}
