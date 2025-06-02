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
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessagesModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';
  mensajes: any[] = []; // ✅ Ya no se usa Message

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.usuario, this.clave)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.mensajes = [
        { severity: 'error', summary: 'Error', detail: 'Credenciales inválidas' }
      ];
    }
  }
}
