import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectionTimelineComponent } from './dashboard-section-timeline.component';

describe('DashboardSectionTimelineComponent', () => {
  let component: DashboardSectionTimelineComponent;
  let fixture: ComponentFixture<DashboardSectionTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSectionTimelineComponent]
    });
    fixture = TestBed.createComponent(DashboardSectionTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
