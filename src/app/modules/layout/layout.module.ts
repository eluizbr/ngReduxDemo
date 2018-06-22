import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutEffects } from './store/layout.effects';
import * as fromLayout from './store/layout.reducer';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule,
    StoreModule.forFeature('layout', fromLayout.layoutReducer),
    EffectsModule.forFeature([LayoutEffects])
  ],
  declarations: [MainComponent]
})
export class LayoutModule {}
