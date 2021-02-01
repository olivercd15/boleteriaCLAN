import { FilterPipe } from '../pipes/filter.pipe';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { CartService } from '../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, pipe } from 'rxjs';

@Component({
  selector: 'app-boleteria',
  templateUrl: 'boleteria.page.html',
  styleUrls: ['boleteria.page.scss']
})
export class BoleteriaPage implements OnInit{
  filterPeli = '';
  cart = [];
  peliculas = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController) {}

  ngOnInit(){
    this.peliculas = this.cartService.getPeliculas();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(pelicula){
    this.cartService.addPelicula(pelicula);
  }

  async openCart() {
    // tslint:disable-next-line: prefer-const
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }
}
