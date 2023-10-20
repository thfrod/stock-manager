import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '@app/@shared/models/products.model';
import { ProductService } from '@app/@shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public busy$: Subscription[] = [];
  public product: ProductModel = this.productService.getEmptyProduct();
  private id: string | null = this.route.snapshot.paramMap.get('id');

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly productService: ProductService
  ) {}

  ngOnDestroy(): void {
    this.busy$.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.initView();
  }

  private initView() {
    if (this.id) {
      this.getProduct(this.id);
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  private getProduct(id: string): void {
    this.busy$.push(
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product;
          console.log(this.product);
        },

        error: (err) => {},
      })
    );
  }
}
