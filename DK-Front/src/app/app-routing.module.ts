import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {PadresComponent} from './components/padres/padres.component'

const routes: Routes = [
  {
    path: '',
    component:  MainComponent
  },
  {
    path: 'login',
    component:  LoginComponent
  },
  {
    path: 'sidenav',
    component:  SidenavComponent
  },
  {
    path: 'padres',
    component:  PadresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
