import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {VotosComponent} from './components/votos/votos.component'
import {GaleriaComponent} from './components/galeria/galeria.component'
import {ContactComponent} from './components/contact/contact.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'votos', component: VotosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
