import { LocationService } from './../../services/location.service';
import { DivisionService } from './../../../divisions/services/division.service';
import { Component, OnInit } from '@angular/core';


import { IdName } from '../../../interfaces/division.interface';
import { LocationPost } from '../../../interfaces/location.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  divisions: IdName[] = [
    {
      _id: '1',
      name: 'opt 1',
    },
  ];
  divisionName: string = ''
  newDivision: string = ''

  location: LocationPost = {
    title: '',
    description: '',
    number: '',
    schedule: '',
    division: '',
    urlImage: '',
    urlLocation: '',

  };
  constructor(private divisionService:DivisionService, private LocationService:LocationService) {
    this.divisionService.getDivisions().subscribe( resp => {
      this.divisions = resp.divisions
    })
  }

  ngOnInit(): void {}
  save() {
    if (this.location.title.trim().length <= 0) {
      return;
    }
    if (this.divisionName.trim().length <= 0) {
      return;
    }
    this.divisions.forEach(({name, _id}) => {
      if(name === this.divisionName){
          this.location.division = _id
      }
    })
    this.LocationService.addLocation(this.location).subscribe(console.log)

  }
}
