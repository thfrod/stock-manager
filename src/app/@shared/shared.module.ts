import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoTextComponent } from './components/logo-text/logo-text.component';
import { LogoComponent } from './components/logo/logo.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, TranslateModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [LoaderComponent, LogoComponent, LogoTextComponent, SideFilterComponent],
  exports: [LoaderComponent, LogoComponent, LogoTextComponent],
})
export class SharedModule {}
