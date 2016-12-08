import { Component, Input } from '@angular/core';
import { Transaction } from './transaction';

@Component( {
  selector: 'transaction-detail',
  templateUrl: 'app/tx/transaction-detail.component.html'
} )
export class TransactionDetailComponent {
  @Input()
  tx: Transaction
}
