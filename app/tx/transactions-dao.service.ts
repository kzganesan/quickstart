import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Transaction } from './transaction';

@Injectable()
export class TransactionsDAO {
  private txUrl = 'http://localhost:7100/banking/tx/';
  searchParams: URLSearchParams;

  constructor( private http: Http ) {
    this.searchParams = new URLSearchParams();
    this.searchParams.set( 'limit', '15' ); // We don't need all 700+ transactions at once!
  }

  getTransactions(): Promise<Transaction[]> {
    return this.http.get( this.txUrl, { search: this.searchParams } )
      .toPromise()
      .then( response => response.json() as Transaction[] )
      .catch(this.handleError);
  }

  get( id: number ): Promise<Transaction> {
    return this.http.get( this.txUrl + id )
      .toPromise()
      .then( response => response.json() as Transaction )
      .catch(this.handleError);
  }

  query( criteria ): Promise<Transaction[]> {
    let params = this.searchParams.clone();
    for ( let key in criteria ) {
      params.set( key, criteria[ key ] );
    }

    return this.http.get( this.txUrl, { search: params } )
      .toPromise()
      .then( response => response.json() as Transaction[] )
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error( 'TransactionsDAO ERROR: ', error );

    // We could modify this, but this is a basic error handler
    return Promise.reject( error );
  }

}
