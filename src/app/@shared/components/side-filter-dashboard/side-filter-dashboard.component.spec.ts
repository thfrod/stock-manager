import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFilterDashboardComponent } from './side-filter-dashboard.component';

describe('SideFilterComponent', () => {
  let component: SideFilterDashboardComponent;
  let fixture: ComponentFixture<SideFilterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideFilterDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideFilterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
