import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Ajusta la ruta de tu servicio

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verificamos si hay un usuario logueado en el servicio
  if (authService.currentUser !== null) {
    return true; // Permitir el paso
  }

  // Si no está logueado, lo redirigimos al login (ruta raíz)
  router.navigate(['']);
  return false;
};