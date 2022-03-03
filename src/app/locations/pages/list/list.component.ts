import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import {  Location } from "../../interfaces/location.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
    mat-card{
      margin-top: 10px
    }
    `
  ]
})
export class ListComponent implements OnInit {
  locations : Location[] = []

  constructor(private locationService:LocationService) {
    this.locationService.getLocations().subscribe((resp) => {
      this.locations = resp.locations
    } )
   }

  ngOnInit(): void {

  }

}
