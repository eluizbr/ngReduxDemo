import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const CORE_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgbModule
];
@NgModule({
  imports: [CommonModule],
  exports: [...CORE_MODULES],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
