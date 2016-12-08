import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionsDAO } from './transactions-dao.service';

@Component( {
  selector:    'transactions-list',
  templateUrl: 'app/tx/transactions-list.component.html',
  styleUrls:   [ 'app/tx/transactions-list.component.css' ]
} )
export class TransactionsListComponent implements OnInit {
  txs: Transaction[];
  selectedTx: Transaction;

  constructor( private dao: TransactionsDAO ) {
  }

  ngOnInit(): void {
    this.dao.getTransactions()
      .then( txs => this.txs = txs );
  }

  onSelect( tx: Transaction ) {
    /*
     * Is this necessary? No, we have the actual transaction! But it's a
     * good opportunity to demonstrate the dao.get(id) function. Imagine
     * a system where the data could change between list and detail....
     */
    this.dao.get( tx.txId )
      .then( responseTx => this.selectedTx = responseTx );
  }
}