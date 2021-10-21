import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent {

  public totalSales: number = 3335248.245;
  public porcentage: number = .7872;

  constructor() { }

}
