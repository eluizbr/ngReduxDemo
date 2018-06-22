import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../store';
import { ILogin } from '../models/login.model';
import { Login } from '../store/login.actions';
import { selectShowSpinner } from '../store/login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showSpinner$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: null,
      password: null
    });
  }

  doLogin(payload: ILogin) {
    this.showSpinner$ = this.store.pipe(select(selectShowSpinner));
    this.store.dispatch(new Login(payload));
  }
}
