import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetter',
})
export class CapitalLetterPipe implements PipeTransform {
  transform(value: string, inCapital: boolean): string {
    return inCapital ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
