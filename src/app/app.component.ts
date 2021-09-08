import { Component, ComponentDecorator } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <label>Введит имя:</label>
    <input [(ngModel)]="name" placeholder="name" />
    <h1>Добро пожаловать {{ name }}!</h1>
    `
   , 

})

export class AppComponent {
  name = ''
}