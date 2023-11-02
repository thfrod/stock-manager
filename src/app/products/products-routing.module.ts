import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductResolver } from './resolver/product.resolver';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: ProductsComponent, data: { title: marker('Produtos') } },
  {
    path: 'product/:id',
    component: ProductComponent,
    data: { title: marker('Produtos') },
    resolve: { departments: ProductResolver },
  },
  {
    path: 'new-product',
    component: NewProductComponent,
    data: { title: marker('Novo Produto') },
    resolve: { departments: ProductResolver },
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    data: { title: marker('Produtos') },
    resolve: { departments: ProductResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
