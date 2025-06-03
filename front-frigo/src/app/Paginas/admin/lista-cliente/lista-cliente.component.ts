import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cliente {
  nombre: string;
  correo: string;
  telefono: string;
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent {
  clientes: Cliente[] = [
    { nombre: 'Jose', correo: 'jose@example.com', telefono: '1234567890' },
    { nombre: 'Maria', correo: 'maria@example.com', telefono: '0987654321' },
    { nombre: 'Luis', correo: 'luis@example.com', telefono: '1122334455' }
  ];

  editar(cliente: Cliente): void {
    console.log('Editar cliente:', cliente);
    // Lógica para edición
  }

  eliminar(cliente: Cliente): void {
    const confirmacion = confirm(`¿Estás seguro de eliminar a ${cliente.nombre}?`);
    if (confirmacion) {
      this.clientes = this.clientes.filter(c => c !== cliente);
      console.log(`${cliente.nombre} eliminado.`);
    }
  }
}
