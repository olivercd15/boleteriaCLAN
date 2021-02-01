import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoleteriaPage } from './boleteria.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BoleteriaPageRoutingModule } from './boleteria-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BoleteriaPageRoutingModule
  ],
  declarations: [BoleteriaPage]
})
export class BoleteriaPageModule {}
