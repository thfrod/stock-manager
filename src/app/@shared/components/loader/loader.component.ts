import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() size = 2;
  @Input() strokeWidth = 3;
  @Input() message: string | undefined;

  constructor() {}

  ngOnInit() {}
}
