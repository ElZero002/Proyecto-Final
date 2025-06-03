import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-tecnico',
  standalone: true,
  imports: [CommonModule, RouterModule, PanelMenuModule],
  templateUrl: './layout-tecnico.component.html',
  styleUrls: ['./layout-tecnico.component.scss']
})
export class LayoutTecnicoComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/tecnico'] },
      { label: 'Tickets', icon: 'pi pi-ticket', routerLink: ['/tecnico/tickets'] },
      { label: 'Materiales', icon: 'pi pi-ticket', routerLink: ['/tecnico/materiales'] },
      { label: 'Reportes', icon: 'pi pi-file', routerLink: ['/tecnico/reportes'] }
    ];
  }

  cerrarSesion(): void {
    this.router.navigate(['/login']);
  }
}
