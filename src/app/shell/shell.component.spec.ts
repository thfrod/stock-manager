import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { MockAuthenticationService } from '@app/auth/authentication.service.mock';
import { MockCredentialsService } from '@app/auth/credentials.service.mock';

import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), I18nModule, BrowserAnimationsModule, MaterialModule, RouterTestingModule],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: CredentialsService, useClass: MockCredentialsService },
      ],
      declarations: [SidebarComponent, ShellComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
