import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnicoRoutingModule } from './tecnico-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaClienteComponent } from '../admin/lista-cliente/lista-cliente.component';
import { TicketTecnicoComponent } from './ticket-tecnico/ticket-tecnico.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    TecnicoRoutingModule,
    RouterModule
    
  ]
})
export class TecnicoModule {}
