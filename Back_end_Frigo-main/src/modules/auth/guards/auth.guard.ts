import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.obtenerToken();

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const userRol = authService.obtenerRol();
  const rolesPermitidos = route.data?.['roles'] as string[];

  if (rolesPermitidos && !rolesPermitidos.includes(userRol)) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
