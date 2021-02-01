import { ModalController } from '@ionic/angular';
import { Peliculas, CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Peliculas[];
  historial = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.historial = this.cartService.getHistorial();
  }

  addCartItem(pelicula) {
    this.cartService.addPelicula(pelicula);
  }

  decCartItem(pelicula) {
    this.cartService.decPelicula(pelicula);
  }

  eliminarCartItem(pelicula) {
    this.cartService.eliminarPelicula(pelicula);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precio * j.cantidad, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  compra(cart) {
    this.cartService.addCompra(cart);
  }

}
