import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTS } from '@app/@shared/constants/constants';
import { ProductModel } from '@app/@shared/models/products.model';
import { ProductService } from '@app/@shared/services/product.service';
import { TitleService } from '@app/@shared/services/title.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly productService: ProductService,
    private readonly titleService: TitleService
  ) {}

  public busy$: Subscription[] = [];
  public products: ProductModel[] = [];
  public productDefaultImage: string = CONSTANTS.PRODUCTS.IMAGE_DEFAULT;
  public searchProductTerm: string;
  public displayedColumns: string[] = [
    'image',
    'value',
    'acquisitionPrice',
    'sellingPrice',
    'department',
    'quantity',
    'action',
  ];

  ngOnInit(): void {
    this.productsData();
    this.titleService.setPageTitle('Produtos');
  }

  ngOnDestroy() {
    this.busy$.forEach((subscription) => subscription.unsubscribe());
  }

  public addProduct() {
    this.router.navigate(['/products', 'new-product']);
  }

  public seeProduct(id: string) {
    this.router.navigate(['/products/product', id]);
  }

  public editProduct(id: string) {
    this.router.navigate(['/products/edit-product', id]);
  }

  public deleteProduct(id: string) {}

  private productsData() {
    this.busy$.push(
      this.productService.getProducts().subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (err) => {},
      })
    );
  }
}
