import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { UntilDestroy } from '@shared';

@UntilDestroy()
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  constructor() {}

  ngOnInit() {}
}
