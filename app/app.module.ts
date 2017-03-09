import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //ngModel binding


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import {ParentToChildInputComponent} from "./parent-to-child/parent-to-child-input.component";
import {ChildInputComponent} from "./parent-to-child/child-input.component";
import {ParentToChildInputsComponent} from "./parnet-to-child-inputs/parent-to-child-inputs.component";
import {ChildInputsComponent} from "./parnet-to-child-inputs/child-inputs.component";
import {ParentComponent} from "./nested/parent.component";
import {ChildComponent} from "./nested/child.component";
import {ChildToParentComponent} from "./child-to-parent/child-to-parent.component";
import {ChildValueComponent} from "./child-to-parent/child.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
      BrowserModule, FormsModule,
      AppRoutingModule
  ],
  declarations: [
    AppComponent,
      HelloComponent,
      ParentComponent, ChildComponent,
      ParentToChildInputComponent, ChildInputComponent,
      ParentToChildInputsComponent, ChildInputsComponent,
      ChildToParentComponent, ChildValueComponent
  ],
  bootstrap: [
      AppComponent
  ]
})

export class AppModule {}
