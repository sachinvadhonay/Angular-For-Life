import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // ❌ Not logged in
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // 🔐 Role-based check
  const allowedRoles = route.data?.['roles'] as string[];

  if (allowedRoles && !allowedRoles.includes(role!)) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
    