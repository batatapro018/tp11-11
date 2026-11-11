import { Component, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Canciones } from './models/producto';
import { Productocard } from './components/productocard/productocard';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Productocard, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyectofinalJG');
  cancion: Canciones[] = [
    {
      id: 1, tituloCan: 'honeybee', nomArtista: 'Olivia Rodrigo', descripcion: 'Fue la primera canción de amor que escribió para el álbum. Su letra explora las inseguridades en una relación idílica, comparando a su pareja con una abeja por el temor a un final abrupto. Contiene referencias clichés románticos y se inspira parcialmente en el personaje de Hugh Grant en la película Notting Hill (1999) para uno de sus versos. Además, Olivia reveló que la canción está dedicada a su pareja(ex-pareja hoy en día), el actor Louis Partridge.', creditos: 'Olivia Rodrigo: artista principal-compositor-letrista; Daniel Nigro: productor-ingeniero-ingeniero de mezcla-',
      album: '',
      imagen: ''
    },
    {
      id: 2, tituloCan: 'neo roneo', nomArtista: 'Latin Mafia', descripcion: 'La canción define conceptualmente el "coqueteo moderno". Utiliza el término español "roneo" (que significa cortejar o ligar) modificado con el prefijo "neo" para retratar un romance de calle adaptado a las nuevas generaciones. Su lírica entrelaza el magnetismo inicial de las miradas con las inseguridades, el miedo a la distancia y la vulnerabilidad emocional.', creditos: 'Rusowsky: artista principal-productor; Latin Mafia: artista principal-voces; Ruslán Mediavilla: escritor',
      album: '',
      imagen: ''
    },
    {
      id: 3, tituloCan: 'La Lanza', nomArtista: 'Babasónicos', descripcion: 'La letra explora la resiliencia emocional y la resistencia frente a una relación conflictiva o una ruptura. A través de la metáfora de "la lanza partida en dos", representa un pacto roto o una traición donde una de las partes decide no rendirse ni unirse al juego del otro. Dárgelos canta sobre el orgullo y la dignidad de mantenerse entero a pesar de tener "clavada la mitad" del dolor.', creditos: 'Babasonicos: artista pricipal; Diego Rodriguez: compositor; Adrian Rodriguez: letrista-compositor',
      album: '',
      imagen: ''
    },
    {
      id: 4, tituloCan: 'Aquel Nap ZzZz', nomArtista: 'Rauw Alejandro', descripcion: 'La canción es una declaración abierta de amor y vulnerabilidad. La expresión "Nap ZzZz" (siesta en inglés) hace referencia a la paz de compartir un descanso y un espacio de intimidad con la persona amada. Rauw Alejandro la escribió inspirándose en su etapa de enamoramiento inicial con la cantante española Rosalía, a quien le dedicó oficialmente el tema. De hecho, la introducción de la pista incluye un breve audio donde se escucha la voz de Rosalía diciendo "Te amo y no quiero".', creditos: 'Rauw Alejandro: artista principal-compositor-letrista',
      album: '',
      imagen: ''
    },
    {
      id: 5, tituloCan: 'ALMA DINAMITA', nomArtista: 'WOS', descripcion: ' La canción es una oda a la conexión humana profunda y la lealtad incondicional. El concepto de "alma dinamita" funciona como una metáfora de una fuerza interna explosiva y luminosa capaz de movilizar cualquier destino gris. El tema explora la idea de encontrar un refugio mutuo en otra persona cuando el entorno colapsa. Aunque la letra encaja perfectamente en un vínculo de pareja, WOS reveló que originalmente se la dedicó a su mejor amiga, demostrando cómo la amistad verdadera puede ser el amor más puro.', creditos: 'WOS: artista principal-compositor',
      album: '',
      imagen: ''
    },
    {
      id: 6, tituloCan: 'Otoño del 82', nomArtista: 'Airbag', descripcion: ' La canción es un homenaje explícito a los Veteranos y Caídos en la Guerra de Malvinas de 1982. A través de la perspectiva de un "soldado perdido", la letra aborda la crudeza del conflicto, el dolor latente del regreso, la reconciliación del duelo ("limpiemos la sangre que se ha derramado") y la necesidad imperiosa de mantener viva la memoria colectiva para no olvidar a quienes dieron su vida en las islas. El propio Patricio declaró en su momento que la historia de la guerra siempre fue un tema que lo perturbó y sintieron el deber de rendirles un respetuoso reconocimiento.', creditos: 'Airbag: artista principal; Patricio Sardelli:compositor; Gastón Sardelli:compositor; Guido Sardelli:compositor',
      album: '',
      imagen: ''
    },
  ]

}
