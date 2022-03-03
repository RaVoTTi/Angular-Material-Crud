import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  environment } from "src/environments/environment";
import {  LocationGet , LocationPost, RESTLocation } from "src/app/interfaces/location.interface";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getLocations(): Observable<RESTLocation>{
    return this.http.get<RESTLocation>(`${this._apiUrl}/location`)
  }
  addLocation(location:LocationPost): Observable<LocationGet>{
    return this.http.post<LocationGet>(`${this._apiUrl}/location`, location)
     
  }
}
