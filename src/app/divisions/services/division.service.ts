import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  RESTDivision } from "src/app/interfaces/division.interface";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  private _apiUrl = environment.apiUrl

  constructor(private http:HttpClient) { }

  getDivisions():Observable<RESTDivision>{
    return this.http.get<RESTDivision>(`${this._apiUrl}/division`)
  }

}
