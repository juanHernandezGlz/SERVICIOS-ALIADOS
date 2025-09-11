import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getUser();
  const expireAT = localStorage.getItem('expire_at');
  
  //CONDICION SI NO ESTÁ LOGUEADO -> REDIRIGE A LOGIN
  if (!user || !expireAT || new Date().getTime() > +expireAT) {
    authService.logout();
    return false;
  }

  //EVITAR ACCESO AL LOGI SI YA ESTÁ AUTENTICADO
  if(state.url === '/login'){
    router.navigate(['/inicio'],{replaceUrl: true});
    return false;
  }

  //SI LA RUTA REQUIERE ROLES ESPECIFICOS
  const expectedRoles = route.data?.['roles'] as string[];
  if(expectedRoles && !expectedRoles.includes(user.role)){
    router.navigate(['/inicio']);
    return false;
  }

  return true;
};
