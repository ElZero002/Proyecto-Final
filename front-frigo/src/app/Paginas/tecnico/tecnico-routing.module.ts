import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
{
  path: '',
  redirectTo: 'tickets',
  pathMatch: 'full'
},
{
  path: 'tickets',
  loadComponent: () =>
    import('./ticket-tecnico/ticket-tecnico.component').then(m => m.TicketTecnicoComponent)
},
{
  path: 'materiales',
  loadComponent: () =>
    import('./lista-materiales/lista-materiales.component').then(m => m.ListaMaterialesComponent)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicoRoutingModule {}
