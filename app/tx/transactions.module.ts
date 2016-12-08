import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TransactionsListComponent } from './transactions-list.component';
import { TransactionDetailComponent } from './transaction-detail.component';
import { TransactionsDAO } from './transactions-dao.service';

@NgModule( {
  imports:      [ CommonModule, HttpModule ],
  declarations: [ TransactionsListComponent, TransactionDetailComponent ],
  exports:      [ TransactionsListComponent, TransactionDetailComponent ],
  providers:    [ TransactionsDAO ]
} )
export class TransactionsModule {
}
