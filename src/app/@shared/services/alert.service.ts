import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  public success(message: string, btn: string = 'Fechar'): void {
    this.snackBar.open(message, btn, {
      duration: 30000,
      panelClass: ['alert', 'alert-success'],
    });
  }

  public error(message: string, btn: string = 'Fechar'): void {
    this.snackBar.open(message, btn, {
      duration: 3000,
      panelClass: ['alert', 'alert-error'],
    });
  }

  public info(message: string, btn: string = 'Fechar'): void {
    this.snackBar.open(message, btn, {
      duration: 3000,
      panelClass: ['alert', 'alert-info'],
    });
  }
}
