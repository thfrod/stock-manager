import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  public removeAccents(str: string): string {
    const textWithoutAccents = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return textWithoutAccents;
  }
}
