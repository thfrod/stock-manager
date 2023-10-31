import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, FormProductComponent, NewProductComponent],
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
