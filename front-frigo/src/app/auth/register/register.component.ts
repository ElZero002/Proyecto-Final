import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  cedula = '';
  telefono = '';
  usuario = '';
  correo = '';
  clave = '';

  constructor(private router: Router) {}

  registrar() {
    alert('Usuario registrado');
    this.router.navigate(['/login']);
  }
}
