import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule  } from '@angular/flex-layout';
import { LocationRoutingModule } from './location-routing.module';

import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { LocationComponent } from './pages/location/location.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    SearchComponent,
    LocationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class LocationModule { }
