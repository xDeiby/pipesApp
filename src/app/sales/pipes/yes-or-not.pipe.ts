import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesOrNot',
})
export class YesOrNotPipe implements PipeTransform {
  transform(value: boolean): 'si' | 'no' {
    return value ? 'si' : 'no';
  }
}
