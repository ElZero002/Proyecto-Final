import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this.router.navigate(['/admin']);
    } else if (this.usuario === 'cliente' && this.clave === 'cliente') {
      this.router.navigate(['/cliente']);
    } else if (this.usuario === 'tecnico' && this.clave === 'tecnico') {
      this.router.navigate(['/tecnico']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

  irARegistro() {
    this.router.navigate(['/register']);
  }

  irAOlvido() {
    this.router.navigate(['/forgot-password']);
  }
}
