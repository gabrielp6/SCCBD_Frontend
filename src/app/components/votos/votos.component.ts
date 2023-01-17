import { Component, OnInit } from '@angular/core';
import { VotosService } from '../../services/votos.service'

import * as bc from 'bigint-conversion'

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['css/votos.component.css',
  'css/responsee.css',
  'css/template-style.css' 
]
})
export class VotosComponent implements OnInit {

  constructor(private votosService: VotosService) {
    
   }

  async ngOnInit(): Promise<void> {
  }


  async encrypt(mensaje: string) {

    console.log("Mensaje a enviar: " + mensaje)
    const mensajeBigint = bc.textToBigint(mensaje)
    console.log("Mensaje convertido a Bigint: " + mensajeBigint)
    const cifrado = this.votosService.serverPublicKey.encrypt(mensajeBigint)
    console.log("Mensaje que enviamos: " + cifrado);
    const plaintextHex = ((await this.votosService.decrypt(bc.bigintToHex(cifrado))) as RsaResponse).message

  }


  async sign(mensaje: string) {
    const mensajeBigint = bc.textToBigint(mensaje)
    const signed = this.votosService.privateKey.sign(mensajeBigint);
    (await this.votosService.verify(bc.bigintToHex(signed), this.votosService.publicKey)).subscribe((res: any) => {})
  }
  
}
