import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PayeeDetail} from "./payees/payee-detail.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,PayeeDetail ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
