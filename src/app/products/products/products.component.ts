import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS } from '@app/@shared/constants/constants';
import { ProductModel } from '@app/@shared/models/products.model';
import { ProductService } from '@app/@shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute, private readonly productService: ProductService) {}

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
  }

  ngOnDestroy() {
    this.busy$.forEach((subscription) => subscription.unsubscribe());
  }

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

  public addProduct() {}
}
