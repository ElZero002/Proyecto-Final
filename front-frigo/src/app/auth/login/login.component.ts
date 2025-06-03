import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  usuario = '';
  clave = '';

  constructor(private router: Router) {}

  login() {
    let rol = '';

    if (this.usuario === 'jossymena06@gmail.com' && this.clave === 'admin123') {
      rol = 'admin';
    } else if (this.usuario.endsWith('@gmail.com')) {
      if (this.usuario.includes('cliente')) {
        rol = 'cliente';
      } else if (this.usuario.includes('tecnico')) {
        rol = 'tecnico';
      }
    } else {
      alert('Credenciales incorrectas');
      return;
    }

    const payload = { email: this.usuario, rol: rol };
    const token = btoa(JSON.stringify(payload)); // Simulación base64
    localStorage.setItem('auth_token', token);

    if (rol === 'admin') this.router.navigate(['/admin']);
    else if (rol === 'cliente') this.router.navigate(['/cliente']);
    else this.router.navigate(['/tecnico']);
  }

  irARegistro() {
    this.router.navigate(['/register']);
  }

  irAOlvido() {
    this.router.navigate(['/forgot-password']);
  }
}
