import { Component } from '@angular/core';
import { PAYEES} from './payees/mock-payees'
@Component({
  selector: 'banking-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  { name = 'Angular';
payees = PAYEES; showGrid = true; selectedId = 0;

  testHandler(){
    console.log("test");
  }

  testHandler(event){
    console.log(event);
  }

  showHandler(){
    this.showGrid = !this.showGrid;
    console.log(this.showGrid);

  }

}
