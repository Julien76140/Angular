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
  username: string="";
  connexion: boolean=true;

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

  onSubmit():void{

    if(this.connexion){
      sessionStorage.setItem('userId',this.username);
      this.connexion=false;
    }else{
      sessionStorage.removeItem('userId');
      this.username="";
      this.connexion=true;
    }
  }

}
