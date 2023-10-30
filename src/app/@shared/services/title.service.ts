import { Injectable } from '@angular/core';
import { EmmitterService } from './emmitter.service';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  public title: string;
  constructor(private readonly emitterService: EmmitterService) {}

  public setPageTitle(title: string) {
    this.title = title;
    this.emitterService.emitTitleChangeEvent(title);
  }

  public resetPageTitle() {
    this.title = '';
  }
}
