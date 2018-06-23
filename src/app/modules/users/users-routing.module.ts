import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersResolver } from './services/users-resolver.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list',
        component: ListUsersComponent,
        resolve: [UsersResolver]
      },
      {
        path: ':id/edit',
        component: EditUsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
