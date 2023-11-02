import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyValuePair } from '@app/@shared/models/keyValuePair.model';
import { ProductModel } from '@app/@shared/models/products.model';
import { AlertService } from '@app/@shared/services/alert.service';
import { ProductService } from '@app/@shared/services/product.service';
import { TitleService } from '@app/@shared/services/title.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  public busy$: Subscription[] = [];
  public departments: KeyValuePair[] = this.route.snapshot.data['departments'];
  public product: ProductModel = this.productService.getEmptyProduct();
  private id: string | null = this.route.snapshot.paramMap.get('id');

  constructor(
    private readonly productService: ProductService,
    private readonly titleService: TitleService,
    private readonly alertService: AlertService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initView();
    this.titleService.setPageTitle(`Produto #${this.id}`);
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
