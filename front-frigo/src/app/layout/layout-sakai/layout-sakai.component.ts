import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-layout-sakai',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PanelMenuModule,
    ButtonModule
  ],
  templateUrl: './layout-sakai.component.html',
  styleUrls: ['./layout-sakai.component.scss']
})
export class LayoutSakaiComponent implements OnInit {
  items: MenuItem[] = [];
  rol: string = '';
  menuVisible: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        this.rol = decoded.rol || 'cliente';
      } catch (e) {
        console.error('Token inválido', e);
      }
    }

    this.generarMenu();
  }

  generarMenu() {
    const baseItems: { [key: string]: MenuItem[] } = {
      admin: [
        { label: 'Usuarios', icon: 'pi pi-users', routerLink: ['/admin/usuarios'] },
        { label: 'Materiales', icon: 'pi pi-box', routerLink: ['/admin/materiales'] },
        { label: 'Reportes', icon: 'pi pi-chart-bar', routerLink: ['/admin/reportes'] },
        { label: 'Tickets', icon: 'pi pi-ticket', routerLink: ['/admin/tickets'] }
      ],
      cliente: [
        { label: 'Pedidos', icon: 'pi pi-shopping-cart', routerLink: ['/cliente/pedidos'] }
      ],
      tecnico: [
        { label: 'Formulario', icon: 'pi pi-pencil', routerLink: ['/tecnico/formulario'] },
        { label: 'Materiales', icon: 'pi pi-box', routerLink: ['/tecnico/materiales'] },
        { label: 'Tickets', icon: 'pi pi-ticket', routerLink: ['/tecnico/tickets'] }
      ]
    };

    this.items = baseItems[this.rol] || [];
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
