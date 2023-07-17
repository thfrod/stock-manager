import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListCardComponent } from './top-list-card.component';

describe('TopListCardComponent', () => {
  let component: TopListCardComponent;
  let fixture: ComponentFixture<TopListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopListCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
