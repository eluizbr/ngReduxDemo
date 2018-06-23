import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../store';
import { Go } from '../../../store/app.action';
import { IUser } from '../models/user.model';
import { selectAllusers } from '../store/users.selectors';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users$: Observable<IUser[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.users$ = this.store.pipe(select(selectAllusers));
  }

  userDetails(userId: string) {
    this.store.dispatch(new Go({ path: ['/users', userId, 'edit'] }));
  }
}
