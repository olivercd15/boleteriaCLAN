import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService, Peliculas } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detalle-modal',
  templateUrl: './detalle-modal.page.html',
  styleUrls: ['./detalle-modal.page.scss'],
})
export class DetalleModalPage implements OnInit {

  cart: Peliculas[];
  historial = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.historial = this.cartService.getHistorial();
  }

  close() {
    this.modalCtrl.dismiss();
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precio * j.cantidad, 0);
  }
}
