import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';

  guardarToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  eliminarToken() {
    localStorage.removeItem(this.tokenKey);
  }

  estaAutenticado(): boolean {
    return !!this.obtenerToken();
  }

  obtenerUsuario(): any {
    const token = this.obtenerToken();
    if (!token) return null;
    try {
      return JSON.parse(atob(token));
    } catch (e) {
      return null;
    }
  }

  obtenerRol(): string {
    const user = this.obtenerUsuario();
    return user?.rol ?? '';
  }

  obtenerCorreo(): string {
    const user = this.obtenerUsuario();
    return user?.correo ?? '';
  }
}
