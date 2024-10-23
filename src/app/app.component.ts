import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '07-Pipes';

  // Propiedades de tipo string
  nombre: string = 'MiNombre Ejemplo';
  nombre2: string = 'MiNombre2 Ejemplo';
  lenguajes: string[] = ['C#', 'Java', 'Python', 'TypeScript', 'JavaScript'];

  // Propiedades numéricas
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;

  // Propiedades de otros tipos
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = 'en';
  videourl: string = 'https://www.youtube.com/embed/qZMBUPT3us';

  // Promesa para simular una carga de datos asíncrona
  valorPromesa: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  // Objeto con propiedades anidadas
  persona = {
    nombre: 'MiNombre',
    Paterno: 'Apellido',
    edad: 0,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
}
