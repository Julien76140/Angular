import { Component, OnInit } from '@angular/core';
import { Pony } from '../pony';
import { PONIES } from '../mock-ponies';

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {

  ponies: Pony[];

  constructor() {

    this.ponies=PONIES;
  }

  ngOnInit(): void {
  }

}
