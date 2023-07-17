import { Component, Input, OnInit } from '@angular/core';
import { TopListCardModel } from '@app/dashboard/models/dashboard.model';

@Component({
  selector: 'app-top-list-card',
  templateUrl: './top-list-card.component.html',
  styleUrls: ['./top-list-card.component.scss'],
})
export class TopListCardComponent implements OnInit {
  @Input() data: TopListCardModel;
  constructor() {}

  ngOnInit(): void {}
}
