import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Race } from "./race";

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  url="http://www.ludivinecrepin.fr/api";

  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getAllRace(): Observable<Race[]>{
    return this.http.get<Race[]>(this.url+'/race-get.php',this.httpOption);
  }

  getRace(id: number): Observable<Race>{
    return this.http.get<Race>(this.url+'/pony-get-id.php/'+id,this.httpOption);
  }

  addRace(p: Race):void{
    this.http.post<Race>(this.url+'/race-add.php',p,this.httpOption).subscribe();
  }

}
