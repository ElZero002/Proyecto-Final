import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-reset-password',
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {
  clave: string = '';

  constructor(private router: Router) {}

  guardar() {
    if (this.clave.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Aquí deberías enviar la contraseña al backend
    alert('Contraseña actualizada correctamente');
    this.router.navigate(['/login']);
  }
}
