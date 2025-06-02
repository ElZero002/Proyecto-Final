import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessagesModule
  ],
  templateUrl: './verify-code.component.html'
})
export class VerifyCodeComponent {
  codigo: string = '';
  mensajes: any[] = [];
  correo = localStorage.getItem('correo_recuperacion') || '';

  constructor(private http: HttpClient, private router: Router) {}

  verificarCodigo() {
    this.http.post('/api/auth/verificar-codigo', { correo: this.correo, codigo: this.codigo }).subscribe({
      next: (val: any) => {
        if (val === true) {
          this.router.navigate(['/reset-password']);
        } else {
          this.mensajes = [
            { severity: 'error', summary: 'Código inválido', detail: 'Verifica el código ingresado.' }
          ];
        }
      },
      error: () => {
        this.mensajes = [
          { severity: 'error', summary: 'Error', detail: 'No se pudo verificar el código.' }
        ];
      }
    });
  }
}