import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorInterceptor } from '../../services/errorInterceptor.service';

const CORE_MODULES = [ReactiveFormsModule, HttpClientModule, CommonModule];
@NgModule({
  imports: [CommonModule],
  exports: [...CORE_MODULES],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
