import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessagesModule
  ],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  correo: string = '';
  mensajes: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  enviarCodigo() {
    this.http.post('/api/auth/recuperar', { correo: this.correo }).subscribe({
      next: () => {
        localStorage.setItem('correo_recuperacion', this.correo);
        this.router.navigate(['/verificar-codigo']);
      },
      error: () => {
        this.mensajes = [
          { severity: 'error', summary: 'Error', detail: 'Correo no registrado' }
        ];
      }
    });
  }
}