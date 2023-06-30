import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SideFilterComponent } from '../components/side-filter/side-filter.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private readonly dialog: MatDialog) {}

  public openSideFilter(): MatDialogRef<SideFilterComponent> {
    return this.dialog.open(SideFilterComponent, {
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
