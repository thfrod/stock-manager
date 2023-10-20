import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/products.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly utilsService: UtilsService) {}

  public getProducts(): Observable<ProductModel[]> {
    return of([
      {
        id: 1,
        value: 'Vestido',
        acquisitionPrice: 100,
        sellingPrice: 150,
        quantity: 50,
        quantitySold: 20,
        description: 'Descrição do Vestido',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 2,
        value: 'Camiseta',
        acquisitionPrice: 80,
        sellingPrice: 120,
        quantity: 30,
        quantitySold: 10,
        description: 'Descrição da Camiseta',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 3,
        value: 'Calça Jeans',
        acquisitionPrice: 120,
        sellingPrice: 180,
        quantity: 60,
        quantitySold: 25,
        description: 'Descrição da Calça Jeans',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 4,
        value: 'Tênis',
        acquisitionPrice: 90,
        sellingPrice: 135,
        quantity: 40,
        quantitySold: 15,
        description: 'Descrição do Tênis',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 5,
        value: 'Saia',
        acquisitionPrice: 150,
        sellingPrice: 225,
        quantity: 70,
        quantitySold: 30,
        description: 'Descrição da Saia',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 6,
        value: 'Blusa',
        acquisitionPrice: 110,
        sellingPrice: 165,
        quantity: 55,
        quantitySold: 22,
        description: 'Descrição da Blusa',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 7,
        value: 'Jaqueta',
        acquisitionPrice: 95,
        sellingPrice: 142.5,
        quantity: 35,
        quantitySold: 12,
        description: 'Descrição da Jaqueta',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 8,
        value: 'Sapato',
        acquisitionPrice: 130,
        sellingPrice: 195,
        quantity: 65,
        quantitySold: 28,
        description: 'Descrição do Sapato',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 9,
        value: 'Shorts',
        acquisitionPrice: 140,
        sellingPrice: 210,
        quantity: 75,
        quantitySold: 32,
        description: 'Descrição do Shorts',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 10,
        value: 'Chinelo',
        acquisitionPrice: 70,
        sellingPrice: 105,
        quantity: 25,
        quantitySold: 8,
        description: 'Descrição do Chinelo',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
    ]);
  }

  public getProductsKeyValuePair(): Observable<ProductModel[]> {
    const products: ProductModel[] = [
      {
        id: 1,
        value: 'Vestido',
      },
      {
        id: 2,
        value: 'Camiseta',
      },
      {
        id: 3,
        value: 'Calça Jeans',
      },
      {
        id: 4,
        value: 'Tênis',
      },
      {
        id: 5,
        value: 'Saia',
      },
      {
        id: 6,
        value: 'Blusa',
      },
      {
        id: 7,
        value: 'Jaqueta',
      },
      {
        id: 8,
        value: 'Sapato',
      },
      {
        id: 9,
        value: 'Shorts',
      },
      {
        id: 10,
        value: 'Chinelo',
      },
    ];

    products.forEach((product) => {
      const nameWithoutAccents = this.utilsService.removeAccents(product.value);
      product.search = `${product.value}|${nameWithoutAccents}`;
    });

    return of(products);
  }

  public getProductById(id: string): Observable<ProductModel> {
    const products: ProductModel[] = [
      {
        id: 1,
        value: 'Vestido',
        acquisitionPrice: 100,
        sellingPrice: 150,
        quantity: 50,
        quantitySold: 20,
        description: 'Descrição do Vestido',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 2,
        value: 'Camiseta',
        acquisitionPrice: 80,
        sellingPrice: 120,
        quantity: 30,
        quantitySold: 10,
        description: 'Descrição da Camiseta',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 3,
        value: 'Calça Jeans',
        acquisitionPrice: 120,
        sellingPrice: 180,
        quantity: 60,
        quantitySold: 25,
        description: 'Descrição da Calça Jeans',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 4,
        value: 'Tênis',
        acquisitionPrice: 90,
        sellingPrice: 135,
        quantity: 40,
        quantitySold: 15,
        description: 'Descrição do Tênis',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 5,
        value: 'Saia',
        acquisitionPrice: 150,
        sellingPrice: 225,
        quantity: 70,
        quantitySold: 30,
        description: 'Descrição da Saia',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 6,
        value: 'Blusa',
        acquisitionPrice: 110,
        sellingPrice: 165,
        quantity: 55,
        quantitySold: 22,
        description: 'Descrição da Blusa',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 7,
        value: 'Jaqueta',
        acquisitionPrice: 95,
        sellingPrice: 142.5,
        quantity: 35,
        quantitySold: 12,
        description: 'Descrição da Jaqueta',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 8,
        value: 'Sapato',
        acquisitionPrice: 130,
        sellingPrice: 195,
        quantity: 65,
        quantitySold: 28,
        description: 'Descrição do Sapato',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 9,
        value: 'Shorts',
        acquisitionPrice: 140,
        sellingPrice: 210,
        quantity: 75,
        quantitySold: 32,
        description: 'Descrição do Shorts',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
      {
        id: 10,
        value: 'Chinelo',
        acquisitionPrice: 70,
        sellingPrice: 105,
        quantity: 25,
        quantitySold: 8,
        description: 'Descrição do Chinelo',
        department: {
          id: 1,
          value: 'Masculino',
        },
      },
    ];

    const product = products.find((product) => product.id === Number(id)) ?? this.getEmptyProduct();
    return of(product);
  }

  public getEmptyProduct(): ProductModel {
    return {
      id: 0,
      value: '',
      acquisitionPrice: 0,
      sellingPrice: 0,
      quantity: 0,
      quantitySold: 0,
      description: '',
      department: {
        id: 0,
        value: '',
      },
    };
  }
}
