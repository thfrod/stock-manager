import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentModel, ProductModel } from '@app/@shared/models/products.model';
import { AlertService } from '@app/@shared/services/alert.service';
import { ProductService } from '@app/@shared/services/product.service';
import { TitleService } from '@app/@shared/services/title.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  public busy$: Subscription[] = [];
  public product: ProductModel = this.productService.getEmptyProduct();
  public departments: DepartmentModel[] = this.route.snapshot.data['departments'];

  constructor(
    private readonly productService: ProductService,
    private readonly titleService: TitleService,
    private readonly route: ActivatedRoute,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.titleService.setPageTitle('Novo Produto');
  }

  ngOnDestroy(): void {
    this.busy$.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  public onSubmit(): void {
    this.busy$.push(
      timer(1500).subscribe({
        next: () => {
          this.alertService.success('Produto cadastrado com sucesso!');
        },
        error: () => {
          this.alertService.success('Produto cadastrado com sucesso!');
        },
      })
    );
  }
}
