import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() { }

  itens: MenuItem[] = [];

  ngOnInit() {
    this.itensMenu();
  }

  itensMenu() {

    this.itens = [{
      label: 'Módulo de LOG',
      items: [{
          label: 'Cadastro',
          icon: 'pi pi-desktop',
          routerLink: '/cadastro-log'
      },
      {
        label: 'Lista de Logs',
        icon: 'pi pi-mobile',
        routerLink: '/lista-log'
      }
      ]},
     
  ];
}
  

}//end method
