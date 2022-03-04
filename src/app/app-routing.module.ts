import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrPageComponent } from './shared/err-page/err-page.component';


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
