import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalDeleteComponent } from '../components/modal-delete/modal-delete.component';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  constructor(private readonly dialog: MatDialog) {}

  public openModalDeleteProduct(): MatDialogRef<ModalDeleteComponent> {
    return this.dialog.open(ModalDeleteComponent, {
      maxWidth: '95vw',
      panelClass: 'modal-delete-product',
    });
  }
}
