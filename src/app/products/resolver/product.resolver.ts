import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DepartmentModel } from '@app/@shared/models/products.model';
import { ApiUtilsService } from '@app/@shared/services/api-utils.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<DepartmentModel[]> {
  constructor(private readonly apiUtilsService: ApiUtilsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DepartmentModel[]> {
    let departments: DepartmentModel[] = [];
    this.apiUtilsService.getDepartments().subscribe({
      next: (result: DepartmentModel[]) => {
        departments = result;
      },
    });

    return of(departments);
  }
}
