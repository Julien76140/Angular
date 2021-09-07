export class Race {

  id_race: number;
  location: string;
  date: string

    constructor(id_race?:number,location?:string,date?:string) {

      this.id_race= id_race === undefined ? 0 : id_race;
      this.location= location === undefined ? "location" : location;
      this.date= date === undefined ? "date" : date;

}
}
