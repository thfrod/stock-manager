import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/@shared';
import { AuthModule } from '@app/auth';
import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@app/material.module';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MaterialModule, AuthModule, I18nModule, RouterModule, SharedModule],
  declarations: [SidebarComponent, ShellComponent, HeaderComponent],
})
export class ShellModule {}
