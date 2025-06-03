import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-sakai',
  standalone: true,
  templateUrl: './layout-sakai.component.html',
  styleUrls: ['./layout-sakai.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    PanelMenuModule,
    ButtonModule
  ]
})
export class LayoutSakaiComponent implements OnInit {
  items: MenuItem[] = [];
  rol: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const decoded: any = JSON.parse(atob(token));
        this.rol = decoded.rol;
      } catch (e) {
        console.error('Token inválido');
      }
    }

    this.setMenuByRol();
  }

  setMenuByRol(): void {
    if (this.rol === 'admin') {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/admin'] },
        { label: 'Técnicos', icon: 'pi pi-users', routerLink: ['/admin/tecnicos'] },
        { label: 'Clientes', icon: 'pi pi-user', routerLink: ['/admin/usuarios'] },
        { label: 'Pedido', icon: 'pi pi-shopping-cart', routerLink: ['/admin/pedidos'] },
        { label: 'Tickets', icon: 'pi pi-ticket', routerLink: ['/admin/tickets'] },
        { label: 'Materiales', icon: 'pi pi-box', routerLink: ['/admin/materiales'] },
        { label: 'Reportes', icon: 'pi pi-chart-line', routerLink: ['/admin/reportes'] }
      ];
    } else if (this.rol === 'cliente') {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/cliente'] },
        { label: 'Pedido', icon: 'pi pi-shopping-cart', routerLink: ['/cliente/pedidos'] },
        { label: 'Historial', icon: 'pi pi-history', routerLink: ['/cliente/historial'] }
      ];
    } else if (this.rol === 'tecnico') {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/tecnico'] },
        { label: 'Reportes', icon: 'pi pi-chart-line', routerLink: ['/tecnico/reportes'] },
        { label: 'Materiales', icon: 'pi pi-box', routerLink: ['/tecnico/materiales'] }
      ];
    }
  }

  cerrarSesion() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}
