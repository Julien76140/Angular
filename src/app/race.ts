import {Pony} from "./pony";

export class Race {

  id: number;
  location: string;
  date: Date;
  ponies: Array<Pony>;

    constructor(id?:number,location?:string,date?:Date) {

      this.id= id === undefined ? 0 : id;
      this.location= location === undefined ? "location" : location;
      this.date= date === undefined ? new Date() : date;
      this.ponies=[];

}
}
