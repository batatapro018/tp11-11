import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productocard } from '../productocard/productocard'; 
import { Canciones } from '../../models/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, Productocard],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  // Lista de canciones de la plataforma
  listaCanciones: Canciones[] = [
    {
      id: 1,
      tituloCan: 'Neon Lights',
      nomArtista: 'The Cyber Tribe',
      descripcion: 'Inspirada en las noches lluviosas de Tokio y los sintetizadores de los 80s.',
      creditos: 'Producido por Alex Synth',
      album: 'Midnight City',
      imagen: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500'
    },
    {
      id: 2,
      tituloCan: 'Electric Pulse',
      nomArtista:'Babasonicos',
      descripcion: 'Un viaje sonoro rápido que busca replicar la adrenalina de manejar de madrugada.',
      creditos: 'Composición por Lucas V.',
      album: 'Pulse 2099',
      imagen: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500'
    }
  ];

  cancionSeleccionada: Canciones | null = null;

  // Método que recibe el evento emitido por el hijo (@Output)
  manejarSeleccion(cancion: Canciones) {
    this.cancionSeleccionada = cancion;
  }
} 