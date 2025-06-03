import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class VerifyCodeComponent {
  codigo = '';
  error = '';

  constructor(private router: Router) {}

  verificar() {
    const codigoGuardado = localStorage.getItem('codigo_verificacion');

    if (this.codigo === codigoGuardado) {
      alert('Código verificado con éxito');
      this.router.navigate(['/reset-password']);
    } else {
      this.error = 'Código incorrecto. Verifica e intenta de nuevo.';
    }
  }

  volver() {
    this.router.navigate(['/login']);
  }
}

