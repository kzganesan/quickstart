import { Component, OnInit, OnDestroy } from '@angular/core';
import { Payee } from './Payee';
import { PayeeDAO } from './payee-dao.service';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

@Component( {
  selector   : 'payee-main',
  templateUrl: 'app/payees/payee-main.component.html'
} )
export class PayeeMain implements OnInit, OnDestroy {

  lastSubscription: Subscription;
  payees: Payee[];
  selectedPayee: Payee;

  constructor( private dao: PayeeDAO ) {
  }

  ngOnInit() {
    console.log( 'PayeeMain.onInit()' );
    this.dao.getAll().then( payees => this.payees = payees )
  }

  pickedPayee( payee: Payee ) {
    console.log( 'You picked ', payee );
    this.lastSubscription = this.dao.get( payee.payeeId )
      .subscribe( payee => {
        this.selectedPayee = payee;
      }, error => {
        console.error( 'Error! ', error );
      } );

  }

  ngOnDestroy() {
    this.lastSubscription.unsubscribe();
  }
}
