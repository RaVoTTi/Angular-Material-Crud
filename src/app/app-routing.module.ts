import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { ErrPageComponent } from './404/err-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./locations/location.module').then(m => m.LocationModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'division',
    loadChildren: () => import('./divisions/division.module').then(m => m.DivisionModule),
    canLoad: [AuthGuard]
  },
  {
    path: '404',
    component: ErrPageComponent
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
