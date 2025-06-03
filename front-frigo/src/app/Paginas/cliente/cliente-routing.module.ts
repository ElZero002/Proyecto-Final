import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutSakaiComponent } from '../../layout/layout-sakai/layout-sakai.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutSakaiComponent,
    children: [
      {
        path: 'pedidos',
        loadComponent: () => import('./pedido-cliente/pedido-cliente.component').then(m => m.PedidoClienteComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {}
