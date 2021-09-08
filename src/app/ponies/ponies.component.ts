import { Component, OnInit } from '@angular/core';
import { Pony } from '../pony';
import { PONIES } from '../mock-ponies';
import {PonyService} from "../pony.service";
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {

  ponies: Pony[]= [];


  constructor(private ponyService: PonyService,private primengConfig: PrimeNGConfig) {

    this.ponyService.getAllPonies().subscribe(p =>this.ponies =p );

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
