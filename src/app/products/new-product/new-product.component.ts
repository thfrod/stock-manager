import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentModel, ProductModel } from '@app/@shared/models/products.model';
import { ProductService } from '@app/@shared/services/product.service';
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

  constructor(private readonly productService: ProductService, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.busy$.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
