/**
 * Created by Administrator on 12/5/2016.
 */
import {Component, Input} from '@angular/core'
import {PAYEES} from "./mock-payees";
import {Payee} from "./Payee";
//import {AppComponent} from "../app.component";

@Component({
  selector:'payee-list',
  templateUrl: 'app/payees/payee-list.component.html'
})
export class PayeeList{
  @Input()
  payee:Payee[] = PAYEES;

  testHandler(id){
    console.log(id);
    //AppComponent.selectedId = id;
  }
}
