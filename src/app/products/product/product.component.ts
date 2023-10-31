import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyValuePair } from '@app/@shared/models/keyValuePair.model';
import { ProductModel } from '@app/@shared/models/products.model';
import { AlertService } from '@app/@shared/services/alert.service';
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
  public departments: KeyValuePair[] = this.route.snapshot.data['departments'];
  private id: string | null = this.route.snapshot.paramMap.get('id');

  constructor(
    private readonly productService: ProductService,
    private readonly titleService: TitleService,
    private readonly alertService: AlertService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnDestroy(): void {
    this.busy$.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (this.editing = !!params['edit']));
    this.titleService.setPageTitle('Produtos');
    this.initView();
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
}
