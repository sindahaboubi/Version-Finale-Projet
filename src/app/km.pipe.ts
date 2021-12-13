import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'km'
})
export class KmPipe implements PipeTransform {

  transform(distanceAer: number): string {
    return distanceAer+" Km";
  }

}
