import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin@correo.com' && this.clave === '123456') {
      this.router.navigate(['/admin/usuarios']);
    } else {
      alert('Credenciales inválidas');
    }
  }
}
