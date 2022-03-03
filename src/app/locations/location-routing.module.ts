import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { LocationComponent } from './pages/location/location.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'edit/:id',
        component: AddComponent,
      },
      {
        path: 'hero/:id',
        component: LocationComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LocationRoutingModule {}
