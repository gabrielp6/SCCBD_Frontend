import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { VotosComponent } from './components/votos/votos.component';
import { LoginComponent } from './components/login/login.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactComponent } from './components/contact/contact.component';
import { SecretSharingComponent } from './components/secretSharing/secretSharing.component';
import { PaillierComponent } from './components/paillier/paillier.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VotosComponent,
    LoginComponent,
    GaleriaComponent,
    ContactComponent,
    SecretSharingComponent,
    PaillierComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

