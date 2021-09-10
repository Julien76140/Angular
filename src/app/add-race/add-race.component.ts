import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PONIES } from '../mock-ponies';
import { RACES } from '../mock-races';
import { Race } from '../race';
import {RaceService} from "../race.service";
import {PonyService} from "../pony.service";
import {Pony} from "../pony";

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {

  model: Race = new Race();
  poniesBool = Array<boolean>();
  allPonies: Pony[]= [];
  add: boolean = true;
  targetPonies: Pony[]=[];

  constructor(private router: Router,private route: ActivatedRoute,private raceService: RaceService,private ponyService: PonyService) {

    this.targetPonies=[];

  }

  ngOnInit(): void {

    this.ponyService.getAllPonies().subscribe(p=>this.allPonies=p);

    //test l'url si ajout ou pas
    if(this.route.snapshot.paramMap.get('id')==null){
      this.add=true;

    }else{

      this.add=false;
      let str =this.route.snapshot.paramMap.get('id')
      const id_race= parseInt(str == null ? "0" : str,0 );

      this.raceService.getRace(id_race).subscribe(p=> this.model=p);

      /*for(let i =0 ;i < RACES.length;i++){

        if(RACES[i].id_race === id_race){

          this.model=RACES[i];

          break;
        }

      }*/
    }

  }

  onSubmit(): void{

    for (let index = 0; index < this.poniesBool.length; index++) {
      if (this.poniesBool[index]) {
        this.model.ponies.push(this.allPonies[index]);
      }
    }

    if(this.add) {
      //RACES.push(this.model);
      this.raceService.addRace(this.model);
    }

    this.router.navigate(['/races']);

  }

}
