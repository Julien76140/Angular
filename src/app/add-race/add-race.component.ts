import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PONIES } from '../mock-ponies';
import { RACES } from '../mock-races';
import { Race } from '../race';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {

  model: Race = new Race();
  poniesBool = Array<boolean>();
  allPonies = PONIES;
  add: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    for (let index = 0; index < this.poniesBool.length; index++) {
      if (this.poniesBool[index]){
        this.model.ponies.push(this.allPonies[index]);
      }
    }
    RACES.push(this.model);
    this.router.navigate(['/races']);
  }

}
