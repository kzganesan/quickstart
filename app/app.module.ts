import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PayeesModule } from './payees/payees.module';
import { TransactionsModule } from './tx/transactions.module';

@NgModule( {
  imports     : [ BrowserModule, PayeesModule, TransactionsModule ],
  declarations: [ AppComponent ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
