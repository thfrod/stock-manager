import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUtilsService } from '@app/@shared/services/api-utils.service';
import { EmmitterService } from '@app/@shared/services/emmitter.service';
import { ModalService } from '@app/@shared/services/modal.service';
import { ProductService } from '@app/@shared/services/product.service';
import { TitleService } from '@app/@shared/services/title.service';
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
  public title: string = this.titleService.title;
  public showFilter = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private readonly modalService: ModalService,
    private readonly userService: UserService,
    private readonly productService: ProductService,
    private readonly apiUtilsService: ApiUtilsService,
    private readonly titleService: TitleService,
    private readonly emitterSerivce: EmmitterService
  ) {}

  ngOnInit(): void {
    this.titleChangeListener();
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  public titleChangeListener() {
    this.emitterSerivce.TitleChangeEvent.subscribe((data) => {
      this.title = data;
    });
  }

  public logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  public openSideFilter() {
    const filterName = this.router.url.split('/')[1];

    const filters = {
      products: () => this.openSideFilterProducts(),
      dashboard: () => this.openSideFilterDashboard(),
    };
    filters[filterName]();
  }

  private openSideFilterDashboard() {
    this.busy$.push(
      forkJoin([this.userService.getUsersKeyValuePair(), this.productService.getProductsKeyValuePair()]).subscribe({
        next: (data) => {
          const dialogRef = this.modalService.openSideFilterDashboard({ users: data[0], products: data[1] });
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
            }
          });
        },
        error: () => {},
      })
    );
  }

  private openSideFilterProducts() {
    this.busy$.push(
      forkJoin([this.apiUtilsService.getDepartments(), this.productService.getProductsKeyValuePair()]).subscribe({
        next: (data) => {
          const dialogRef = this.modalService.openSideFilterProducts({ departments: data[0], products: data[1] });
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
            }
          });
        },
        error: () => {},
      })
    );
  }
}
