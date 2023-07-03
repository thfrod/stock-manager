import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KeyValuePair } from '../models/keyValuePair.model';
import { ProductModel } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

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
        image: 'imagem1.jpg',
        departmentId: 1,
      },
      {
        id: 2,
        value: 'Camiseta',
        acquisitionPrice: 80,
        sellingPrice: 120,
        quantity: 30,
        quantitySold: 10,
        description: 'Descrição da Camiseta',
        image: 'imagem2.jpg',
        departmentId: 1,
      },
      {
        id: 3,
        value: 'Calça Jeans',
        acquisitionPrice: 120,
        sellingPrice: 180,
        quantity: 60,
        quantitySold: 25,
        description: 'Descrição da Calça Jeans',
        image: 'imagem3.jpg',
        departmentId: 1,
      },
      {
        id: 4,
        value: 'Tênis',
        acquisitionPrice: 90,
        sellingPrice: 135,
        quantity: 40,
        quantitySold: 15,
        description: 'Descrição do Tênis',
        image: 'imagem4.jpg',
        departmentId: 1,
      },
      {
        id: 5,
        value: 'Saia',
        acquisitionPrice: 150,
        sellingPrice: 225,
        quantity: 70,
        quantitySold: 30,
        description: 'Descrição da Saia',
        image: 'imagem5.jpg',
        departmentId: 1,
      },
      {
        id: 6,
        value: 'Blusa',
        acquisitionPrice: 110,
        sellingPrice: 165,
        quantity: 55,
        quantitySold: 22,
        description: 'Descrição da Blusa',
        image: 'imagem6.jpg',
        departmentId: 1,
      },
      {
        id: 7,
        value: 'Jaqueta',
        acquisitionPrice: 95,
        sellingPrice: 142.5,
        quantity: 35,
        quantitySold: 12,
        description: 'Descrição da Jaqueta',
        image: 'imagem7.jpg',
        departmentId: 1,
      },
      {
        id: 8,
        value: 'Sapato',
        acquisitionPrice: 130,
        sellingPrice: 195,
        quantity: 65,
        quantitySold: 28,
        description: 'Descrição do Sapato',
        image: 'imagem8.jpg',
        departmentId: 1,
      },
      {
        id: 9,
        value: 'Shorts',
        acquisitionPrice: 140,
        sellingPrice: 210,
        quantity: 75,
        quantitySold: 32,
        description: 'Descrição do Shorts',
        image: 'imagem9.jpg',
        departmentId: 1,
      },
      {
        id: 10,
        value: 'Chinelo',
        acquisitionPrice: 70,
        sellingPrice: 105,
        quantity: 25,
        quantitySold: 8,
        description: 'Descrição do Chinelo',
        image: 'imagem10.jpg',
        departmentId: 1,
      },
    ]);
  }

  public getProductsKeyValuePair(): Observable<KeyValuePair[]> {
    return of([
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
    ]);
  }
}
