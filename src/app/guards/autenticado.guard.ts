import { CanMatchFn } from '@angular/router';

export const AutenticadoGuard: CanMatchFn = (route, segments) => {
  return true;
};
