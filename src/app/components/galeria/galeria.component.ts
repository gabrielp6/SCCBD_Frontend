import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css',
'css/ie7.css',
'css/ie8.css',
'css/styles.css']
})
export class GaleriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
