import { Component } from '@angular/core';

@Component( {
  selector: 'banking-app',
  templateUrl: 'app/app.component.html',
} )
export class AppComponent {
  title = 'The Super-Fake Banking Corporation';
  motto = 'Doing banking-type stuff since 1948';

  views = {
    transactions: true,
    payees:       false
  };

  toggleView( viewName: string ) {
    if ( this.views.hasOwnProperty( viewName ) ) {
      for ( let v in this.views ) {
        this.views[ v ] = v === viewName ? true : false
      }
    }
  }
}

