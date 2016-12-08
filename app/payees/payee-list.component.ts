import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Payee } from './Payee';

@Component({
  selector: 'payee-list',
  templateUrl: 'app/payees/payee-list.component.html',
  styles: [
    `li:hover { background-color: aquamarine; cursor: pointer}`
  ]

})
export class PayeeList {
  @Input()
  payees: Payee[];

  @Output()
  onPayeeSelect = new EventEmitter<Payee>()

  selectPayee(payee:Payee) {
    console.log( 'You selected: ', payee );
    this.onPayeeSelect.emit( payee );
  }
}
