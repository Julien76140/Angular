import { Component, OnInit } from '@angular/core';
import {Pony} from "../pony";
import {PONIES} from "../mock-ponies";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-poney',
  templateUrl: './add-poney.component.html',
  styleUrls: ['./add-poney.component.css']
})
export class AddPoneyComponent implements OnInit {

  newPony: Pony= new Pony();
  add: boolean=true;

  constructor(private router: Router,private route: ActivatedRoute) {
    //test l'url si ajout ou pas
    if(this.route.snapshot.paramMap.get('id')==null){
      this.add=true;

    }else{
      this.add=false;
      let str =this.route.snapshot.paramMap.get('id')
      const id= parseInt(str==null ? "0" :str,0 );
      for(let i =0 ;i < PONIES.length;i++){
        if(PONIES[i].id ===id){
          this.newPony=PONIES[i];
          break;
        }
      }
    }
  }

  ngOnInit(): void {

  }

  onSubmit():void{

    if(this.add) {
      this.newPony.id = PONIES.length;
      PONIES.push(this.newPony);
      this.newPony = new Pony();
    }
    this.router.navigate(['']);

  }

}
