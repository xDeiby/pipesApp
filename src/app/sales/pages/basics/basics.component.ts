import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  public nameUpper: string = "nicolás";
  public nameLower: string = "NICOLÁS";
  public completeName: string = "dEiBy nIcOlÁs";

  public date: Date = new Date();

  constructor() { }


}
