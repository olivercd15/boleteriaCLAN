import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Peliculas {
  id: number;
  nombre: string;
  sinopsis: string;
  hora: string;
  fecha: string;
  puntos: number;
  precio: number;
  cantidad: number;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  filterPeli = '';
  data: Peliculas[] = [
    {
      id: 0,
      nombre: 'Los Vengadores',
      sinopsis: 'El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.',
      hora: '15:00',
      fecha: '01/02/2021',
      puntos: 4.5,
      precio: 35.00,
      cantidad: 1,
      img: 'assets/vengadores.jpg'
    },
    {
      id: 1,
      nombre: 'Endgame 3D',
      sinopsis: 'Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo. Disfrutala en 3D',
      hora: '20:00',
      fecha: '02/02/2021',
      puntos: 5,
      precio: 50.00,
      cantidad: 1,
      img: 'assets/endgame.jpg'
    },
  ];
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  private historial = [];
  historialCount = 0;

  constructor() { }

  getPeliculas(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  getHistorial(){
    return this.historial;
  }

  getHistorialCount() {
    return this.historialCount;
  }

  addPelicula(pelicula){
    let añadir = false;
    for (const p of this.cart) {
      if (p.id === pelicula.id) {
        p.cantidad += 1;
        añadir = true;
        break;
      }
    }
    if (!añadir) {
      this.cart.push(pelicula);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decPelicula(pelicula){
    for (const [index, p] of this.cart.entries()) {
      if (p.id === pelicula.id) {
        p.cantidad -= 1;
        if (p.cantidad === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  eliminarPelicula(pelicula){
    for (const [index, p] of this.cart.entries()) {
      if (p.id === pelicula.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.cantidad);
        this.cart.splice(index, 1);
      }
    }
  }

  addCompra(cart) {
    this.historial.push(cart);
    this.historialCount++;
  }

  vaciarCart() {

  }
}
