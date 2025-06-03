import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () =>
      import('./cliente-home/cliente-home.component').then(m => m.ClienteHomeComponent)
},
{
  path: 'pedidos',
  loadComponent: () =>
    import('./pedido-cliente/pedido-cliente.component').then(m => m.PedidoClienteComponent)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {}
