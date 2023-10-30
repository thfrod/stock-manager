import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
  ],
})
export class ProductsModule {}
