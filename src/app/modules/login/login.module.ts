import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { LoginEffects } from './store/login.effects';
import * as fromLogin from './store/login.reducer';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    StoreModule.forFeature('login', fromLogin.loginReducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {}
