import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyValuePair } from '@app/@shared/models/keyValuePair.model';
import { ProductModel } from '@app/@shared/models/products.model';
import { AlertService } from '@app/@shared/services/alert.service';
import { ApiUtilsService } from '@app/@shared/services/api-utils.service';
import { ProductService } from '@app/@shared/services/product.service';
import { TitleService } from '@app/@shared/services/title.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public busy$: Subscription[] = [];
  public product: ProductModel = this.productService.getEmptyProduct();
  public editing: boolean = false;
  private id: string | null = this.route.snapshot.paramMap.get('id');
  public departments: KeyValuePair[] = [];
  public departmentsFiltered = this.departments.slice();

  constructor(
    private readonly productService: ProductService,
    private readonly titleService: TitleService,
    private readonly alertService: AlertService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly apiUtilsService: ApiUtilsService
  ) {}

  ngOnDestroy(): void {
    this.busy$.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (this.editing = !!params['edit']));
    this.titleService.setPageTitle('Produtos');
    this.initView();
    this.getDepartments();
  }

  private initView() {
    if (this.id) {
      this.getProduct(this.id);
      return;
    }
    this.router.navigate(['/not-found']);
  }

  private getProduct(id: string): void {
    this.busy$.push(
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product;
        },

        error: () => {
          this.alertService.error('Erro ao buscar produto', 'Fechar');
        },
      })
    );
  }
  compareFn(item1: KeyValuePair, item2: KeyValuePair) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  private getDepartments(): void {
    this.busy$.push(
      this.apiUtilsService.getDepartments().subscribe({
        next: (departments) => {
          this.departments = departments;
          this.departmentsFiltered = departments.slice();
        },

        error: () => {
          this.alertService.error('Erro ao buscar departamentos', 'Fechar');
        },
      })
    );
  }

  compareWithFn(item1, item2) {
    return item1 && item2 ? item1.nom === item2.nom : item1 === item2;
  }
}
