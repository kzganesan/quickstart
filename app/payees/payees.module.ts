import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeeDetail } from './payee-detail.component';
import { PayeeList } from './payee-list.component';
import { PayeeMain } from './payee-main.component';
import {PayeeDAO} from "./payee-dao.service";

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ PayeeDetail, PayeeList, PayeeMain ],
  exports     : [ PayeeDetail, PayeeList, PayeeMain ],
  providers : [PayeeDAO]
} )
export class PayeesModule {
}
