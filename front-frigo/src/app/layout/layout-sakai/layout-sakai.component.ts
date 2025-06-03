import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../servicios/auth.service';

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

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.rol = this.authService.obtenerRol();
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
    } else if (this.rol === 'tecnico') {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/tecnico'] },
        { label: 'Tickets', icon: 'pi pi-ticket', routerLink: ['/tecnico/tickets'] },
        { label: 'Materiales', icon: 'pi pi-box', routerLink: ['/tecnico/materiales'] }
      ];
    } else if (this.rol === 'cliente') {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/cliente'] },
        { label: 'Pedido', icon: 'pi pi-shopping-cart', routerLink: ['/cliente/pedidos'] }
      ];
    }
  }

  cerrarSesion() {
    this.authService.eliminarToken();
    this.router.navigate(['/login']);
  }
}
