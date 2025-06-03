import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, PanelMenuModule],
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/admin'] },
      { label: 'Técnicos', icon: 'pi pi-users', routerLink: ['/admin/tecnicos'] },
      { label: 'Clientes', icon: 'pi pi-user', routerLink: ['/admin/usuarios'] },
      { label: 'Pedidos', icon: 'pi pi-shopping-cart', routerLink: ['/admin/pedidos'] },
      { label: 'Materiales', icon: 'pi pi-box', routerLink: ['/admin/materiales'] },
      { label: 'Reportes', icon: 'pi pi-chart-line', routerLink: ['/admin/reportes'] }
    ];
  }

  cerrarSesion(): void {
    // Aquí podrías también limpiar localStorage, tokens, etc.
    this.router.navigate(['/login']);
  }
}
