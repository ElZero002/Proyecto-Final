import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // si te da error, cambia a '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  cedula = '';
  telefono = '';
  usuario = '';
  correo = '';
  clave = '';

  constructor(private router: Router) {}

  registrar() {
    console.log('Usuario registrado:', {
      cedula: this.cedula,
      telefono: this.telefono,
      usuario: this.usuario,
      correo: this.correo,
      clave: this.clave
    });
    alert('Registro exitoso');
    this.router.navigate(['/login']); // opcional, puedes mantenerlo o no después del registro
  }

  irAlLogin() {
    this.router.navigate(['/login']);
  }
}

