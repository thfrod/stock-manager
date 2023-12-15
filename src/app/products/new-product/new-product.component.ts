import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentModel, ProductModel } from '@app/@shared/models/products.model';
import { ProductService } from '@app/@shared/services/product.service';
import { TitleService } from '@app/@shared/services/title.service';
import { Subscription } from 'rxjs';

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
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.titleService.setPageTitle('Novo Produto');
  }

  ngOnDestroy(): void {
    this.busy$.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
