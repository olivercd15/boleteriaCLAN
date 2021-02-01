import { FormsModule } from '@angular/forms';
import { DetalleModalPageModule } from './pages/detalle-modal/detalle-modal.module';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, FilterPipe],
  entryComponents: [],
  exports: [FilterPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CartModalPageModule, DetalleModalPageModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
