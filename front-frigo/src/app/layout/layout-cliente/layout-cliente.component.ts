import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule, PanelMenuModule],
  templateUrl: './layout-cliente.component.html',
  styleUrls: ['./layout-cliente.component.scss']
})
export class LayoutClienteComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/cliente'] },
      { label: 'Mis Pedidos', icon: 'pi pi-shopping-cart', routerLink: ['/cliente/pedidos'] }
    ];
  }

  cerrarSesion(): void {
    this.router.navigate(['/login']);
  }
}
