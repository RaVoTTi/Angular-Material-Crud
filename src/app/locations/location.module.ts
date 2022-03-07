import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';

import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { LocationComponent } from './pages/location/location.component';
import { HomeComponent } from './pages/home/home.component';
import { CardLocationComponent } from './components/card-location/card-location.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    SearchComponent,
    LocationComponent,
    HomeComponent,
    CardLocationComponent,
  ],
  imports: [CommonModule, LocationRoutingModule, FormsModule],
})
export class LocationModule {}
