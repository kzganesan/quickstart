import { Payee } from '../payees/payee';
import { Category } from '../categories/category';

export class Transaction {
  txId: number;
  payeeId: number;
  payeeName: string;
  amount: number;
  accountId: number;
  categoryId: number;
  txType: string;
  txStatus: string;
  txDate: Date;
  payee: Payee;
  category: Category;

  private fields: string[] = [ 'txId', 'payeeId', 'payee', 'amount', 'txType', 'txStatus', 'txDate', 'accountId',
                               'categoryId', 'categoryName' ];

  constructor( private config: any ) {
    if ( typeof config === 'object' ) {
      for ( let field of this.fields ) {
        switch ( field ) {
          case 'txId':
          case 'payeeId':
          case 'amount':
          case 'accountId':
          case 'categoryId':
            this[ field ] = config[ field ] || 0;
            break;
          case 'txType':
          case 'txStatus':
          case 'payeeName':
          case 'categoryName':
            this[ field ] = config[ field ] || '';
            break;
          case 'txDate':
            this[ field ] = new Date( config[ field ] );
            break;
          case 'payee':
            this[ field ] = new Payee( config[ field ] );
            break;
          case 'category':
            this[ field ] = new Category( config[ field ].categoryId, config[ field ].categoryName );
            break;
        }
      }
    }
  }

  toString() {
    return `${this.amount} to ${this.payee.payeeName} on ${this.txDate}`;
  }

}
