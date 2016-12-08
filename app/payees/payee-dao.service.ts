import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { PAYEES } from './mock-payees';
import { Payee } from './Payee';
import '../common/rxjs-operators'
import { Observable } from 'rxjs';

@Injectable()
export class PayeeDAO {
  private PAYEES: Payee[] = PAYEES;
  private url = 'http://localhost:7100/banking/payee/';

  constructor( private http: Http ) {
  }

  get( id: number ): Observable<Payee> {

    return this.http.get( this.url + id )
      .map( response => response.json() as Payee )
      .catch( this.handleError );
  }

  handleError( error: any ) {
    console.error( 'PayeeDAO ERROR: ', error );
    return Observable.throw( { message: 'Something went wrong here.' } );
  }

  getAsPromise( id: number ): Promise<Payee> {
    let p1 = this.http.get( this.url + id ).toPromise();
    let p2 = p1.then( response => response.json(),
      error => {
        console.log( 'P1 error: ', error );
        return Promise.reject( { message: error.statusText } );
      } );

    let p3 = p2.then( data => {
      return new Payee( data );
    } );

    return p3;
  }

  findByPayeeName( payeeName: string ): Promise<Payee[]> {
    return Promise.resolve( PAYEES.filter( payee => payee.payeeName === payeeName ) )
  }

  getAll(): Promise<Payee[]> {
    return Promise.resolve( [ ...PAYEES ] );
  }

}
