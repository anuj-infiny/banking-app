import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DepositComponent } from './deposit.component';

const routes: Routes = [
  {
    path: '',
    component: DepositComponent,
    data: {
      title: 'Deposit Money'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule {}
