import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectionTeamComponent } from './dashboard-section-team.component';

describe('DashboardSectionTeamComponent', () => {
  let component: DashboardSectionTeamComponent;
  let fixture: ComponentFixture<DashboardSectionTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSectionTeamComponent]
    });
    fixture = TestBed.createComponent(DashboardSectionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
