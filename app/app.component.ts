import { Component } from '@angular/core';
import { PAYEES} from './payees/mock-payees'
@Component({
  selector: 'banking-app',
  template: `
<div class="row"><div class="col-md-8">
<h1>Welcome to our Banking Application</h1>
</div></div>
<div>{{payees[0].payeeName}}</div>
`,
})
export class AppComponent  { name = 'Angular';
payees = PAYEES;}
