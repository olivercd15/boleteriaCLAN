import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleModalPage } from './detalle-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleModalPageRoutingModule {}
