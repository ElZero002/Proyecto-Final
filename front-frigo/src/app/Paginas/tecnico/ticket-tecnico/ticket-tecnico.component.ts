import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-tecnico',
  standalone: true,
  templateUrl: './ticket-tecnico.component.html',
  styleUrls: ['./ticket-tecnico.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TicketTecnicoComponent {
  ticketId: string = '001';
  fecha: string = '03 de Mayo 2025';
  hora: string = '00:03:18pm';
  estado: string = 'En curso';
  tecnico: string = 'Pepito Juan Perez Machingui';
  descripcionProblema: string = '';

  aceptarTicket(): void {
    if (!this.descripcionProblema.trim()) {
      alert('Por favor escribe una descripción del problema.');
      return;
    }

    // Simulación de envío del ticket
    console.log('Ticket aceptado');
    console.log('ID:', this.ticketId);
    console.log('Fecha:', this.fecha);
    console.log('Hora:', this.hora);
    console.log('Técnico:', this.tecnico);
    console.log('Descripción:', this.descripcionProblema);

    alert('Ticket registrado exitosamente.');
    this.descripcionProblema = ''; // Limpia el campo
  }
}
