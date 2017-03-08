import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import {ParentComponent} from './nested/parent.component';
import {ChildComponent} from './nested/child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent, ChildComponent
  ],
  bootstrap: [
    AppComponent,
    HelloComponent,
    ParentComponent
  ]
})

export class AppModule {}
