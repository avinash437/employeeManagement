import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewFeedbacksComponent } from './employee-view-feedbacks.component';

describe('EmployeeViewFeedbacksComponent', () => {
  let component: EmployeeViewFeedbacksComponent;
  let fixture: ComponentFixture<EmployeeViewFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeViewFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
