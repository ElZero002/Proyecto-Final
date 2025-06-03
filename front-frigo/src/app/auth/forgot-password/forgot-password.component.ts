import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ForgotPasswordComponent {
  correo = '';
  error = '';

  constructor(private router: Router) {}

  enviarCodigo() {
    const correoValido = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.correo);

    if (!correoValido) {
      this.error = 'Ingresa un correo electrónico válido.';
      return;
    }

    const codigo = Math.floor(100000 + Math.random() * 900000).toString(); // 6 dígitos
    localStorage.setItem('codigo_verificacion', codigo);
    localStorage.setItem('correo_recuperacion', this.correo);

    // Simula envío de código (esto deberías cambiar por un servicio real)
    console.log(`Código enviado a ${this.correo}: ${codigo}`);

    alert('Se ha enviado un código de verificación a tu correo');
    this.router.navigate(['/verify-code']);
  }
}

