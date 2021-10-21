import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent {
  public isCapital: boolean = false;
  public orderBy: keyof Hero = 'name';
  public heros: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.BLUE,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.BLACK,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.GREEN,
    },
    {
      name: 'Flash',
      fly: false,
      color: Color.RED,
    },
  ];

  constructor() {}

  public changeCapital() {
    this.isCapital = !this.isCapital;
  }

  public changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
