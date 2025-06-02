import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    MessagesModule
  ],
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {
  clave: string = '';
  mensajes: any[] = [];
  correo = localStorage.getItem('correo_recuperacion') || '';

  constructor(private http: HttpClient, private router: Router) {}

  cambiarContrasena() {
    this.http.post('/api/auth/reset-password', { correo: this.correo, nuevaClave: this.clave }).subscribe({
      next: () => {
        this.mensajes = [
          { severity: 'success', summary: 'Contraseña cambiada', detail: 'Redirigiendo al login...' }
        ];
        setTimeout(() => {
          localStorage.removeItem('correo_recuperacion');
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: () => {
        this.mensajes = [
          { severity: 'error', summary: 'Error', detail: 'No se pudo actualizar la contraseña.' }
        ];
      }
    });
  }
}