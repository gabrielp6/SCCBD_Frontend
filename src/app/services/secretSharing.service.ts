import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { secretShared } from '../components/interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class SecretSharingService {
  initialized: Promise<void>

  URI = "http://localhost:3000"

  constructor(private http: HttpClient) {
    this.initialized = new Promise((resolve, reject) => {
      this.init().then(() => {
          resolve()
      }).catch(()=>{
          reject()
      })
    })
  }

  private async init(): Promise<void> {
  }

  getSharedKeys(secreto: secretShared): Observable<string[]> {
    console.log("voy a enviar el secreto para crear claves")
    return this.http.post<string[]>(this.URI + "/secretSharing/getSharingKeys", secreto);
  }

  getSecreto(claves: string[]): Observable<string>  {
    console.log("voy a enviar claves para ver el resultado del secreto")
    const clavesAnalizar = {
      claves: claves
    }    
    return this.http.post<string>(this.URI + "/secretSharing/recuperarSecreto", clavesAnalizar)
  }
}

