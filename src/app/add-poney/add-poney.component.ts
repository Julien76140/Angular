import { Component, OnInit } from '@angular/core';
import {Pony} from "../pony";
import {PONIES} from "../mock-ponies";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-poney',
  templateUrl: './add-poney.component.html',
  styleUrls: ['./add-poney.component.css']
})
export class AddPoneyComponent implements OnInit {

  newPony: Pony= new Pony();

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit():void{
    this.newPony.id=PONIES.length;
    PONIES.push(this.newPony);
    this.newPony= new Pony();
    this.router.navigate(['']);

  }

}
