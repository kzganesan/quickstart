import { Component, Input } from '@angular/core';
import { Payee } from './Payee';

@Component( {
  selector   : 'payee-detail',
  templateUrl: 'app/payees/payee-detail.component.html',
  styles: [
    `.foo { text-decoration: underline }`,
    `.bar { color: orange}`,
    `.baz {font-family: Broadway}`
  ]
} )
export class PayeeDetail {
  @Input()
  payee:Payee;
}
