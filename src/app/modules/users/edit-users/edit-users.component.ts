import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../store';
import { Go } from '../../../store/app.action';
import { IUser } from '../models/user.model';
import { selectUserById } from '../store/users.selectors';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.user$ = this.store.pipe(select(selectUserById(param['id'])));
    });
  }

  back() {
    this.store.dispatch(new Go({ path: ['/users/list'] }));
  }
}
