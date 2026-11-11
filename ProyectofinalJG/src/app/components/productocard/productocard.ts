import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Canciones } from '../../models/producto'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-productocard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productocard.html',
  styleUrl: './productocard.css',
})
export class Productocard {
  @Input() cancion!: Canciones;
  @Output() seleccionar = new EventEmitter<Canciones>();

  verDetalle() {
    this.seleccionar.emit(this.cancion);
  }
}