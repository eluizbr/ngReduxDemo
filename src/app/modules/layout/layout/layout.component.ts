import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../store';
import { Logout } from '../../login/store/login.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  constructor(private store: Store<AppState>) {}

  logout() {
    this.store.dispatch(new Logout());
  }
}
