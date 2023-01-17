import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as rsa from 'my-modulos'
import * as bc from 'bigint-conversion'

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotosService {
  publicKey!: rsa.PublicKey
  privateKey!: rsa.PrivateKey
  serverPublicKey!: rsa.PublicKey
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
    const keyPair = await rsa.generateKeys()
    this.privateKey = keyPair.privateKey
    this.publicKey = keyPair.publicKey

    const receivedPublicKey = await firstValueFrom(this.getPublicKey()) as PublicKey
    this.serverPublicKey = jsonToPublicKey(receivedPublicKey)
    
    console.log("Parametros de Public key: " + "\ne: " + this.publicKey.e + "\nm: "+ this.publicKey.n)
    console.log("Parametros de Private key: " + "\nd: " + this.privateKey.d + "\nn: " + this.privateKey.n)
  }

  async decrypt(mensaje: string) {
    return await firstValueFrom(this.http.post(this.URI + '/votos/decrypt', { message: mensaje } as RsaRequest))
  }

  async sign(mensaje: string) {
    return this.http.post(this.URI + '/votos/sign', { message: mensaje } as RsaRequest)
  }

  async verify(mensaje: string, pubKey: rsa.PublicKey) {
    return this.http.post(this.URI + '/votos/verify', { message: mensaje, pubKey: publicKeyToJson(pubKey) } as EncryptVerifyRequest)
  }
  
  getPublicKey() {
    return this.http.get(this.URI + "/votos/publickey")
  }
}

function publicKeyToJson(pubKey: rsa.PublicKey): PublicKey {
  return {
    e: bc.bigintToHex(pubKey.e),
    n: bc.bigintToHex(pubKey.e)
  }
}

function jsonToPublicKey(pubKeyJson: PublicKey): rsa.PublicKey {
  return new rsa.PublicKey(bc.hexToBigint(pubKeyJson.e), bc.hexToBigint(pubKeyJson.n))
}