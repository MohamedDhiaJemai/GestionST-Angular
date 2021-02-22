import { Pipe, PipeTransform } from '@angular/core';
import { Taille } from './model/Enums.model';

@Pipe({
  name: 'taillepipe'
})
export class TaillepipePipe implements PipeTransform {

  transform(value: string): string {
    return Taille[value];
  }

}
