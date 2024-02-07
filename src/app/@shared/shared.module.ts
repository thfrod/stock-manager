import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { BusyConfig, NgBusyModule } from 'ng-busy';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DragNDropComponent } from './components/drag-n-drop/drag-n-drop.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoTextComponent } from './components/logo-text/logo-text.component';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SideFilterDashboardComponent } from './components/side-filter-dashboard/side-filter-dashboard.component';
import { SideFilterProductsComponent } from './components/side-filter-products/side-filter-products.component';
import { DragNDropDirective } from './directive/drag-n-drop.directive';
import { FileSizePipe } from './pipes/file-size.pipe';

@NgModule({
  imports: [
    MaterialModule,
    TranslateModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
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
    DragNDropComponent,
    DragNDropDirective,
    FileSizePipe,
  ],
  exports: [LoaderComponent, LogoComponent, LogoTextComponent, DragNDropComponent, NgBusyModule],
})
export class SharedModule {}
