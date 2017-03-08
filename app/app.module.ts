import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HelloComponent],
  bootstrap: [HelloComponent]
})

export class AppModule {}
