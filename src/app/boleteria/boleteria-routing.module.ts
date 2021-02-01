import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoleteriaPage } from './boleteria.page';

const routes: Routes = [
  {
    path: '',
    component: BoleteriaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoleteriaPageRoutingModule {}
