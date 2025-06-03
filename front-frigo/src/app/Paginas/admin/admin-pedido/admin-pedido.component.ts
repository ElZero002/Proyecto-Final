import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-pedido.component.html',
  styleUrls: ['./admin-pedido.component.scss']
})
export class AdminPedidoComponent {
  pedidos = [
    {
      id: 1,
      empresa: 'Frigo Norte',
      detalle: 'Revisión de cámara frigorífica principal.',
      abierto: true
    },
    {
      id: 2,
      empresa: 'Congelados del Sur',
      detalle: 'Mantenimiento programado mensual.',
      abierto: false
    },
    {
      id: 3,
      empresa: 'Alimentos Fríos S.A.',
      detalle: 'Reporte por bajo rendimiento en enfriamiento.',
      abierto: false
    }
  ];

  toggle(pedido: any): void {
    pedido.abierto = !pedido.abierto;
  }
}
