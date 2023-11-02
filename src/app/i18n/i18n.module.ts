import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/material.module';
import { LanguageSelectorComponent } from './language-selector.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MaterialModule],
  declarations: [LanguageSelectorComponent],
  exports: [LanguageSelectorComponent],
})
export class I18nModule {}
