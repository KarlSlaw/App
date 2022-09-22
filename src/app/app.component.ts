import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Registro', url: '/registro', icon: 'list' },
    { title: 'Configuracion', url: '/configuracion', icon:'settings' },
    { title: 'Salir', url: '/salir', icon:'log-out' }

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
