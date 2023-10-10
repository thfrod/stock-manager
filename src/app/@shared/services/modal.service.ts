import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SideFilterDashboardComponent } from '../components/side-filter-dashboard/side-filter-dashboard.component';
import { SideFilterProductsComponent } from '../components/side-filter-products/side-filter-products.component';
import { KeyValuePair } from '../models/keyValuePair.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private readonly dialog: MatDialog) {}

  public openSideFilterDashboard(data: {
    users: KeyValuePair[];
    products: KeyValuePair[];
  }): MatDialogRef<SideFilterDashboardComponent> {
    return this.dialog.open(SideFilterDashboardComponent, {
      data,
      width: '400px',
      height: '100%',
      position: {
        right: '0',
        top: '0',
      },
      panelClass: ['side-filter', 'animate-slideInRight'],
    });
  }

  public openSideFilterProducts(data: {
    departments: KeyValuePair[];
    products: KeyValuePair[];
  }): MatDialogRef<SideFilterProductsComponent> {
    return this.dialog.open(SideFilterProductsComponent, {
      data,
      width: '400px',
      height: '100%',
      position: {
        right: '0',
        top: '0',
      },
      panelClass: ['side-filter', 'animate-slideInRight'],
    });
  }
}
