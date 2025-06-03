import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tecnico',
  standalone: true,
  templateUrl: './lista-tecnico.component.html',
  styleUrls: ['./lista-tecnico.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ListaTecnicoComponent {
  tecnicos = [
    {
      cedula: '1234567890',
      nombre: 'Carlos',
      apellido: 'Pérez',
      correo: 'carlos@example.com',
      editando: false
    },
    {
      cedula: '0987654321',
      nombre: 'Luisa',
      apellido: 'Gómez',
      correo: 'luisa@example.com',
      editando: false
    }
  ];

  editar(tecnico: any): void {
    tecnico.editando = true;
  }

  guardar(tecnico: any): void {
    tecnico.editando = false;
    alert(`Técnico ${tecnico.nombre} actualizado`);
  }

  eliminar(tecnico: any): void {
    const confirmado = confirm(`¿Eliminar a ${tecnico.nombre}?`);
    if (confirmado) {
      this.tecnicos = this.tecnicos.filter(t => t !== tecnico);
    }
  }
}
