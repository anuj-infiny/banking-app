import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { WithdrawComponent } from './withdraw.component';

const routes: Routes = [
  {
    path: '',
    component: WithdrawComponent,
    data: {
      title: 'Withdraw Money'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawRoutingModule {}
