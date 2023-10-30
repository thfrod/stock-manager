import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmmitterService {
  public TitleChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  public emitTitleChangeEvent(data: string) {
    this.TitleChangeEvent.emit(data);
  }
}
