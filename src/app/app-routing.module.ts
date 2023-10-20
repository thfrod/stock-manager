import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) },
    { path: 'products', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule) },
    { path: 'not-found', component: NotFoundComponent },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
