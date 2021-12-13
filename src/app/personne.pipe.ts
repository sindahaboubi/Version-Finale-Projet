import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personne'
})
export class PersonnePipe implements PipeTransform {

  transform(prix:number):string{
    return prix+' DT/personne';
  }

}
