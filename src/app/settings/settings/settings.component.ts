import { Component, OnInit } from '@angular/core';
import { TitleService } from '@app/@shared/services/title.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private readonly titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setPageTitle('Settings');
  }
}
