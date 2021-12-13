import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'local'
})
export class LocalPipe implements PipeTransform {

  transform(localisation:string):string{
    return localisation+' ,Tunisie';
  }
}
