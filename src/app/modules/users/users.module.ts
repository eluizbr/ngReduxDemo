import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  declarations: [UsersComponent, ListUsersComponent]
})
export class UsersModule {}
