import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reporte-tecnico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent {
  horaEntrada: string = '';
  horaSalida: string = '';

  // Información técnica
  infoTecnica = Array.from({ length: 4 }, () => ({
    area: '', marca: '', modelo: '', serie: ''
  }));

  datosTecnicos = Array.from({ length: 4 }, () => ({
    tipo: '', capacidad: '', psi: '', amp: ''
  }));

  descripcion: string = '';
  recomendacion: string = '';

  // Materiales
  materiales = Array.from({ length: 4 }, () => ({
    nombre: 'plomo',
    cantidad: 5
  }));
  materialBuscado: string = '';

  guardar() {
    console.log('Hora entrada:', this.horaEntrada);
    console.log('Hora salida:', this.horaSalida);
    console.log('Descripción:', this.descripcion);
    console.log('Recomendación:', this.recomendacion);
    console.log('Materiales:', this.materiales);
    console.log('Info técnica:', this.infoTecnica);
    console.log('Datos técnicos:', this.datosTecnicos);

    alert('Reporte guardado exitosamente.');
  }
}
