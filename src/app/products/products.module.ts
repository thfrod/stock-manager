import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { JoinPipe } from '@app/@shared/pipes/join.pipe';
import { MaterialModule } from '@app/material.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { FormProductComponent } from './components/form-product/form-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    FormProductComponent,
    NewProductComponent,
    JoinPipe,
    EditProductComponent,
    ModalDeleteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ProductsRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    MaterialFileInputModule,
  ],
  providers: [],
})
export class ProductsModule {}
