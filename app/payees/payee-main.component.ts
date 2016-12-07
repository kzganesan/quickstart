import {Component} from '@angular/core';
import { Payee } from './Payee';
import {PayeeDAO} from "./payee-dao.service";


@Component({
  selector: 'payee-main',
  templateUrl: 'app/payees/payee-main.component.html'
})
export class PayeeMain {
  payees: Payee[] = this.dao.getAll();
  selectedPayee:Payee;

  constructor(private dao: PayeeDAO){}

  pickedPayee(payee:Payee) {
    console.log( 'You picked ', payee );
    this.selectedPayee = payee;
  }

}
