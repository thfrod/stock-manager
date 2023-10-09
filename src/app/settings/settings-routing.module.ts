import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{ path: '', component: SettingsComponent, data: { title: marker('Settings') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
