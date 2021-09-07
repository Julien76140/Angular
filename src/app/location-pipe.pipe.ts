import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationPipe'
})
export class LocationPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let res="";

    for (let i=0;i<value.length;i++){
      res += value[i].toUpperCase() + '.';

    }

    return res;
  }

}
