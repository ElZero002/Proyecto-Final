import { Routes } from '@angular/router';

export const routes: Routes = [
  // 🔐 Auth
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth-routing.module').then(m => m.routes),
  },

  // 🧑‍💼 ADMIN (usa su layout)
  {
    path: 'admin',
    loadComponent: () =>
      import('./layout/layout-admin/layout-admin.component').then(m => m.LayoutAdminComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./Paginas/admin/admin.module').then(m => m.AdminModule),
      }
    ]
  },

  // 👤 CLIENTE
  {
    path: 'cliente',
    loadComponent: () =>
      import('./layout/layout-cliente/layout-cliente.component').then(m => m.LayoutClienteComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./Paginas/cliente/cliente-routing.module').then(m => m.routes),
      }
    ]
  },

  // 🧑‍🔧 TÉCNICO
  {
    path: 'tecnico',
    loadComponent: () =>
      import('./layout/layout-tecnico/layout-tecnico.component').then(m => m.LayoutTecnicoComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./Paginas/tecnico/tecnico-routing.module').then(m => m.routes),
      }
    ]
  },

  // 🔁 Fallback
  {
    path: '**',
    redirectTo: 'login'
  }
];
