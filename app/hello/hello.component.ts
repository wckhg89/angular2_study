import { Component } from '@angular/core';
import {HelloService} from "../service/hello.service";


@Component({
  selector: 'app-hello',

  template: `
    <h1>{{title}}</h1>
    <h2>{{welcome}}</h2>
    <input type="text" [(ngModel)]="title">
    <textarea [(ngModel)]="title"></textarea>`,

  styles : [`input,textarea{margin-top:20px;display:block;}`],

  providers: [HelloService]
})

export class HelloComponent {
  welcome: string;
  title = 'Hello Component';

  constructor(private helloService: HelloService) {
    this.welcome = helloService.sayHello();

  }
}
