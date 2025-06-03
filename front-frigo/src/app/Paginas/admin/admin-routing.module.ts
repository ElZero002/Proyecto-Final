// admin-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./lista-cliente/lista-cliente.component').then(m => m.ListaClienteComponent)
  },
  {
    path: 'tecnicos',
    loadComponent: () =>
      import('./lista-tecnico/lista-tecnico.component').then(m => m.ListaTecnicoComponent)
  },
  {
    path: 'tickets',
    loadComponent: () =>
      import('./tickets/tickets.component').then(m => m.TicketsComponent)
  },
  {
    path: 'materiales',
    loadComponent: () =>
      import('./admin-materiales/admin-materiales.component').then(m => m.AdminMaterialesComponent)
  },
  {
    path: 'pedidos',
    loadComponent: () =>
      import('./admin-pedido/admin-pedido.component').then(m => m.AdminPedidoComponent)
  },
  {
    path: 'reportes',
    loadComponent: () =>
      import('./admin-reporte/admin-reporte.component').then(m => m.AdminReporteComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
