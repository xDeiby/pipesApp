import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [
    {
      label: 'Angular Pipes',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/',
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numbers',
        },
        {
          label: 'No comunes',
          icon: 'pi pi-globe',
          routerLink: 'no_common',
        },
      ],
    },
    {
      label: 'Pipes Personalizados',
      icon: 'pi pi-cog',
      routerLink: "sort"
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
