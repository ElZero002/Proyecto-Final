import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminMaterialesComponent } from './admin-materiales/admin-materiales.component';
import { AdminPedidoComponent } from './admin-pedido/admin-pedido.component';
import { AdminReporteComponent } from './admin-reporte/admin-reporte.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaTecnicoComponent } from './lista-tecnico/lista-tecnico.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule {}
