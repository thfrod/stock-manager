import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFilterProductsComponent } from './side-filter-products.component';

describe('SideFilterProductsComponent', () => {
  let component: SideFilterProductsComponent;
  let fixture: ComponentFixture<SideFilterProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideFilterProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideFilterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
