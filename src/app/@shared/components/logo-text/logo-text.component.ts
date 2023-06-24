import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-text',
  templateUrl: './logo-text.component.html',
  styleUrls: ['./logo-text.component.scss'],
})
export class LogoTextComponent {
  @Input() size = 140;
  @Input() color = '#4338CA';

  constructor() {}
}
