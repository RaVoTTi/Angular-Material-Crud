import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import {  LocationGet} from "src/app/interfaces/location.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

})
export class ListComponent implements OnInit {
  locations : LocationGet[] = []

  constructor(private locationService:LocationService) {
    this.locationService.getLocations().subscribe((resp) => {
      this.locations = resp.locations
    } )
   }

  ngOnInit(): void {

  }

}
