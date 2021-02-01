import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleModalPageRoutingModule } from './detalle-modal-routing.module';

import { DetalleModalPage } from './detalle-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleModalPageRoutingModule
  ],
  declarations: [DetalleModalPage]
})
export class DetalleModalPageModule {}
