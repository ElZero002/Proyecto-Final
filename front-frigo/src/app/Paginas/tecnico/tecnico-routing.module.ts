import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

export const routes: Routes = [
{
    path: '',
    loadComponent: () =>
      import('./tecnico-home/tecnico-home.component').then(m => m.TecnicoHomeComponent)
},
{
  path: '',
  redirectTo: 'tickets',
  pathMatch: 'full'
},
{
   path: 'reportes',
  loadComponent: () =>
    import('./reportes/reportes.component').then(m => m.ReportesComponent)
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
