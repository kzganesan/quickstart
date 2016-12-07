import {Injectable} from "@angular/core";
import {Payee} from "./Payee";
import {PAYEES} from './mock-payees';

/**
 * Created by Administrator on 12/7/2016.
 */
@Injectable()

export class PayeeDAO{
  private PAYEES:Payee[] = PAYEES;

  get(id: number): Payee{
    let foundPayee: Payee = null;

    PAYEES.some(payee => {
      if(payee.payeeId === id){
        foundPayee = payee;
        return true
      }
      return false;
    })

    return foundPayee;
  }

  findByPayeeName(payeeName: string): Payee[]{
    return PAYEES.filter(payee => payee.payeeName == payeeName)
  }

  getAll():Payee[]{
    return[...PAYEES];
  }

}
