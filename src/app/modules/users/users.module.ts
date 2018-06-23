import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersService } from './services/users.service';
import { UsersEffects } from './store/users.effects';
import { userReducer } from './store/users.reducer';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: [UsersComponent, ListUsersComponent],
  providers: [UsersService]
})
export class UsersModule {}
