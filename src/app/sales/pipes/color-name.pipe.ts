import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'colorName',
})
export class ColorNamePipe implements PipeTransform {
  transform(color: Color): string {
    switch (color) {
      case Color.BLACK:
        return 'negro';

      case Color.BLUE:
        return 'azul';

      case Color.GREEN:
        return 'verde';

      case Color.RED:
        return 'rojo';
    }
  }
}
