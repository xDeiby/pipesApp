import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Hero[], field: keyof Hero): Hero[] {
    return heroes.sort((hero, hero2) => (hero[field] > hero2[field] ? 1 : -1));
  }
}
