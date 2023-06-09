import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectionStaticComponent } from './dashboard-section-static.component';

describe('DashboardSectionStaticComponent', () => {
  let component: DashboardSectionStaticComponent;
  let fixture: ComponentFixture<DashboardSectionStaticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSectionStaticComponent]
    });
    fixture = TestBed.createComponent(DashboardSectionStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
