import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { secretShared } from '../interfaces/interfaces'
import { SecretSharingService } from 'src/app/services/secretSharing.service';


@Component({
  selector: 'app-secretSharing',
  templateUrl: './secretSharing.component.html',
  styleUrls: ['./secretSharing.component.css']
})


export class SecretSharingComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private secretSharingService: SecretSharingService) { }

  secreto: string = ""
  clavesCompartidas: string[] = [];
  claves: string[] = [];
  secretoRecuperado: string = "";

  
  ngOnInit(): void {

  }

  getClavesDeSecreto(): void{
    const enviar: secretShared = {
      secreto: this.secreto,
      shared: 5,
      threshold: 3
    }

    this.secretSharingService.getSharedKeys(enviar).subscribe(data => {
      this.clavesCompartidas = data;
    })
  }

  getSecretoPorClaves(): void{
     this.secretSharingService.getSecreto(this.claves).subscribe(data => {
      this.secretoRecuperado = data;
    })

  }

}
