import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutSakaiComponent } from './layout/layout-sakai/layout-sakai.component';

// Nuevas pantallas del flujo de recuperación
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './auth/verify-code/verify-code.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'verificar-codigo',
    component: VerifyCodeComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: '',
    component: LayoutSakaiComponent,
    children: [
      // Admin
      {
        path: 'admin/usuarios',
        loadComponent: () => import('./Paginas/admin/lista-cliente/lista-cliente.component').then(m => m.ListaClienteComponent)
      },
      {
        path: 'admin/materiales',
        loadComponent: () => import('./Paginas/admin/admin-materiales/admin-materiales.component').then(m => m.AdminMaterialesComponent)
      },
      {
        path: 'admin/reportes',
        loadComponent: () => import('./Paginas/admin/admin-reporte/admin-reporte.component').then(m => m.AdminReporteComponent)
      },
      {
        path: 'admin/tickets',
        loadComponent: () => import('./Paginas/admin/tickets/tickets.component').then(m => m.TicketsComponent)
      },

      // Cliente
      {
        path: 'cliente/pedidos',
        loadComponent: () => import('./Paginas/cliente/pedido-cliente/pedido-cliente.component').then(m => m.PedidoClienteComponent)
      },

      // Técnico
      {
        path: 'tecnico/formulario',
        loadComponent: () => import('./Paginas/tecnico/formulario/formulario.component').then(m => m.FormularioComponent)
      },
      {
        path: 'tecnico/materiales',
        loadComponent: () => import('./Paginas/tecnico/lista-materiales/lista-materiales.component').then(m => m.ListaMaterialesComponent)
      },
      {
        path: 'tecnico/tickets',
        loadComponent: () => import('./Paginas/tecnico/ticket-tecnico/ticket-tecnico.component').then(m => m.TicketTecnicoComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login'
  }
];