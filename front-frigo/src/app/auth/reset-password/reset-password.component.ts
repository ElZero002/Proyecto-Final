import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ResetPasswordComponent {
  clave = '';

  constructor(private router: Router) {}

  guardar() {
    if (this.clave.length >= 6) {
      alert('Contraseña guardada exitosamente');
      this.router.navigate(['/login']); // Redirigir al login
    } else {
      alert('La contraseña debe tener al menos 6 caracteres');
    }
  }
}
