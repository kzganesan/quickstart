/**
 * Created by Administrator on 12/5/2016.
 */
import {Component, Input} from '@angular/core'
//import {PAYEES} from "./mock-payees";
import {Payee} from "./Payee";

@Component({
  selector:'payee-detail',
  templateUrl: 'app/payees/payee-detail.component.html'
})
export class PayeeDetail{
//payee:Payee = PAYEES[7];

  @Input()
  payee:Payee;
}
