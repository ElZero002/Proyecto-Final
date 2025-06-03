import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-reporte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-reporte.component.html',
  styleUrls: ['./admin-reporte.component.scss']
})
export class AdminReporteComponent {
  filtro: string = '';

  reportes = [
    { id: '001', nombre: 'Nombre de la empresa' },
    { id: '001', nombre: 'empresa' },
    { id: '001', nombre: 'empresa' },
    { id: '001', nombre: 'empresa' },
    { id: '001', nombre: 'empresa' }
  ];

  get reportesFiltrados() {
    return this.reportes.filter(reporte =>
      reporte.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  generarPDF(reporte: any): void {
    // Aquí puedes integrar jsPDF o html2pdf.js
    console.log('Generar PDF para:', reporte);
    alert(`Generando PDF para: ${reporte.nombre}`);
  }
}
