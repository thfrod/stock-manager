import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '@app/@shared/services/modal.service';
import { AuthenticationService, CredentialsService } from '@app/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showFilter = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.checkFilter();
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  public logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  private checkFilter() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('dashboard')) {
      this.showFilter = true;
    }
  }

  public openSideFilter() {
    this.modalService.openSideFilter();
  }
}
