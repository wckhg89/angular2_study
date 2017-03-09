import { Component } from '@angular/core';

@Component({
  selector : 'parent-app',
  template: `
  <h1>나는 부모이다 고로 부모이다.</h1>
  <parent-input></parent-input>
  <parent-to-child-inputs-app></parent-to-child-inputs-app>
  <nested-child></nested-child>
  `
})

export class ParentComponent {}
