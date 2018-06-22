import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../store';
import { Logout } from '../../login/store/login.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  logout() {
    this.store.dispatch(new Logout());
  }
}
