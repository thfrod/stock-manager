import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SideFilterComponent } from '../components/side-filter/side-filter.component';
import { KeyValuePair } from '../models/keyValuePair.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private readonly dialog: MatDialog) {}

  public openSideFilter(data: { users: KeyValuePair[]; products: KeyValuePair[] }): MatDialogRef<SideFilterComponent> {
    return this.dialog.open(SideFilterComponent, {
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
