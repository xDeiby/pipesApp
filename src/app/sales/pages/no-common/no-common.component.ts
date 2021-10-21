import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [
  ]
})
export class NoCommonComponent {

  // i18nSelect
  public name: string = "Nicolás";
  public sex: "m" | "f" = "m";
  public welcomeMap = {
    "m": "señor",
    "f": "señora"
  };

  // i18nSelectPlural
  public clients: string[] = ["cliente 1"];
  public clientsMap = {
    "=0": "no tenemos ningun cliente esperando.",
    "=1": "tenemos 1 cliente esperando",
    "other": "tenemos # clientes esperando"
  };

  // KeyValuePipe
  public people = {
    name: "Rodrigo",
    age: 24,
    address: "Valparaíso, Chile"
  }

  // JsonPipe
  public students = [
    {name: "Juana", age: "21"},
    {name: "Pedro", age: "25"},
    {name: "Maria", age: "28"},
    {name: "Natalia", age: "23"},
  ];

  // Async Pipe
  public myObservable = interval(1000);
  public valuePromise: Promise<string> = new Promise((resolve, reject) => setTimeout(() => resolve("Data de la promesa"), 3500));

  public changeName(){
    this.name = (this.name === "Nicolás" ? "Daniela" : "Nicolás");
    this.sex = (this.sex === "m" ? "f" : "m");
  }

  public addClient() {
      this.clients.push(`cliente ${this.clients.length+1}`);
  }
  public removeClient(){
    this.clients.length > 0 && this.clients.pop()
  }

  constructor() { }

}
