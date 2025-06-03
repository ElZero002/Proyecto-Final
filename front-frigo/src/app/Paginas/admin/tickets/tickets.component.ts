import { Component } from '@angular/core';

interface Ticket {
  id: number;
  fechaVisita: string;
  horaVisita: string;
  tecnico: string;
  estado: string;
  detalle: string;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  ticket: Ticket = {
    id: 1,
    fechaVisita: this.getTodayDate(),
    horaVisita: this.getCurrentTime(),
    tecnico: '',
    estado: 'Alta urgencia',
    detalle: 'El detalle viene del cliente'
  };

  modoEdicion: boolean = false;

  // Botón "Editar"
  editar(): void {
    this.modoEdicion = true;
  }

  // Botón "Crear"
  crear(): void {
    this.ticket = {
      id: this.ticket.id + 1,
      fechaVisita: this.getTodayDate(),
      horaVisita: this.getCurrentTime(),
      tecnico: '',
      estado: 'Alta urgencia',
      detalle: ''
    };
    this.modoEdicion = true;
  }

  // Botón "Guardar"
  guardar(): void {
    console.log('Ticket guardado:', this.ticket);
    this.modoEdicion = false;
    // Aquí puedes llamar a un servicio o almacenar en base de datos
  }

  // Utilidad para fecha actual en formato DD/MM/YYYY
  private getTodayDate(): string {
    const today = new Date();
    return today.toLocaleDateString('es-ES');
  }

  // Utilidad para hora actual en formato hh:mm:ss am/pm
  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('es-ES');
  }
}
