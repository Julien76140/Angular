import { Component, OnInit } from '@angular/core';
import { MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];
  activeItem: MenuItem={};

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Poneys', icon: '',routerLink:'/'
      },
      {
        label: 'Courses', icon: '',routerLink:'races'
      },
      {
        label: 'Ajouter un poney', icon: '',routerLink:'add-pony'
      },
      {
        label: 'Ajouter une course', icon: '',routerLink:'add-race'
      }
    ];

    this.activeItem = this.items[0];

  }

}
