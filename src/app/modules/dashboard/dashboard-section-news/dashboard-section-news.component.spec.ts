import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectionNewsComponent } from './dashboard-section-news.component';

describe('DashboardSectionNewsComponent', () => {
  let component: DashboardSectionNewsComponent;
  let fixture: ComponentFixture<DashboardSectionNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSectionNewsComponent]
    });
    fixture = TestBed.createComponent(DashboardSectionNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
