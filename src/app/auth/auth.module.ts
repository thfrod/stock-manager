import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@shared';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    MaterialModule,
    I18nModule,
    AuthRoutingModule,
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
