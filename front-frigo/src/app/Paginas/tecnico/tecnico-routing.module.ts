import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutSakaiComponent } from '../../layout/layout-sakai/layout-sakai.component';
import { ListaMaterialesComponent } from './lista-materiales/lista-materiales.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutSakaiComponent,
    children: [
      {
        path: 'formulario',
        loadComponent: () => import('./formulario/formulario.component').then(m => m.FormularioComponent)
      },
      {
        path: 'materiales',
        loadComponent: () => import('./lista-materiales/lista-materiales.component').then(m => m.ListaMaterialesComponent)
      },
      {
        path: 'tickets',
        loadComponent: () => import('./ticket-tecnico/ticket-tecnico.component').then(m => m.TicketTecnicoComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicoRoutingModule {}
