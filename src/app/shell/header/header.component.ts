import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '@app/@shared/services/modal.service';
import { ProductService } from '@app/@shared/services/product.service';
import { UserService } from '@app/@shared/services/user.service';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { Subscription, forkJoin } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public busy$: Subscription[] = [];
  public showFilter = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private readonly modalService: ModalService,
    private readonly userService: UserService,
    private readonly productService: ProductService
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
    this.busy$.push(
      forkJoin([this.userService.getUsersKeyValuePair(), this.productService.getProductsKeyValuePair()]).subscribe({
        next: (data) => {
          const dialogRef = this.modalService.openSideFilter({ users: data[0], products: data[1] });
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              console.log(result);
            }
          });
        },
        error: (err) => {
          console.log(err);
        },
      })
    );
  }
}
