import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectionHeadComponent } from './dashboard-section-head.component';

describe('DashboardSectionHeadComponent', () => {
  let component: DashboardSectionHeadComponent;
  let fixture: ComponentFixture<DashboardSectionHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSectionHeadComponent]
    });
    fixture = TestBed.createComponent(DashboardSectionHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
