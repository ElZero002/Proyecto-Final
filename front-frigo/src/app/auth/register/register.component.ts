import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessagesModule
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  nombre: string = '';
  correo: string = '';
  usuario: string = '';
  clave: string = '';
  mensajes: any[] = []; // ✅ Reemplaza el tipo Message[]

  constructor(private authService: AuthService, private router: Router) {}

  registrar() {
    if (this.usuario && this.clave && this.correo && this.nombre) {
      this.mensajes = [
        { severity: 'success', summary: 'Registro exitoso', detail: 'Usuario creado correctamente' }
      ];
      setTimeout(() => this.router.navigate(['/login']), 1500);
    } else {
      this.mensajes = [
        { severity: 'error', summary: 'Error', detail: 'Todos los campos son obligatorios' }
      ];
    }
  }
}
