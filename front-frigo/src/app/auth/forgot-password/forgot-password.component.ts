import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule],
  template: `
  <div class="form-wrapper">
    <div class="form-box">
      <img src="assets/logo-frigoservicios.png" class="logo" />
      <h2 class="title">📧 Recuperar Contraseña</h2>
      <p class="subtitle">Ingresa tu correo para recibir un código</p>

      <form (ngSubmit)="enviarCodigo()" #form="ngForm">
        <label>Correo electrónico</label>
        <input type="email" name="correo" [(ngModel)]="correo" required />
        <button type="submit" class="btn-green">Enviar código</button>
      </form>
    </div>
  </div>
  `,
  styles: [`
    .form-wrapper {
      background: linear-gradient(to bottom, #fff, #e0f0ff);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .form-box {
      background: white;
      border: 3px solid #1976d2;
      border-radius: 25px;
      padding: 2rem;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 0 15px rgba(0,0,0,0.1);
      text-align: center;
    }
    .logo { width: 70%; margin-bottom: 1rem; border-radius: 12px; }
    .title { color: #1976d2; font-size: 1.5rem; margin-bottom: 0.2rem; }
    .subtitle { color: #ff6f00; font-size: 0.95rem; margin-bottom: 1.5rem; }
    input {
      width: 100%;
      padding: 0.65rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .btn-green {
      background: #00c853;
      color: white;
      border: none;
      border-radius: 10px;
      padding: 0.75rem;
      width: 100%;
      font-weight: bold;
    }
    .btn-green:hover { background: #00b34a; }
  `]
})
export class ForgotPasswordComponent {
  correo = '';
  constructor(private router: Router) {}

  enviarCodigo() {
    alert('Código enviado a ' + this.correo);
    this.router.navigate(['/verificar-codigo']);
  }
}
