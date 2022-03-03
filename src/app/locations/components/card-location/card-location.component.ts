import { Component, Input, OnInit } from '@angular/core';
import {  LocationGet , RESTLocation } from "src/app/interfaces/location.interface";

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styles: [
    `
    mat-card{
      margin-top: 10px;
      min-width: 200px
    }

    `

  ]
})
export class CardLocationComponent implements OnInit {

  @Input() location!: LocationGet;
  constructor() { }

  ngOnInit(): void {
  }

}
