import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { BusyConfig, NgBusyModule } from 'ng-busy';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoTextComponent } from './components/logo-text/logo-text.component';
import { LogoComponent } from './components/logo/logo.component';
import { SideFilterDashboardComponent } from './components/side-filter-dashboard/side-filter-dashboard.component';
import { SideFilterProductsComponent } from './components/side-filter-products/side-filter-products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgBusyModule.forRoot(
      new BusyConfig({
        delay: 200,
        minDuration: 1000,
        template: LoaderComponent,
        disableAnimation: true,
      })
    ),
  ],
  declarations: [
    LoaderComponent,
    LogoComponent,
    LogoTextComponent,
    SideFilterDashboardComponent,
    SideFilterProductsComponent,
    NotFoundComponent,
  ],
  exports: [LoaderComponent, LogoComponent, LogoTextComponent, NgBusyModule],
})
export class SharedModule {}
