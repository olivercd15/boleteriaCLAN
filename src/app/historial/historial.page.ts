import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { DetalleModalPage } from '../pages/detalle-modal/detalle-modal.page';

@Component({
  selector: 'app-historial',
  templateUrl: 'historial.page.html',
  styleUrls: ['historial.page.scss']
})
export class HistorialPage {
  cart = [];
  peliculas = [];
  cartItemCount: BehaviorSubject<number>;
  historial = [];
  historialCount = this.cartService.historialCount;

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    this.peliculas = this.cartService.getPeliculas();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.historial = this.cartService.getHistorial();
  }

  async verDetalle() {
    // tslint:disable-next-line: prefer-const
    let modal = await this.modalCtrl.create({
      component: DetalleModalPage,
      cssClass: 'detalle-modal'
    });
    modal.present();
  }
}
