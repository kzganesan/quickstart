import { Component } from '@angular/core';
import { PAYEES} from './payees/mock-payees'
@Component({
  selector: 'banking-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  { name = 'Angular';
payees = PAYEES;}
