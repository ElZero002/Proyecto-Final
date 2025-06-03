import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rutas públicas SIN layout
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth-routing.module').then(m => m.routes),
  },

  // Rutas privadas CON layout
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout-sakai/layout-sakai.component').then(m => m.LayoutSakaiComponent),
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./Paginas/admin/admin-routing.module').then(m => m.routes),
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('./Paginas/cliente/cliente-routing.module').then(m => m.routes),
      },
      {
        path: 'tecnico',
        loadChildren: () =>
          import('./Paginas/tecnico/tecnico-routing.module').then(m => m.routes),
      },
    ],
  },

  // Redirección por defecto
  {
    path: '**',
    redirectTo: 'login',
  },
];
