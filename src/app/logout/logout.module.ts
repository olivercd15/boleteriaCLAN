import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoutPage } from './logout.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LogoutPageRoutingModule } from './logout-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: LogoutPage }]),
    LogoutPageRoutingModule,
  ],
  declarations: [LogoutPage]
})
export class LogoutPageModule {}
