import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  environment } from "src/environments/environment";
import { RESTLocation } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getLocations(): Observable<RESTLocation>{
    return this.http.get<RESTLocation>(`${this._apiUrl}/location`)
  }
}
