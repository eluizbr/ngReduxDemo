import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppState } from '../../../store';
import { Go } from '../../../store/app.action';
import { selectIsLogged } from '../../login/store/login.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectIsLogged),
      tap(isLogged => {
        if (!isLogged) {
          this.store.dispatch(new Go({ path: ['/login'] }));
        }
      })
    );
  }
}
