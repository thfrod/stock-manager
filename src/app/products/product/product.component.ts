import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public id: string | null = this.route.snapshot.paramMap.get('id');
  public imageIndex: number = 0;

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
    this.initView();
    this.titleService.setPageTitle(`Produto #${this.id}`);
  }

  setMainImage(index: number): void {
    this.imageIndex = index;
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
