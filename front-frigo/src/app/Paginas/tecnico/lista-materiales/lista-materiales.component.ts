import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-materiales',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 Importa aquí directamente
  templateUrl: './lista-materiales.component.html',
  styleUrls: ['./lista-materiales.component.scss']
})
export class ListaMaterialesComponent {
  filtro: string = '';

  materiales = [
    { id: '01', nombre: 'Lubricante', descripcion: 'Para motores', stock: 100 }
  ];

  get materialesFiltrados() {
    if (!this.filtro.trim()) {
      return this.materiales;
    }

    const texto = this.filtro.toLowerCase();

    return this.materiales.filter(mat =>
      mat.id.toLowerCase().includes(texto) ||
      mat.nombre.toLowerCase().includes(texto) ||
      mat.descripcion.toLowerCase().includes(texto)
    );
  }
}
