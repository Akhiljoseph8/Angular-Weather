import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const admin=inject(AuthService)
  const router = inject(Router)
  const toastr = inject(ToastrService)
  if (admin.isLoggedIn()) {
    return true;
  } else {
    toastr.warning("please Login First")
    router.navigateByUrl('')
    return false
  }
};
