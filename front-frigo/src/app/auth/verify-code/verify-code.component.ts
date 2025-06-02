import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-verify-code',
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-code.component.html'
})
export class VerifyCodeComponent {
  codigo: string = '';

  constructor(private router: Router) {}

  verificar() {
    if (this.codigo.trim() === '') {
      alert('Por favor ingresa un código');
      return;
    }

    // Aquí podrías agregar lógica real de verificación
    alert('Código verificado correctamente');
    this.router.navigate(['/reset-password']);
  }
}
