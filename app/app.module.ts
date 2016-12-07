import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PayeesModule } from './payees/payees.module';

@NgModule( {
  imports     : [ BrowserModule, PayeesModule ],
  declarations: [ AppComponent ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
